import type { LayoutParams } from "@/types/next";
import { Header } from "@/features/layout/Header";
import { Footer } from "../../components/home/Footer";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="h-full w-full">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
