import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMenu } from "../../services/menuServices";
import { addToCart } from "../../utils/cart";
import { getCart } from "../../utils/cart";

function Menu() {
    const [menu, setMenu] = useState([]);

    
    useEffect(() => {
        async function fetchMenu() {
            const data = await getMenu();
            setMenu(data)
        }
        fetchMenu();
    }, [])
    
    const [cart, setCart] = useState(getCart())
    const [cartQty, setCartQty] = useState(0)
    // const cart = getCart()

    useEffect(() => {
        const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0)

        setCartQty(totalQty)
    }, [cart])


    return (
        <div>
            <div className="flex items-center justify-between mx-4">
            <h1>Daftar Menu</h1>
            <Link to="/cart" className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {cartQty}
                    </span>
                )}
            </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4">
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
        </div>
    )
}

export default Menu;