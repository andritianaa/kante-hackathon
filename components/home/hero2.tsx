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
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-400"
              href="#"
            >
              Explorer les principaux produits
              <span className="flex items-center gap-x-1">
                <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">
                  Explorer
                </span>
                <svg
                  className="flex-shrink-0 size-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
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
