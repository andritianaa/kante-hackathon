import type { PageParams } from "@/types/next";
import { Layout } from "@/components/layout";
import { JobCard } from "@/components/offer/JobCard";
import { JobsCategories } from "@/components/offer/SearchCategory";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="flex flex-col mt-20">
      <JobsCategories />
      <div className="flex flex-wrap gap-3 pb-8">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </Layout>
  );
}
