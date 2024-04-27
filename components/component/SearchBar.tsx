"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

import { Sparkles } from "lucide-react";
import { Layout } from "@/components/layout";
import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [searchFitlter, setSearchFitlter] = useState("");
  const [AI, setAI] = useState("");
  const [categoryFitlter, setCategoryFitlter] = useState("");
  const [originFitlter, setOriginFitlter] = useState("");
  const [priceFitlter, setPriceFitlter] = useState("");
  const generate = ()=>{
    
    alert("Vos tokens sont épuisés")
    
  }
  const handdleSearch = () => {
    onSearch({
      search: searchFitlter,
      category: categoryFitlter,
      origin: originFitlter,
      price: priceFitlter,
    });
  };

  return (
    <Layout key="1" className="">
      <div className="flex items-center w-full justify-center mb-2 gap-2">
        
        <Select
          onValueChange={async (v) => {
            setCategoryFitlter( v === "none" ? "" : v);
            setTimeout(()=>{
              handdleSearch()
            },100)
          }}
        >
          <SelectTrigger className="w-1/3">
            <SelectValue placeholder="Catégories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Tout</SelectItem>
            <SelectItem value="Tablettes de chocolat">
              Tablettes de chocolat
            </SelectItem>
            <SelectItem value="Pralinés">Pralinés</SelectItem>
            <SelectItem value="Truffes">Truffes</SelectItem>
            <SelectItem value="Chocolats chauds">Chocolats chauds</SelectItem>
            <SelectItem value="Dragées">Dragées</SelectItem>
            <SelectItem value="Barres de chocolat">
              Barres de chocolat
            </SelectItem>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(v) => {
            setOriginFitlter( v === "none" ? "" : v);
            handdleSearch()
          }}
        >
          <SelectTrigger className="w-1/3">
            <SelectValue placeholder="Origines" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Tout</SelectItem>
            <SelectItem value="Côte d'Ivoire">Côte d'Ivoire</SelectItem>
            <SelectItem value="Venezuela">Venezuela</SelectItem>
            <SelectItem value="Equateur">Equateur</SelectItem>
            <SelectItem value="Madagascar">Madagascar</SelectItem>
            <SelectItem value="Pérou">Pérou</SelectItem>
            <SelectItem value="Mexique">Mexique</SelectItem>
            <SelectItem value="Ghana">Ghana</SelectItem>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(v) => {
            setPriceFitlter( v === "none" ? "" : v);
            setTimeout(()=>{
              handdleSearch()
            },100)
          }}
        >
          <SelectTrigger className="w-1/3">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Tout</SelectItem>
            <SelectItem value="18000 - 20000">
              18.000 MGA - 20.000 MGA
            </SelectItem>
            <SelectItem value="20000 - 25000">
              20.000 MGA - 25.000 MGA
            </SelectItem>
            <SelectItem value="25000 - 30000">
              25.000 MGA - 30.000 MGA
            </SelectItem>
            <SelectItem value="30000 - 40000">
              30.000 MGA - 40.000 MGA
            </SelectItem>
            <SelectItem value="40000 - 47000">
              40.000 MGA - 47.000 MGA
            </SelectItem>
          </SelectContent>
        </Select>
        
      </div>
      <form className="relative w-full" onSubmit={(e) => {
          e.preventDefault()
            handdleSearch()
        }}>
          <Input
            className="pr-12"
            placeholder="Rechercher ici..."
            type="text"
            value={searchFitlter}
            onChange={(e) => setSearchFitlter(e.target.value)}
          />
          <Button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent"
            type="submit"
            variant={"link"}
          >
            Search
          </Button>
        </form>
      <div className="relative w-full mt-2">
        <Input
          className="pr-12"
          placeholder="Rechercher intelligente......"
          type="text"
          value={AI}
          onChange={(e)=> setAI(e.target.value)}
        />
        <Button
          className="absolute right-2 top-1/2 -translate-y-1/2"
          type="submit"
          variant={"link"}
          onClick={()=> generate()}
        >
          <Sparkles className="opacity-50" />
        </Button>
      </div>
    </Layout>
  );
}
