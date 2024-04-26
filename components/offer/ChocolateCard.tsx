import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chocolate } from "../../types/chocolate";
import { HandCoins, Info } from "lucide-react";

export function ChocolateCard(chocolate: Chocolate) {
  return (
    <Card className="flex flex-col gap-4 w-full sm:max-w-full md:max-w-md lg:max-w-xs shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          alt="Chocolate Card"
          className="w-full h-[300px] object-cover"
          height="300"
          src={
            "https://thumbs.dreamstime.com/b/chocolat-avec-la-poudre-de-cacao-125953683.jpg"
          }
          style={{
            // aspectRatio: "500/300",
            objectFit: "cover",
          }}
          width="500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold truncate">{chocolate.nom}</h2>
          <p className="text-lg truncate w-full line-clamp-2 whitespace-normal">{chocolate.description}</p>
        </div>
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-black text-xs font-semibold">{chocolate.origine}</div>
      </div>
      <div className="p-4 grid gap-4">
        <div className="flex items-center justify-between">
          <HandCoins size={28}/>
          <div className="text-lg font-bold">{chocolate.prix} MGA</div>
        </div>
        <div className="flex justify-between items-center">
          <Info size={28}/>
          <div className="text-lg">{chocolate.categorie}</div>
        </div>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </Card>
  );
}
