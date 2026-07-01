import { useEffect, useState } from "react";
import { getDetailOrder, getOrder, updateStatus } from "../../services/orderServices";
import { Link } from "react-router-dom";

function AdminDashboard() {
    const [order, setOrder] = useState([]);
    const [detailOrder, setDetailOrder] = useState([]);

    useEffect(() => {
        async function fetchDetailOrder() {
            const data = await getDetailOrder();
            setDetailOrder(data);
        }
        fetchDetailOrder();
    }, []);

    useEffect(() => {
        async function fetchOrder() {
            const data = await getOrder();
            setOrder(data);
        }
        fetchOrder();
    }, []);

    async function handleStatus(id_order) {
        try {
            await updateStatus(id_order);
            const newData = await getOrder();
            setOrder(Array.isArray(newData) ? newData : []);
        } catch (error) {
            console.error("gagal update status", error);
        }
    }

    return (
        <div className="min-h-screen p-4">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Dashboard kasir</h1>
                <Link to="/" className="text-blue-500 underline">Kelola pesanan pelanggan</Link>
                <span> | </span>
                <Link to="/admin-menu" className="text-blue-500 underline">Menu</Link>
                <span> | </span>
                <Link to="" className="text-blue-500 underline">Info Pendapatan</Link>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {order.map((orderItem) => (
                    <div key={orderItem.id_order} className="bg-white rounded-2xl p-5 shadow-sm h-full flex flex-col">
                        <div className="flex flex-col justify-between items-start mb-4">
                            <div className="flex justify-between w-full">
                                <span className="font-bold text-lg text-black">Order #{orderItem.id_order}</span>
                                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">{orderItem.status}</span>
                            </div>
                            <p className="w-full text-left">Customer: {orderItem.nama_customer}</p>
                        </div>

                        <div className="text-black flex-1">
                            <div className="flex flex-col justify-between gap-2">
                                {detailOrder
                                    .filter((detail) => detail.id_order === orderItem.id_order)
                                    .map((detail) => (
                                        <div key={detail.id_detail_order} className="flex justify-between">
                                            <span>{detail.menu.nama_menu}</span>
                                            <span>{detail.qty}x</span>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="w-full flex justify-end font-bold text-black mt-4">
                            <span>Rp. {orderItem.total.toLocaleString("id-ID")}</span>
                        </div>

                        <button
                            onClick={() => handleStatus(orderItem.id_order)}
                            className="bg-black text-white px-4 py-2 mt-4 rounded-xl w-full"
                        >
                            {orderItem.status === "done" ? "Selesai" : orderItem.status === "pending" ? "Proses" : "Selesaikan"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminDashboard;
