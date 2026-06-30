
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getCart,
    decreaseQty,
    increaseQty,
    deleteItemCart
} from "../../utils/cart";
import { checkoutOrder } from "../../services/orderServices";

function Cart() {
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [customerName, setCustomerName] = useState("");

    async function handleCheckout() {
        try {
            console.log("Customer :", customerName);
            console.log("Cart :", cart);
            const order = await checkoutOrder(customerName, cart);

            console.log("sukses", order);

            setCart(getCart());
            setCustomerName("");
            setShowModal(false);
            
            console.log("terkirim")
        }catch (err){
            console.error(err.message);
            alert(err.message)
        }
    }

    useEffect(() => {
        setCart(getCart());
    }, []);

    const totalHarga = cart.reduce(
        (sum, item) => sum + item.harga * item.quantity,
        0
    );

    const totalItem = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <div className="min-h-screen p-4">

            <Link to="/Menu" className="text-blue-500">
                Kembali
            </Link>

            <h1 className="text-2xl font-bold mt-4 mb-6">
                Keranjang
            </h1>

            <div className="flex flex-col gap-4">
                {cart.map((item) => (
                    <div key={item.id_menu} className="bg-white rounded-2xl p-4 shadow-sm">
                        <div className="flex gap-4">

                            <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                {item.img ? (
                                    <img
                                        src={item.img}
                                        alt={item.nama_menu}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                ) : (
                                    <span className="text-xs text-gray-500">
                                        No Image
                                    </span>
                                )}
                            </div>

                            <div className="flex-1 flex flex-col justify-between">

                                <div>
                                    <span className="font-semibold text-lg text-black">
                                        {item.nama_menu}
                                    </span>

                                    <p className="text-sm text-gray-500 capitalize">
                                        {item.kategori}
                                    </p>

                                    <p className="font-bold mt-2">
                                        Rp {item.harga.toLocaleString("id-ID")}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-4">

                                    <div className="flex items-center gap-3">
                                        <button onClick={() => { decreaseQty(item.id_menu); setCart(getCart()); }} className="w-8 h-8 rounded-full bg-gray-200">
                                            -
                                        </button>

                                        <span className="font-semibold">
                                            {item.quantity}
                                        </span>

                                        <button onClick={() => { increaseQty(item.id_menu); setCart(getCart()); }} className="w-8 h-8 rounded-full bg-gray-200">
                                            +
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-4">

                                        <span className="font-bold">
                                            Rp {(item.harga * item.quantity).toLocaleString("id-ID")}
                                        </span>

                                        <button onClick={() => { deleteItemCart(item.id_menu); setCart(getCart()); }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm">

                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>
                        Rp {totalHarga.toLocaleString("id-ID")}
                    </span>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="w-full mt-4 bg-black text-white py-3 rounded-xl"
                >
                    Checkout
                </button>

            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

                    <div className="bg-white w-full max-w-sm rounded-2xl p-5">

                        <span className="text-xl font-bold mb-5 text-black">
                            Konfirmasi Pesanan
                        </span>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">
                                Nama Customer
                            </label>

                            <input
                                type="text"
                                placeholder="Masukkan nama"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-black"
                            />
                        </div>

                        <div className="bg-gray-100 rounded-xl p-4 mb-4">

                            <div className="flex justify-between mb-2">
                                <span>Total Item</span>
                                <span>{totalItem}</span>
                            </div>

                            <div className="flex justify-between font-bold">
                                <span>Total Harga</span>
                                <span>
                                    Rp {totalHarga.toLocaleString("id-ID")}
                                </span>
                            </div>

                        </div>

                        <div className="mb-5">
                            <h3 className="font-semibold mb-2">
                                Detail Pesanan
                            </h3>

                            <div className="max-h-40 overflow-y-auto space-y-2">
                                {cart.map((item) => (
                                    <div key={item.id_menu} className="flex justify-between text-sm">
                                        <span>
                                            {item.quantity}x {item.nama_menu}
                                        </span>

                                        <span>
                                            Rp {(item.harga * item.quantity).toLocaleString("id-ID")}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3">

                            <button onClick={() => setShowModal(false)} className="flex-1 border border-gray-300 py-3 rounded-xl">
                                Batal
                            </button>

                            <button onClick={handleCheckout} disabled={!customerName.trim()} className="flex-1 bg-black text-white py-3 rounded-xl disabled:bg-gray-400">
                                Pesan Sekarang
                            </button>

                        </div>

                    </div>

                </div>
            )}
        </div>
    );
}

export default Cart;