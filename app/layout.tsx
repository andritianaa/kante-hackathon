import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";


const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Edenia",
  description: "Entrez dans un monde de douceur et de durabilité avec Edenia, le chocolat écologique qui allie plaisir gustatif et engagement environnemental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full ">
      <body className={cn(inter.className, ``)}>
        
        <Providers>
          {children}</Providers>
      </body>
    </html>
  );
}
