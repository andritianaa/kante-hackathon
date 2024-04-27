import type { PageParams } from "@/types/next";
import { DashboardComponent } from "@/components/component/DashboardComponent";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <div className="mt-16">
      <DashboardComponent />;
    </div>
  );
}
