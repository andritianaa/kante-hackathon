import Link from "next/link";

export const Hero2 = () => {
  return (
    <div  id="globeWrap" className="">
      <iframe
        id="globe"
        src="https://andritianaa.github.io/teratany-globe/"
      ></iframe>

      <div id="globeFront"  className="relative overflow-hidden before:absolute before:top-0 before:start-1/2  before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-400"
              href="/offer"
            >
              Explorer les principaux produits
             
            </Link>
          </div>
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-6xl">
              Savourez nos chocolats écologiques.
            </h1>
          </div>
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-white">
              Entrez dans un monde de douceur et de durabilité avec Edenia, le
              chocolat écologique qui allie plaisir gustatif et engagement
              environnemental.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
