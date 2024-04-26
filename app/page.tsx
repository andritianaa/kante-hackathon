import { Hero } from "@/components/home/hero";
import { NavBar } from "@/components/home/navbar";
import { Feature } from "@/components/home/feature";
import { Footer } from "../components/home/Footer";
import { ChocolateCard } from "../components/offer/ChocolateCard";
import { Chocolate } from "../types/chocolate";

export default function Home() {
  const chocolate = {
    chocolat_id: 1,
    nom: "Tablette Noir 70%",
    description: "Delicieuse tablette de chocolat noir avec 70% de cacao.",
    categorie: "Tablettes de chocolat",
    origine: "C“te Ivoire",
    prix: "38400.00",
    image: "tablette_noir_70.png",
  };
  return (
    <>

      <NavBar />
      <Hero />
      <Feature />
      <Footer />
    </>
  );
}
