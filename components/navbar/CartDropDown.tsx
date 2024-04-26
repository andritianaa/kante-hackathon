"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link as LinkIcon, ShoppingCart } from "lucide-react";
import { CartItem } from "../offer/CartItem";
import { chocolates } from "../../lib/chocolates";
import { useEffect, useState } from "react";
import { Chocolate } from "../../types/chocolate";
import { Button } from "../ui/button";
import Link from "next/link";
import { validerCommande } from "../../lib/cart";

export const CartDropDown = () => {
  const [forceRender, setForceRender] = useState(false);

  function calculRemise(): number {
    const dateAnniversaire = localStorage.getItem("birth") || "2001-01-01";
    // Conversion de la date d'anniversaire en objet Date
    const anniversaire: Date = new Date(dateAnniversaire);

    // Obtention de la date actuelle
    const dateActuelle: Date = new Date();

    // Calcul de l'année actuelle
    const anneeActuelle: number = dateActuelle.getFullYear();

    // Calcul de l'année de l'anniversaire
    const anneeAnniversaire: number = anniversaire.getFullYear();

    // Calcul de la différence en millisecondes entre la date actuelle et l'anniversaire
    const difference: number = anniversaire.getTime() - dateActuelle.getTime();

    // Conversion de la différence en jours
    const differenceEnJours: number = difference / (1000 * 3600 * 24);

    // Conversion de la différence en semaines
    const differenceEnSemaines: number = differenceEnJours / 7;

    // Conversion de la différence en mois
    const differenceEnMois: number = differenceEnJours / 30;

    // Retirer 365 jours si l'année n'est pas bissextile
    const nombreDeJoursDansAnnee: number = ((anneeActuelle % 4 === 0 && anneeActuelle % 100 !== 0) || (anneeActuelle % 400 === 0)) ? 366 : 365;
    const joursRetires: number = (anneeAnniversaire === anneeActuelle) ? 0 : nombreDeJoursDansAnnee;

    // Si l'anniversaire est passé il y a moins de 2 semaines
    if (differenceEnSemaines < 2) {
        return 15; // 15% de remise
    }
    // Si l'anniversaire est passé il y a maximum 1 mois
    else if (differenceEnMois <= 1) {
        return 5; // 5% de remise
    }
    // Si l'anniversaire arrive dans maximum 1 mois
    else if (differenceEnMois <= 1) {
        return 7; // 7% de remise
    }
    // Si l'anniversaire arrive dans maximum 2 mois
    else if (differenceEnMois <= 2) {
        return 3; // 3% de remise
    }
    // Si aucune condition n'est remplie
    else {
        return 0; // Pas de remise
    }
}





  const [ids, setIds] = useState<number[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  setInterval(() => {
    setIds(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, 200);

  useEffect(() => {
    window.addEventListener("storage", () => {
      console.log("reload");
    });
    const handleStorageChange = () => {
      const newIds = JSON.parse(localStorage.getItem("cart") || "[]");
      setIds(newIds);
      setForceRender((prev) => !prev);
    };
  }, []);

  const idCounts = ids.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  let chocolatesWithOccurences = chocolates.map((chocolate) => {
    const occurences = idCounts[chocolate.chocolat_id] || 0;
    return { ...chocolate, occurences };
  });

  const [remise, setRemise] = useState(0);
  const [somme, setSomme] = useState(0);
  const [sommeTTC, setSommeTTC] = useState(0);

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

    nouvelleRemise += calculRemise()

    setRemise(nouvelleRemise);

    const nouvelleSomme = chocolatesWithOccurences.reduce(
      (somme, chocolate) =>
        somme + parseFloat(chocolate.prix) * chocolate.occurences,
      0
    );
    setSomme(nouvelleSomme);

    const nouvelleSommeTTC =
      nouvelleSomme - nouvelleSomme * (nouvelleRemise / 100);
    setSommeTTC(nouvelleSommeTTC);
  }, [chocolatesWithOccurences]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `http://localhost:3000/c/${ids.toString()}`
      );
    } catch (error) {
      console.error("Erreur lors de la copie dans le presse-papiers :", error);
      alert("Erreur lors de la copie dans le presse-papiers");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative">
          <ShoppingCart />
          {ids.length > 0 && (
            <div className="absolute w-4 h-4 text-center -top-1.5 -right-1.5 bg-red-500 text-white rounded-full text-xs font-semibold">
              {ids.length}
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="p-3 h-full max-h-[500px] overflow-scroll">
          <div className="flex justify-between">
            <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
              Mon panier
            </h5>
            <LinkIcon className="cursor-pointer" onClick={copyToClipboard} />
          </div>
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
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex w-full justify-between">
              <p className="">
                Total remise : <span className="text-green-500">{remise}%</span>
              </p>
              <p className="">
                Somme : <span className="font-semibold">{somme} MGA</span>
              </p>
            </div>
            <p className="">
              Somme TTC : <span className="font-semibold">{sommeTTC} MGA</span>
            </p>
            <Link href="/offer/commande">
              <Button onClick={()=> validerCommande(ids)}>Valider commande</Button>
            </Link>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
