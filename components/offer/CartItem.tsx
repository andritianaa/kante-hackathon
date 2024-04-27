import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Chocolate } from "@/types/chocolate";
import { addToCard, removeAll, removeToCard } from "@/actions/cart.action";

export const CartItem = (chocolate: Chocolate) => {

  if (chocolate.occurences)
    return (
      <div className="flex items-center justify-between w-full max-w-xl py-4 gap-14">
        <div className="flex items-center gap-6">
          <img
            className="w-20 h-20 object-cover rounded-lg"
            src={
              chocolate.image
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
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="rounded-l-md"
            variant="outline"
            onClick={() => removeToCard(chocolate.chocolat_id)}
          >
            <MinusIcon className="w-4 h-4" />
          </Button>
          <Button
            className="rounded-l-md"
            variant="outline"
          >{chocolate.occurences}
          </Button>

          <Button
            className="rounded-r-md"
            variant="outline"
            onClick={() => addToCard(chocolate.chocolat_id)}
          >
            <PlusIcon className="w-4 h-4" />
          </Button>
          <Trash2
            color="red"
            onClick={() => removeAll(chocolate.chocolat_id)}
          />
        </div>
      </div>
    );
};
