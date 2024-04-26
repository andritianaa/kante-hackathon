"use client";
import type { PageParams } from "@/types/next";
import { useEffect } from "react";

export default function RoutePage(props: PageParams<{ ids: string }>) {
  useEffect(()=>{
    console.log(props.params.ids)

  const array = props.params.ids.split("%2C").map(Number);
  console.log(array); // Output: [2, 9, 15]
  localStorage.setItem("cart", JSON.stringify(array));
  }) // Convertir en chaîne JSON
  window.location.href = "/r";

  return;
}
