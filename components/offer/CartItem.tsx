"use client";

import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useState } from "react";
import { Chocolate } from "../../types/chocolate";
import { Input } from "../ui/input";

export const CartItem = (chocolate: Chocolate) => {
  const [quantity, setQuantity] = useState<number>(chocolate.occurences || 0);
  const handleInc = () => {
    setQuantity(quantity + 1);
  };
  const handleDec = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if(chocolate.occurences) 
    return (
      <div className="flex items-center w-full max-w-xl py-4 gap-4">
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
        </div>
        <div className="flex items-center">
          <Button className="rounded-l-md" variant="outline" onClick={handleDec}>
            <MinusIcon className="w-4 h-4" />
          </Button>
  
          <Input type="number" value={chocolate.occurences} className="w-12" />
          <Button className="rounded-r-md" variant="outline" onClick={handleInc}>
            <PlusIcon className="w-4 h-4" />
          </Button>
        </div>
        <Trash2 color="red" />
      </div>
    );
};
