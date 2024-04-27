"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/D5BHRxlZvVK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardDescription,
} from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";

export function DashboardComponent() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-col w-full">
        <main className="flex flex-col gap-4 p-2 md:gap-8 md:p-10">
        <div className="flex gap-4 p-2">
            <Card className=" w-full max-w-2xl">
              <CardHeader>
                <CardTitle>Vente de chocolat par catégorie</CardTitle>
                <CardDescription>
                  Un graphique represantant le nombre de chocolat vendu par
                  catégorie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart1 className="aspect-[4/2]" />
              </CardContent>
            </Card>
            <Card className=" w-full max-w-2xl">
              <CardHeader>
                <CardTitle>Vente de chocolat par pays</CardTitle>
                <CardDescription>
                  Un graphique represantant le nombre de chocolat vendu par pays
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <BarChart2 className="aspect-[4/2]" />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Remise prix entre 20000 MGA - 30000 MGA{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5%</div>
                <div className="relative mb-6">
                  <input
                    id="labels-range-input"
                    type="range"
                    value="8"
                    min="0"
                    max="25"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    0 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    5 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    15 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    25 %
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Remise prix entre 20000 MGA - 30000 MGA{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">10%</div>
                <div className="relative mb-6">
                  <input
                    id="labels-range-input"
                    type="range"
                    value="15"
                    min="0"
                    max="50"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    0 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    10 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    30 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    50 %
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Remise prix entre 30000 MGA - 38000 MGA{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15%</div>
                <div className="relative mb-6">
                  <input
                    id="labels-range-input"
                    type="range"
                    value="15"
                    min="0"
                    max="100"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    0 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    25 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    50 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    100 %
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Remise pour les prix supérieurs à 38000 MGA{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">30%</div>
                <div className="relative mb-6">
                  <input
                    id="labels-range-input"
                    type="range"
                    value="40"
                    min="0"
                    max="60"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    0 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    15 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    30 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    50 %
                  </span>
                  
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Remise si anniversaire arrive dans 2 mois max{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3%</div>
                <div className="relative mb-6">
                  <input
                    id="labels-range-input"
                    type="range"
                    value="2"
                    min="0"
                    max="9"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    0 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    5 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    7 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    9 %
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Remise si anniversaire arrive dans 1 mois max{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7%</div>
                <div className="relative mb-6">
                  <input
                    id="labels-range-input"
                    type="range"
                    value="7"
                    min="0"
                    max="10"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    0 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    4 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    7 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    10 %
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Remise si anniversaire est passé il a moins de 2 semaines{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15%</div>
                <div className="relative mb-6">
                  <input
                    id="labels-range-input"
                    type="range"
                    value="15"
                    min="0"
                    max="30"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    5 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    10 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    20 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    30 %
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Remise si anniversaire est passé il a moins de 1 mois{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5%</div>
                <div className="relative mb-6">
                  <input
                    id="labels-range-input"
                    type="range"
                    value="5"
                    min="0"
                    max="15"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    0 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    5 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    10 %
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    15 %
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function BarChart1(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Tablettes", count: 1999 },
          { name: "Pralinés", count: 1572 },
          { name: "Truffes", count: 2160 },
          { name: "Chocolats chauds", count: 999 },
          { name: "Dragées", count: 2000 },
          { name: "Barres", count: 2700 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["brown"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}
function BarChart2(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Madagascar", count: 1500 },
          { name: "Côte d'Ivore", count: 2000 },
          { name: "Venezuela", count: 2200 },
          { name: "Equateur", count: 1300 },
          { name: "Mexique", count: 500 },
          { name: "Ghana", count: 200 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["green"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function WarehouseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  );
}
