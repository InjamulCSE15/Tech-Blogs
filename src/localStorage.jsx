// Store in local storage
const storeMarkedBooked = markedBooked => {
    const stringifyMarkedBooked = JSON.stringify(markedBooked);
    localStorage.setItem('markedBooked', stringifyMarkedBooked); 
}

const addToStorage = id =>{
    const markedBookedItem = getMarkedBooked();
    markedBookedItem.push(id);
    storeMarkedBooked(markedBookedItem);
}

const removeFromStorage = id => {
    const markedBookedItem = getMarkedBooked();
    const remainItem = markedBookedItem.filter( ids => ids !== id);
    storeMarkedBooked(remainItem);
}

const getMarkedBooked = () => {
    const getMarkedBookedItems = localStorage.getItem('markedBooked');
    if (getMarkedBookedItems) {
        return  JSON.parse(getMarkedBookedItems); 
    } 
    return [];
}

export {addToStorage, removeFromStorage,getMarkedBooked}