import { HandCoins, Info } from "lucide-react";
import { Button } from "../ui/button";
import { StarFavoris } from "./StarFavoris";
import { Card } from "../ui/card";

export const JobCard = () => {
  return (
    <Card className="flex flex-col gap-4 w-full sm:max-w-full md:max-w-md lg:max-w-xs p-4 text-center sm:p-4 ">
      <div className="flex items-start justify-between w-full">
        <div className="flex gap-3 items-center">
          <img
            src="https://api.dicebear.com/8.x/initials/svg?seed=miandryrakotovelo@gmail.com"
            className="w-8 h-8 rounded-full"
            alt=""
          />
          <div className="flex flex-col items-start">
            <p className="font-semibold">Shop U Madagascar</p>
            <p className="text-xs text-muted-foreground">2024-05-25</p>
          </div>
        </div>
        <StarFavoris />
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <Info />
          <p className="text-muted-foreground text-lg font-medium pr-4">Caissière</p>
          <HandCoins />
          <p className="text-muted-foreground text-lg font-medium">$1400</p>
        </div>
        <p className="text-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo magnam
          cum rem perferendis qui facilis similique quisquam, iste laudantium
        </p>
      </div>
      <Button className="w-[90px]">Contacter</Button>
    </Card>
  );
};
