import { PageParams } from "@/types/next";
import { Layout } from "@/components/layout";
import { HandCoins, Info, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { ChocolateCard } from "@/components/offer/ChocolateCard";
import { chocolates } from "@/lib/chocolates";

export default async function RoutePage(props: PageParams<{}>) {
  const chocolate = {
    chocolat_id: 1,
    nom: "Tablette Lait Caramel Beurre Sale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsam exercitationem. Sunt voluptatibus amet, necessitatibus veritatis harum mollitia obcaecati ipsa aliquam repudiandae iste quisquam. Similique nobis quas culpa adipisci asperiores accusantium praesentium, officia fugit labore ad illo laboriosam molestias ea, tempore blanditiis! Modi debitis deleniti id, explicabo commodi velit repudiandae.",
    categorie: "Tablettes de chocolat",
    origine: "Madagascar",
    prix: "38400.00",
    image: "tablette_noir_70.png",
    categorie_id: 1,
    origine_id: 1,
  };
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
          <p className="text-3xl py-3">{chocolate.nom}</p>
          <div className="flex flex-wrap items-center gap-4 pb-3">
            <div className="flex items-center gap-3">
              <HandCoins size={28} opacity={0.8} />
              <div className="text-lg font-normal text-muted-foreground">
                {chocolate.prix} MGA
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Info size={28} opacity={0.8} />
              <div className="text-lg font-normal text-muted-foreground">
                {chocolate.categorie}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPinned size={28} opacity={0.8} />
              <div className="text-lg font-normal text-muted-foreground">
                {chocolate.origine}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-4">
            <div className="grid gap-2">
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">Add to Cart</Button>
          </div>
          <div className="flex flex-col mt-4">
            <p className="">{chocolate.description}</p>
          </div>
        </div>
        <div className="py-3 flex flex-col justify-center items-center font-semibold">
          Plus de {chocolate.categorie}
          <div className="w-[40%] h-[2px] bg-black rounded-md dark:bg-white"></div>
        </div>
        <div className="flex flex-wrap w-full items-center justify-center gap-3 pb-8">
          {chocolates
            .filter(
              (chocolateMap) => chocolateMap.categorie === chocolate.categorie
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
