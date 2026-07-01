import { supabase } from "../lib/supabase";
import { clearCart } from "../utils/cart";

export async function checkoutOrder(customerName, cart){
    if(!customerName) throw new Error("Nama wajib diisi");
    
    const total = cart.reduce((sum, item) => {
        return sum + item.harga*item.quantity;
    }, 0);

    const { data: order, error: orderError} = await supabase.from("order").insert([{
        nama_customer: customerName,
        total: total,
        status: "pending"
    },    
    ]).select().single();

    if (orderError) throw orderError;

    const detail = cart.map((item) => ({
        id_order: order.id_order,
        id_menu: item.id_menu,
        harga: item.harga,
        qty: item.quantity,
        subtotal: item.harga * item.quantity
    }));

    const { error: detailError } = await supabase.from("detail_order").insert(detail);

    if(detailError) throw detailError;

    clearCart();

    return order
    
}



export async function getOrder() {
    const { data, error } = await supabase.from("order").select("*");

    if(error){
        console.error(error)
        return [];
    }

    return data;
}

export async function getDetailOrder() {
    const { data, error } = await supabase.from("detail_order").select("*, menu(nama_menu)");

    if (error) {
        console.error(error)
        return []
    }
    return data;
}

export async function updateStatus(id_order) {
    const { data: currentOrder, error: error } = await supabase.from("order").select("status").eq("id_order", id_order).single();

    if (error) {
        console.log('gagal mengambil data')
    }else{
        let newStatus = null;

        if(currentOrder.status === 'pending'){
            newStatus = 'processing'
        }else if(currentOrder.status === 'processing'){
            newStatus = 'done'
        }

        if (newStatus) {
            const { data, error } = await supabase.from("order").update({status: newStatus}).eq("id_order", id_order)
        }
    }
}