import type { PageParams } from "@/types/next";
import { Layout, LayoutTitle } from "../../components/layout";

export default async function RoutePage(props: PageParams<{  }>) {
  return (
    <Layout>
        <LayoutTitle className="m-20">Setting page</LayoutTitle>
    </Layout>
  )
}