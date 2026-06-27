

export function getCart(){
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : []


}

export function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart))
}

// localStorage.clear()


export function addToCart(menu){
    const cart = getCart()
    
    const existingItem = cart.find(item  => item.id_menu === menu.id_menu)

    if (existingItem) {
        existingItem.quantity += 1
    }else{
        cart.push({
            ...menu, quantity: 1
        });
    }

    saveCart(cart);
    console.log(cart);
}


export function decreaseQty(id_menu){
    const cart = getCart();
    const existingItem = cart.find(item => item.id_menu === id_menu);

    if (existingItem.quantity > 1 ) {
        existingItem.quantity -= 1
    }else{
        console.log("jika ingin menghapus item hapus menggunakan icon sampah di sebelah kiri")
    }

    saveCart(cart)

    console.log(cart)

}

export function increaseQty(id_menu){
    const cart = getCart();
    const existingItem = cart.find(item => item.id_menu === id_menu);

    if (existingItem) {
        existingItem.quantity += 1
    }

    saveCart(cart)

    console.log(cart)

}

export function deleteItemCart(id_menu){
    const cart = getCart()

    const updatedCart = cart.filter(item => item.id_menu !== id_menu);

    saveCart(updatedCart)
}

export function clearCart(){
    const cart = getCart()
    localStorage.clear(cart);

}