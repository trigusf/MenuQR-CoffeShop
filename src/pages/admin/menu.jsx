import { useEffect, useState } from "react";
import { getMenu } from "../../services/menuServices";
import { Link } from "react-router-dom";



function AdminMenu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        async function fetchMenu() {
            const data = await getMenu()
            setMenu(data)
        }
        fetchMenu()
    }, [])


    const [showModal, setShowModal] = useState(false);

    const [namaMenu, setNamaMenu] = useState([]);
    const [harga, setHarga] = useState([]);
    const [kategori, setKategori] = useState([]);


    
    return (
        <div className="min-h-screen p-4">

            <div className="mb-6">
                <h1 className="text-3xl font-bold">
                    Dashboard Kasir
                </h1>

                <Link to="/">Kelola pesanan pelanggan</Link> 
                <span> | </span> 
                <Link to="/AdminMenu" className="text-blue-500 underline">Menu</Link>
            </div>

            <div className="w-full flex justify-end">
                <button onClick={() => setShowModal(true)} className="p-2 bg-blue-400 text-white py-2 rounded-xl my-2">
                    Tambah Menu +   
                </button>
            </div>

            <div className="grid grid-cols-4 gap-4">

            {menu.map((menu) => (
                <div key={menu.id_menu} className="bg-white rounded-2xl overflow-hidden shadow-md">
                    <div className="h-32 bg-gray-200 flex items-center justify-center">
                      {menu.img ? ( <img src={menu.img} alt={menu.nama_menu} className="w-full h-full object-cover"/>) : ( <span className="text-gray-500 text-sm">No Image</span>)}
                    </div>
    
                    <div className="p-3">
                      <div className="font-semibold text-sm line-clamp-1">
                        {menu.nama_menu}
                      </div>
    
                      <div className="text-xs text-gray-500 capitalize mb-2">
                        {menu.kategori}
                      </div>
                    
                      <div className="font-bold text-lg">
                        Rp {menu.harga.toLocaleString("id-ID")}
                      </div>
                    
                      <button onClick={() => addToCart(menu)} className="w-full mt-3 bg-black text-white py-2 rounded-xl">
                        Add to Cart
                      </button>
                    </div>
                </div>
            ))}

            </div>




        {showModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl w-full max-w-md p-6">
        
                    <span className="text-2xl font-bold text-black mb-6">Tambah Menu</span>
        
                    <div className="flex flex-col gap-4 text-start text-black">
        
                        <div className="flex flex-col">
                            <label className="block mb-2 text-sm font-medium">Nama Menu</label>
                            <input type="text" placeholder="Americano" className="w-full border rounded-xl p-3"/>
                        </div>
        
                        <div>
                            <label className="block mb-2 text-sm font-medium">Harga</label>
                            <input type="number" placeholder="25000" className="w-full border rounded-xl p-3"/>
                        </div>
        
                        <div>
                            <label className="block mb-2 text-sm font-medium">Kategori</label>
                            <select className="w-full border rounded-xl p-3">
                                <option value="">Pilih kategori</option>
                                <option value="coffee">Coffee</option>
                                <option value="non-coffee">Non Coffee</option>
                                <option value="food">Food</option>
                            </select>
                        </div>
        
                        <div>
                            <label className="block mb-2 text-sm font-medium">URL Gambar</label>
                            <input type="text" placeholder="https://..." className="w-full border rounded-xl p-3"/>
                        </div>
        
                    </div>
        
                    <div className="flex gap-3 mt-6">
                        <button onClick={() => setShowModal(false)} className="flex-1 border py-3 rounded-xl">
                            Batal
                        </button>
        
                        <button className="flex-1 bg-black text-white py-3 rounded-xl">
                            Simpan Menu
                        </button>
                    </div>
        
                </div>
            </div>
        )}

        </div>
    );
}

export default AdminMenu;

