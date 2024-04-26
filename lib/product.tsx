import { Chocolate } from "../types/chocolate";
import { chocolates } from "./chocolates";

export function getOneproduct(id: string): Chocolate {
    const chocoId = parseInt(id);
    let chocolate: Chocolate | undefined; // Initialisation avec undefined

    chocolates.forEach((choco) => {
        if (choco.chocolat_id === chocoId) {
            chocolate = choco;
        }
    });

    if (!chocolate) {
        throw new Error(`Aucun chocolat trouvé avec l'identifiant ${id}`);
    }

    return chocolate;
}
