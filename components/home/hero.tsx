import React from "react";
import { Button } from "../ui/button";
import { Layout } from "../layout";


export function Hero() {
  return (
    <>
      <Layout>
        <div className="max-w-[85rem] mb-20 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="block text-3xl font-bold text-orange-950 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Edenia chocolaterie</h1>
              <p className="mt-10">
                Edenia, incarne trois principes fondamentaux : la durabilité, la certification biologique et écologique, ainsi qu'un engagement profond envers nos communautés locales.La durabilité est au cœur de tout ce que nous faisons chez Edenia.
              </p>
              <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="w-full sm:w-auto">
                  <label className="sr-only">Search</label>
                  <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full xl:min-w-72 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter work email" />
                </div>
                <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Request
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 mt-10 lg:mt-0">
              <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80" alt="Image Description" />
            </div>
          </div>
        </div>
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 dark:bg-neutral-900">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-end justify-between">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-orange-950 dark:text-white sm:text-4xl lg:text-5xl">Pourquoi nos produits?</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-200 lg:mx-0">Nos produits se distinguent par Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quidem expedita officia ipsa unde accusantium</p>
              </div>
            </div>
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
              <div className="overflow-hidden bg-white rounded shadow dark:bg-neutral-800">
                <div className="p-5">
                  <div className="relative">
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                      <img className="object-cover w-full h-full" src="/Pourquoi-manger-du-chocolat-n-est-pas-tres-ecolo2.jpg" alt="" />
                    </a>
                  </div>
                  <p className="mt-5 text-2xl font-semibold">
                    <a href="#" title="" className="text-black dark:text-white"> Plantation de cacao bien entretenue </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600 dark:text-gray-200">Dans nos plantations de cacao écologique, chaque geste est empreint de soin et de respect pour la nature. Les cultivateurs s'engagent à cultiver le cacao de manière durable, en utilisant des méthodes agroforestières qui préservent la biodiversité et régénèrent les sols.</p>
                  <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Continue Reading
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="overflow-hidden bg-white rounded shadow dark:bg-neutral-800">
                <div className="p-5">
                  <div className="relative">
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                      <img className="object-cover w-full h-full" src="/P1010232_2.jpg" alt="" />
                    </a>
                  </div>
                  <p className="mt-5 text-2xl font-semibold">
                    <a href="#" title="" className="text-black dark:text-white"> Production suivant la norme </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600 dark:text-gray-200">La production de chocolat est un processus méticuleux. Chaque étape est exécutée avec une précision artisanale, garantissant un produit exceptionnel. Les normes de qualité sont maintenues pour la pureté des ingrédients et la sécurité alimentaire.</p>
                  <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Continue Reading
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="overflow-hidden bg-white rounded shadow dark:bg-neutral-800">
                <div className="p-5">
                  <div className="relative">
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                      <img className="object-cover w-full h-full" src="/emaballage-papier-de-cacao-le-chocolat-de-tiffanie.jpg" alt="" />
                    </a>
                  </div>
                  <p className="mt-5 text-2xl font-semibold">
                    <a href="#" title="" className="text-black dark:text-white"> Packaging biodégradable </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600 dark:text-gray-200">Nous privilégions l'utilisation de packaging dégradable,contribuant à réduire notre empreinte environnementale.Ce choix reflète notre engagement envers la durabilité et la préservation de l'environnement tout en offrant à nos clients une expérience écologique.
                  </p>
                  <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Continue Reading
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
              <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>

  );
}
