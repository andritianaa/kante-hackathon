import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layout } from "@/components/layout";

export default function RouteError() {
  return (
    <Layout>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Product not found</CardTitle>
          <CardDescription>
            The product you are looking for does not exist or you doesn't have
            permission to view it.
          </CardDescription>
        </CardHeader>
      </Card>
    </Layout>
  );
}
