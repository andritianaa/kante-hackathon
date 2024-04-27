"use client"
import type { PageParams } from "@/types/next";
import { OneCommand } from "./OneCommand";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

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
      {commands.length > 0 &&
      <div className="w-screen h-screen flex items-center justify-center flex-col">
      <Player
        autoplay
        loop
        src="/lotties/cat.json"
        style={{ height: "300px", width: "300px" }}
      />
      <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} />
      <h1 className="text-3xl">Vous n'avez pas encore fait de commande</h1>
    </div>}
      </>
    )
} else {
    // Handle the case where localStorage is not available
    console.error("localStorage is not available.");
}

  
};
