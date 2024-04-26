import React from "react";
import { Button } from "../ui/button";


export function Hero() {
  return (
    <div className=" h-[70vh] mt-20 relative overflow-hidden before:absolute before:top-0 before:start-1/2  dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="flex justify-between items-center"></div>

      <p>"Entrez dans un monde de douceur et de durabilité avec Edenia, le chocolat écologique qui allie plaisir gustatif et engagement environnemental.</p>
    </div>
  );
}
