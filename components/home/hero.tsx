import React from "react";
import { Button } from "../ui/button";


export function Hero() {
  return (
    <div className=" h-[70vh] mt-20 relative overflow-hidden before:absolute before:top-0 before:start-1/2  dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className=" justify-between items-center mt-3 ">
        <h1 className="text-center text-3xl md:text-4xl font-bold">Titre</h1>
        <p className="text-center">Entrez dans un monde de douceur et de durabilité avec Edenia, <br />  <span className="mt-2">le chocolat écologique qui allie plaisir gustatif et engagement environnemental.</span></p>
      </div>
    </div>
  );
}
