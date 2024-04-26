"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart } from "lucide-react";
import { CartItem } from "../offer/CartItem";
import { chocolates } from "../../lib/chocolates";
import { useEffect, useState } from "react";
import { Chocolate } from "../../types/chocolate";

export const CartDropDown = () => {
  const ids = [1, 16, 16, 1, 1];

  const [remise, setRemise] = useState(0);
  const [somme, setSomme] = useState(0);
  const [sommeTTC, setSommeTTC] = useState(0);

    // Compter le nombre d'occurrences de chaque ID
    const idCounts = ids.reduce((acc, id) => {
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    }, {});

    // Ajouter le nombre d'occurrences à chaque objet dans chocolates
    let chocolatesWithOccurences = chocolates.map((chocolate) => {
      const occurences = idCounts[chocolate.chocolat_id] || 0;
      return { ...chocolate, occurences };
    });

    useEffect(() => {
      const groupes = {
        g5: 0,
        g10: 0,
        g15: 0,
      };

      chocolatesWithOccurences = chocolatesWithOccurences.filter(
        (choco) => choco.occurences > 0
      );
      chocolatesWithOccurences.forEach((chocolat: Chocolate) => {
        const prix = parseFloat(chocolat.prix);
        if (prix >= 20000 && prix <= 30000) {
          groupes["g5"] =
            groupes["g5"] + (chocolat.occurences ? chocolat.occurences : 0);
        } else if (prix > 30000 && prix <= 38000) {
          groupes["g10"] =
            groupes["g10"] + (chocolat.occurences ? chocolat.occurences : 0);
        } else if (prix > 38000) {
          groupes["g15"] =
            groupes["g15"] + (chocolat.occurences ? chocolat.occurences : 0);
        }
      });

      // Calcul de la remise
      let nouvelleRemise = 0;
      if (groupes.g5 >= 2) {
        nouvelleRemise += 5;
      }
      if (groupes.g10 >= 3) {
        nouvelleRemise += 10;
      }
      if (groupes.g15 >= 3) {
        nouvelleRemise += 15;
      }

      setRemise(nouvelleRemise);

      // Calcul de la somme
      const nouvelleSomme = chocolatesWithOccurences.reduce(
        (somme, chocolate) =>
          somme + parseFloat(chocolate.prix) * chocolate.occurences,
        0
      );
      setSomme(nouvelleSomme);

      // Calcul de la somme TTC
      const nouvelleSommeTTC =
        nouvelleSomme - nouvelleSomme * (nouvelleRemise / 100);
      setSommeTTC(nouvelleSommeTTC);
    }, [chocolatesWithOccurences]); // Effectue le calcul lorsque chocolatesWithOccurences change
  // Votre logique de groupe ici...

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ShoppingCart />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="p-3 h-full max-h-[500px] overflow-scroll">
          <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
            Mon panier
          </h5>
          {chocolatesWithOccurences.map((chocolate) => (
            <CartItem
              chocolat_id={chocolate.chocolat_id}
              nom={chocolate.nom}
              description={chocolate.description}
              categorie={chocolate.categorie}
              origine={chocolate.origine}
              prix={chocolate.prix}
              image={chocolate.image}
              occurences={chocolate.occurences}
            />
          ))}
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex justify-between items-center">
              <p className="flex gap-4 text-md">
                Total remise :{" "}
                <span className="text-green-500">{remise} %</span>{" "}
              </p>
              <p className="flex gap-4 text-md">
                {" "}
                Somme : <span className="font-semibold">{somme} MGA</span>{" "}
              </p>
            </div>
            <p className="flex gap-4 text-md">
              {" "}
              Somme TTC : <span className="font-semibold">
                {sommeTTC} MGA
              </span>{" "}
            </p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
