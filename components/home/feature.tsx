import { Gauge, PocketKnife, Sparkles } from "lucide-react";
import { useState } from "react";

export const Feature = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <nav
        className="gap-4 max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4"
        aria-label="Tabs"
        role="tablist"
      >
        <div className=" flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 border active">
          <PocketKnife size={28} />
          <span className="mt-5">
            <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
              All-in-one workspace
            </span>
            <span className="hidden lg:block mt-2 text-gray-800 dark:text-neutral-200">
              Create a business, whether you’ve got a fresh idea.
            </span>
          </span>
        </div>

        <div className="flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 border">
          <Gauge size={28} />
          <span className="mt-5">
            <span className=" hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
              Automation on a whole new level
            </span>
            <span className="hidden lg:block mt-2 text-gray-800 dark:text-neutral-200">
              Use automation to scale campaigns profitably and save time doing
              it.
            </span>
          </span>
        </div>

        <div className=" flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 border">
          <Sparkles size={28} />
          <span className="mt-5">
            <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
              Solving problems for every team
            </span>
            <span className="hidden lg:block mt-2 text-gray-800 dark:text-neutral-200">
              One tool for your company to share knowledge and ship projects.
            </span>
          </span>
        </div>
      </nav>

      <div className="mt-12 md:mt-16">
        <div
          id="tabs-with-card-1"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-1"
        >
          <div className="max-w-[1140px] lg:pb-32 relative">
            <figure className="hidden absolute bottom-0 start-0 z-[2] max-w-full w-60 h-auto mb-20 ms-20 lg:block">
              <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)] dark:bg-neutral-700">
                <img
                  className="max-w-full rounded-[1.25rem] h-auto dark:hidden"
                  src="https://preline.co/assets/img/mockups/img9.jpg"
                  alt="Image Description"
                />
                <img
                  className="max-w-full rounded-[1.25rem] h-auto dark:block hidden"
                  src="https://preline.co/assets/img/mockups/img11.jpg"
                  alt="Image Description"
                />
              </div>
            </figure>

            <figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
              <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-neutral-800 dark:border-neutral-700">
                <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                  <span className="size-2 bg-gray-200 rounded-full dark:bg-neutral-700"></span>
                  <span className="size-2 bg-gray-200 rounded-full dark:bg-neutral-700"></span>
                  <span className="size-2 bg-gray-200 rounded-full dark:bg-neutral-700"></span>
                </div>
                <div className="flex justify-center items-center size-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-neutral-700 dark:text-neutral-200">
                  www-team-uk.com
                </div>
              </div>

              <div className="bg-gray-800 rounded-b-lg">
                <img
                  className="max-w-full h-auto rounded-b-lg dark:hidden"
                  src="https://preline.co/assets/img/mockups/img8.jpg"
                  alt="Image Description"
                />
                <img
                  className="max-w-full h-auto rounded-b-lg dark:block hidden"
                  src="https://preline.co/assets/img/mockups/img10.jpg"
                  alt="Image Description"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
