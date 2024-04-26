import { Hero } from "@/components/home/hero";
import { NavBar } from "@/components/home/navbar";
import { Feature } from "@/components/home/feature";
import { Footer } from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Feature />
      <Footer />

    </>
  );
}
