"use client"
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function RouteError() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <Player
        autoplay
        loop
        src="/lotties/404.json"
        style={{ height: "300px", width: "300px" }}
      />
      <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} />
      <h1 className="text-3xl">404 Tsa hita</h1>
    </div>
  );
}
