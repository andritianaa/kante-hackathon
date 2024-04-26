import type { LayoutParams } from "@/types/next";
import { AsideUser } from "../../components/user/AsideUser";
import { Header } from "../../features/layout/Header";
export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="h-full w-full flex">

      <Header />
      <AsideUser />
      {props.children}
    </div>
  );
}
