import type { PageParams } from "@/types/next";
import { Layout } from "@/components/layout";
import { JobsCategories } from "@/components/offer/SearchCategory";
import { ChocolateCard } from "../../../components/offer/ChocolateCard";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="flex flex-col mt-20">
      <JobsCategories />
      <div className="flex flex-wrap gap-3 pb-8">
        <ChocolateCard />
        <ChocolateCard />
        <ChocolateCard />
        <ChocolateCard />
        <ChocolateCard />
        <ChocolateCard />
        <ChocolateCard />
        <ChocolateCard />
      </div>
    </Layout>
  );
}
