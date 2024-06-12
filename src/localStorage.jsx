// Store in local storage
const storeCart = cart => {
    const stringifyCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifyCart); 
}

const addToStorage = id =>{
    const cartItem = getCart();
    cartItem.push(id);
    storeCart(cartItem);
}

const removeFromStorage = id => {
    const cartItem = getCart();
    const remainItem = cartItem.filter( ids => ids !== id);
    storeCart(remainItem);
}

const getCart = () => {
    const getCartItems = localStorage.getItem('cart');
    if (getCartItems) {
        return  JSON.parse(getCartItems); 
    } 
    return [];
}

export {addToStorage, removeFromStorage,getCart}