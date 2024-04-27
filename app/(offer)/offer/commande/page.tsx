"use client";
import { Link } from "lucide-react";
import type { PageParams } from "@/types/next";
import { chocolates } from "@/lib/chocolates";
import { useEffect, useState } from "react";
import { Chocolate } from "@/types/chocolate";
import { Layout } from "@/components/layout";
import { RecipeItem } from "@/components/offer/RecipeItem";

export default function RoutePage(props: PageParams<{  }>) {
  if (typeof localStorage !== 'undefined') {

  const [ids, setIds] = useState<number[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  setInterval(() => {
    setIds(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, 200);

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

      await navigator.clipboard.writeText(`http://localhost:3000/c/${ids.toString()}/${localStorage.getItem("userId")}`);
    } catch (error) {
      console.error("Erreur lors de la copie dans le presse-papiers :", error);
      alert("Erreur lors de la copie dans le presse-papiers");
    }
  };

  return (
    <Layout>
      <div className="mt-20">
        <div className="p-3 h-full max-h-[500px] overflow-scroll">
        <div className="flex justify-between">
            <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
              Mon dernier panier
            </h5>
            <Link className="cursor-pointer" onClick={copyToClipboard}/>
          </div>
          {chocolatesWithOccurences.map((chocolate) => (
            <RecipeItem
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
};
