import { Contact, ImagePlus, Pencil, Settings } from "lucide-react";
import Link from "next/link";

export const AsideUser = () => {
  return (
    <div className="h-screen w-20 bg-white">
      <div className="flex justify-end p-2">
        <button
          type="button"
          className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
          data-hs-overlay="#sidebar-mini"
          aria-controls="sidebar-mini"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="flex-shrink-0 size-4"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>

      <div
        id="sidebar-mini"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-20 bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-black dark:border-neutral-700"
      >
        <div className="flex flex-col justify-center items-center gap-y-2 py-4">
          <div className="mb-4">
            <a className="flex-none" href="#">
              <img
                src="https://api.dicebear.com/8.x/initials/svg?seed=miandryrakotovelo@gmail.com"
                className="w-8 h-8 rounded-full"
                alt=""
              />
            </a>
          </div>

          <div className="hs-tooltip [--placement:right] inline-block">
            <Link
              href="/settings"
              type="button"
              className="hs-tooltip-toggle w-[3rem] h-[3rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-900"
            >
              <Settings />
            </Link>
          </div>

          <div className="hs-tooltip [--placement:right] inline-block">
            <Link
              href="/settings/picture"
              type="button"
              className="hs-tooltip-toggle w-[3rem] h-[3rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-900"
            >
              <ImagePlus />
            </Link>
          </div>

          <div className="hs-tooltip [--placement:right] inline-block">
            <Link
              href="/settings/username"
              type="button"
              className="hs-tooltip-toggle w-[3rem] h-[3rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-900"
            >
              <Pencil />
            </Link>
          </div>

          <div className="hs-tooltip [--placement:right] inline-block">
            <Link
              href="/settings/contact"
              type="button"
              className="hs-tooltip-toggle w-[3rem] h-[3rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-900"
            >
              <Contact />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
