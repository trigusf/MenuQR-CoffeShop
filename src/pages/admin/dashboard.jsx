import { useEffect, useState } from "react";
import { getDetailOrder, getOrder, updateStatus } from "../../services/orderServices";
import { Link } from "react-router-dom";



function AdminDashboard() {
    const [order, setOrder] = useState([]);

    const [detailOrder, setDetailOrder] = useState([]);

    useEffect(() => {
        async function fetchDetailOrder() {
            const data = await getDetailOrder();
            setDetailOrder(data)
        }
        fetchDetailOrder()
    })

    useEffect(() => {
        async function fetchOrder() {
            const data = await getOrder();
            setOrder(data);
        }
        fetchOrder()
    }, [])

    async function handleStatus(id_order) {
        try{
            await updateStatus(id_order);

            const newData = await getOrder();

            if(Array.isArray(newData)){
                setOrder(newData);
            }else{
                setOrder(newData)
            }

        }catch (error){
            console.error("gagal update status", error)
        }
    }
    
    return (
        <div className="min-h-screen p-4">

            <div className="mb-6">
                <h1 className="text-3xl font-bold">
                    Dashboard kasir
                </h1>

                <Link to="/" className="text-blue-500 underline">Kelola pesanan pelanggan</Link> 
                <span> | </span> 
                <Link to="/adminMenu">Menu</Link>
                <span> | </span> 
                <Link to="">Info Pendapatan</Link>
            </div>

            <div className="grid grid-cols-4 gap-4">
            {order.map((order) => (
                <div className="bg-white rounded-2xl p-5 shadow-sm h-full flex flex-col">
                    <div className="flex flex-col justify-between items-start mb-4">
                        <div className="flex justify-between w-full">
                            <span className="font-bold text-lg text-black">
                               Order #{order.id_order}
                            </span>

                            <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                                {order.status}
                            </span>

                        </div>
                            <p className="w-full text-left">
                                Customer: {order.nama_customer}
                            </p>

                    </div>

                    <div className="text-black flex-1">
                        <div className="flex flex-col justify-between">
                            {detailOrder.filter(detail => detail.id_order === order.id_order).map((detail) => (
                                <div className="">
                                    <div className="flex justify-between">
                                        <span>{detail.menu.nama_menu}</span>
                                        <span>{detail.qty}x</span>  
                                    </div>
                                    
                                </div>
                            ))}
                        </div>

                    </div>

                        <div className="w-full flex justify-end font-bold text-black">
                            <span>Rp. {order.total.toLocaleString("ID-id")}</span>
                        </div>

                        <button onClick={() => handleStatus(order.id_order)} className="bg-black text-white px-4 py-2 mt-2 rounded-xl w-full items-end">
                            {order.status === "done" ? "Selesai" : order.status === "pending" ? "Proses" : "Selesaikan"}
                        </button>

                </div>
            ))}

            </div>
        </div>
    );
}

export default AdminDashboard;

