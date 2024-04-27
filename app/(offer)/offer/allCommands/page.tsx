"use client"
import type { PageParams } from "@/types/next";
import { OneCommand } from "./OneCommand";

export default  function RoutePage(props: PageParams<{  }>) {
      const commands = JSON.parse(localStorage.getItem("tableauCommandes") || "[]")
      const userId = localStorage.getItem("userId") || ""

      
  return (
    <>
    {commands.map((command)=>{
      return <OneCommand ids={command} userId={userId}/>
    })}
    </>
  )
};
