"use client"
import type { PageParams } from "@/types/next";
import { OneCommand } from "./OneCommand";

export default  function RoutePage(props: PageParams<{  }>) {
  if (typeof localStorage !== 'undefined') {
    // Safe to use localStorage here
    const commands = JSON.parse(localStorage.getItem("tableauCommandes") || "[]");
    const userId = localStorage.getItem("userId") || "";
    return (
      <>
      {commands.map((command)=>{
        return <OneCommand ids={command} userId={userId}/>
      })}
      </>
    )
} else {
    // Handle the case where localStorage is not available
    console.error("localStorage is not available.");
}

  
};
