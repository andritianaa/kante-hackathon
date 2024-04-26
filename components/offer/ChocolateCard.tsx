import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chocolate } from "../../types/chocolate";

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
          <h2 className="text-2xl font-bold">{chocolate.nom}</h2>
          <p className="text-lg">{chocolate.description}</p>
        </div>
      </div>
      <div className="p-6 grid gap-4">
        <div className="flex justify-between items-baseline">
          <div className="font-bold text-lg">Price</div>
          <div className="text-2xl font-bold">{chocolate.prix} MGA</div>
        </div>
        <div className="flex justify-between items-baseline">
          <div className="font-bold text-lg">Origin</div>
          <div className="text-lg">{chocolate.origine}</div>
        </div>
        <div className="flex justify-between items-baseline">
          <div className="font-bold text-lg">Category</div>
          <div className="text-lg">{chocolate.categorie}</div>
        </div>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </Card>
  );
}
