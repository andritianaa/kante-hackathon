"use client";
import { PageParams } from "@/types/next";
import { Layout } from "@/components/layout";
import { HandCoins, Info, MapPinned, MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChocolateCard } from "@/components/offer/ChocolateCard";
import { chocolates } from "@/lib/chocolates";
import { getOneproduct } from "../../../../../lib/product";
import { Chocolate } from "../../../../../types/chocolate";
import { addToCard, removeToCard } from "../../../../../actions/cart.action";

export default function RoutePage(props: PageParams<{ id: string }>) {
  const chocolat: Chocolate = getOneproduct(props.params.id);

  return (
    <Layout className="mt-20 max-w-3xl">
      <div className="flex pb-4 gap-4 flex-col w-full justify-center items-center">
        <div className="w-full md:w-[90%] gap-3">
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
          <p className="text-3xl py-3">{chocolat.nom}</p>
          <div className="flex flex-wrap items-center gap-4 pb-3">
            <div className="flex items-center gap-3">
              <HandCoins size={28} opacity={0.8} />
              <div className="text-lg font-normal text-muted-foreground">
                {chocolat.prix} MGA
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Info size={28} opacity={0.8} />
              <div className="text-lg font-normal text-muted-foreground">
                {chocolat.categorie}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPinned size={28} opacity={0.8} />
              <div className="text-lg font-normal text-muted-foreground">
                {chocolat.origine}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Button
                className="rounded-l-md"
                variant="outline"
                onClick={() => removeToCard(chocolat.chocolat_id)}
              >
                <MinusIcon className="w-4 h-4" />
              </Button>
              <Button className="rounded-l-md" variant="outline">
                {chocolat.occurences}
              </Button>

              <Button
                className="rounded-r-md"
                variant="outline"
                onClick={() => addToCard(chocolat.chocolat_id)}
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
            <Button
              className="w-full"
              onClick={() => addToCard(chocolat.chocolat_id)}
            >
              Add to Cart
            </Button>
          </div>
          <div className="flex flex-col mt-4">
            <p className="">{chocolat.description}</p>
          </div>
        </div>
        <div className="py-3 flex flex-col justify-center items-center font-semibold">
          Plus de {chocolat.categorie}
          <div className="w-[40%] h-[2px] bg-black rounded-md dark:bg-white"></div>
        </div>
        <div className="flex flex-wrap w-full items-center justify-center gap-3 pb-8">
          {chocolates
            .filter(
              (chocolateMap) => chocolateMap.categorie === chocolat.categorie
            )
            .map((chocolate) => (
              <ChocolateCard
                key={chocolate.chocolat_id}
                chocolat_id={chocolate.chocolat_id}
                nom={chocolate.nom}
                description={chocolate.description}
                categorie={chocolate.categorie}
                origine={chocolate.origine}
                prix={chocolate.prix}
                image={chocolate.image}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
}
