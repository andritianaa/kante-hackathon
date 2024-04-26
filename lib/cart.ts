export const addToCard = (id: number) => {
    console.log("here");

    let cart: number[] = [];

    // Vérifier si le panier existe déjà dans le localStorage
    if (localStorage.getItem("cart")) {
        // Si oui, récupérer les données et les convertir en tableau
        cart = JSON.parse(localStorage.getItem("cart")!);
    }

    // Ajouter l'ID à la liste du panier
    cart.push(id);
    cart.sort((a, b) => a - b);

    // Enregistrer le panier mis à jour dans le localStorage en tant que chaîne JSON
    localStorage.setItem("cart", JSON.stringify(cart));
}
export const removeToCard = (id: number) => {
    let cart: number[] = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [];

    // Trouver l'index de l'ID dans le panier
    const index = cart.indexOf(id);

    // Si l'ID est trouvé dans le panier
    if (index !== -1) {
        // Retirer l'élément du tableau
        cart.splice(index, 1);

        // Enregistrer le panier mis à jour dans le localStorage en tant que chaîne JSON
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

export const removeAll = (id: number) => {
    let cart: number[] = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [];

    // Filtrer toutes les occurrences de l'ID dans le panier
    cart = cart.filter(itemId => itemId !== id);

    // Enregistrer le panier mis à jour dans le localStorage en tant que chaîne JSON
    localStorage.setItem("cart", JSON.stringify(cart));
}