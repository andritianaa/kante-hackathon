export const addToCard = (id: number) => {

    let cart: number[] = [];
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart")!);
    }
    cart.unshift(id);
    cart.sort((a, b) => a - b);
    localStorage.setItem("cart", JSON.stringify(cart));
}
export const removeToCard = (id: number) => {
    let cart: number[] = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [];
    const index = cart.indexOf(id);
    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

export const removeAll = (id: number) => {
    let cart: number[] = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [];
    cart = cart.filter(itemId => itemId !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
}

export const validerCommande = (commande: number[]) => {
    let tableauLocalStorage: number[][] = JSON.parse(localStorage.getItem('tableauCommandes') || '[]');
    tableauLocalStorage.unshift(commande);
    localStorage.setItem('tableauCommandes', JSON.stringify(tableauLocalStorage));
}


export const recommand = (commande: number[]) => {
    let tableauLocalStorage: number[][] = JSON.parse(localStorage.getItem('tableauCommandes') || '[]');
    tableauLocalStorage.unshift(commande);
    localStorage.setItem("cart", JSON.stringify(commande));
    localStorage.setItem('tableauCommandes', JSON.stringify(tableauLocalStorage));

}