"use client";

import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Chocolate } from "../../types/chocolate";
import { Input } from "../ui/input";
import { addToCard, removeAll, removeToCard } from "../../lib/cart";

export const RecipeItem = (chocolate: Chocolate) => {
  const [quantity, setQuantity] = useState<number>(chocolate.occurences || 0);

  if (chocolate.occurences)
    return (
      <div className="flex items-center justify-between w-full max-w-xl py-4 gap-14">
        <div className="flex items-center gap-6">
          <img
            className="w-20 h-20 object-cover rounded-lg"
            src={
              "https://thumbs.dreamstime.com/b/chocolat-avec-la-poudre-de-cacao-125953683.jpg"
            }
            alt="Neil image"
          />
          <div className="flex flex-col gap-1 items-start">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {chocolate.nom}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {chocolate.categorie}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {chocolate.prix} MGA
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
           Quantité : {chocolate.occurences}
            </p>
          </div>
        </div>
      </div>
    );
};
