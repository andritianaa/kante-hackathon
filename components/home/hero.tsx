import React from "react";
import { Button } from "../ui/button";


export function Hero() {
  return (
    <>
      <div className=" h-[35vh] mt-40 relative overflow-hidden before:absolute before:top-0 before:start-1/2  dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className=" justify-between items-center mt-3 ">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-3">Titre</h1>
          <p className="text-center">Entrez dans un monde de douceur et de durabilité avec Edenia, <br />  <span className="mt-2">le chocolat écologique qui allie plaisir gustatif et engagement environnemental.</span></p>
        </div>

      </div>

      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Edenia chocolaterie</h1>
            <p className="mt-10">
              Edenia, notre chocolat de prédilection, incarne trois principes fondamentaux : la durabilité, la certification biologique et écologique, ainsi qu'un engagement profond envers nos communautés locales.La durabilité est au cœur de tout ce que nous faisons chez Edenia.
            </p>
            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full sm:w-auto">
                <label className="sr-only">Search</label>
                <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full xl:min-w-72 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter work email" />
              </div>
              <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                Request demo
              </a>
            </div>




          </div>


          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80" alt="Image Description" />
          </div>

        </div>

      </div>
    </>
  );
}
