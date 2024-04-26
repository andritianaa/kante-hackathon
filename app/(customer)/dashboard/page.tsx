import type { PageParams } from "@/types/next";
import { Layout } from "@/components/layout";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <p>Hello world</p>
    </Layout>
  );
}
