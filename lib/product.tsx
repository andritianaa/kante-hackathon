import { chocolates } from "./chocolates";

export function getOneproduct(id: string) {
    const chocoId = parseInt(id);
    const chocolate = chocolates.find((chocolate) => chocolate.categorie_id === chocoId);
    return chocolate || null; // Si aucun chocolat n'est trouvé, retourner null
}
