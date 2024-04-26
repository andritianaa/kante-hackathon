"use client";
import { Link } from "lucide-react";
import type { PageParams } from "@/types/next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart } from "lucide-react";
import { chocolates } from "@/lib/chocolates";
import { useEffect, useState } from "react";
import { Chocolate } from "@/types/chocolate";
import { CartItem } from "@/components/offer/CartItem";
import { Layout } from "@/components/layout";
import { RecipeItem } from "../../../../components/offer/RecipeItem";
import { map } from "zod";
import { OneCommand } from "./OneCommand";

export default function RoutePage(props: PageParams<{  }>) {
  const [commands, setCommands] = useState<number[][]>(
    JSON.parse(localStorage.getItem("tableauCommandes") || "[]")
  );
  return (
    <>
    {commands.map((command)=>{
      return <OneCommand ids={command}/>
    })}
    </>
  )
};
