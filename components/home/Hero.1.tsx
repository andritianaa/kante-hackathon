import React from "react";
import { Layout } from "../layout";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <>
        <div>
          <div className="max-w-[85rem] mb-20 mt-28 px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
              <div className="lg:col-span-3">
                <h1 className="block text-3xl font-bold text-amber-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                  Edenia chocolaterie
                </h1>
                <p className="mt-10">
                  Edenia, incarne trois principes fondamentaux : la durabilité,
                  la certification biologique et écologique, ainsi qu'un
                  engagement profond envers nos communautés locales.La
                  durabilité est au cœur de tout ce que nous faisons chez
                  Edenia.
                </p>
                <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                  <div className="w-full sm:w-auto">
                    <label className="sr-only">Search</label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full xl:min-w-72 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Recherche intelligente"
                    />
                  </div>
                  <a
                    className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-700 text-white hover:bg-amber-600 dark:bg-black dark:hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    <Sparkles />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 mt-10 lg:mt-0">
                <img
                  className="w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="py-10 sm:py-10 lg:py-10 ">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-end justify-between">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-amber-900 dark:text-white sm:text-4xl lg:text-5xl">
                  Pourquoi nos produits?
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-200 lg:mx-0">
                  Nos produits se démarquent par l'emploi d'ingrédients
                  biologiques, favorisant une qualité accrue tout en respectant
                  l'environnement.
                </p>
              </div>
            </div>
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
              <div className="overflow-hidden bg-white rounded shadow dark:bg-neutral-800">
                <div>
                  <div className="relative">
                    <a
                      href="#"
                      title=""
                      className="block aspect-w-4 aspect-h-3"
                    >
                      <img
                        className="object-cover w-full h-full"
                        src="/Pourquoi-manger-du-chocolat-n-est-pas-tres-ecolo2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="p-5">
                    <p className="mt-5 text-2xl font-semibold">
                      <a
                        href="#"
                        title=""
                        className="text-black dark:text-white"
                      >
                        {" "}
                        Plantation de cacao bien entretenue{" "}
                      </a>
                    </p>
                    <p className="mt-4 text-base text-gray-600 dark:text-gray-200">
                      Les cultivateurs s'engagent à cultiver le cacao de manière
                      durable, en utilisant des méthodes agroforestières
                      préservant la biodiversité.
                    </p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden bg-white rounded shadow dark:bg-neutral-800">
                <div>
                  <div className="relative">
                    <a
                      href="#"
                      title=""
                      className="block aspect-w-4 aspect-h-3"
                    >
                      <img
                        className="object-cover w-full h-full"
                        src="/P1010232_2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="p-5">
                    <p className="mt-5 text-2xl font-semibold">
                      <a
                        href="#"
                        title=""
                        className="text-black dark:text-white"
                      >
                        {" "}
                        Production suivant la norme{" "}
                      </a>
                    </p>
                    <p className="mt-4 text-base text-gray-600 dark:text-gray-200">
                      La production de chocolat est exécutée avec une précision
                      artisanale tout en maintenant les normes de qualité,
                      garantissant un produit exceptionnel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden bg-white rounded shadow dark:bg-neutral-800">
                <div>
                  <div className="relative">
                    <a
                      href="#"
                      title=""
                      className="block aspect-w-4 aspect-h-3"
                    >
                      <img
                        className="object-cover w-full h-full"
                        src="/emaballage-papier-de-cacao-le-chocolat-de-tiffanie.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="p-5">
                    <p className="mt-5 text-2xl font-semibold">
                      <a
                        href="#"
                        title=""
                        className="text-black dark:text-white"
                      >
                        {" "}
                        Packaging biodégradable{" "}
                      </a>
                    </p>
                    <p className="mt-4 text-base text-gray-600 dark:text-gray-200">
                      Nous privilégions l'utilisation de packaging dégradable
                      comme engagement envers la préservation de
                      l'environnement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 sm:py-5 lg:py-5">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center mt-20">
              <h2 className="text-3xl font-bold leading-tight text-amber-900 dark:text-white sm:text-4xl lg:text-5xl">
                Soutien aux communautés locales
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-200">
                "Soutenir les communautés locales est bien plus qu'une action
                ponctuelle ; c'est un engagement continu envers le développement
                durable, la résilience et l'autonomie des populations dans la
                construction d'un avenir inclusif et prospère."
              </p>
            </div>
          </div>
        </section>
        <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-12 gap-6">
            <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
              <a className="group relative block rounded-xl overflow-hidden">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="/agricu1.jpg"
                    alt="Image Description"
                  />
                </div>
              </a>
            </div>
            <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
              <a className="group relative block rounded-xl overflow-hidden">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="/agricu7.jpg"
                    alt="Image Description"
                  />
                </div>
              </a>
            </div>
            <div className="col-span-12 md:col-span-4">
              <a className="group relative block rounded-xl overflow-hidden">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="/agricu5.jpg"
                    alt="Image Description"
                  />
                </div>
              </a>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4">
              <a className="group relative block rounded-xl overflow-hidden">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="/agricu6.jpg"
                    alt="Image Description"
                  />
                </div>
              </a>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4">
              <a className="group relative block rounded-xl overflow-hidden">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="/agricu4.jpg"
                    alt="Image Description"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
    </>
  );
}
