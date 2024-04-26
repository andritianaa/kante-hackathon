import type { PageParams } from "@/types/next";
import { Layout, LayoutTitle } from "@/components/layout";
import { requiredCurrentUser } from "@/lib/current-user";
import { prisma } from "@/prisma";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await requiredCurrentUser();
  const products = await prisma.product.findMany({
    where: {
      userId: user.id,
    },
  });
  return (
    <Layout>
      <LayoutTitle>Products</LayoutTitle>
      <Card className="p-4">
          <Table>
            <TableHead>Products</TableHead>
            <TableHead>Slug</TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell className="font-mono font-bold">{product.slug}</TableCell>
                  <TableCell className="flex justify-end">
                    <Link href={`/products/${product.id}`}>
                    <SquareArrowOutUpRight size={16}/>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link href="/products/new" className="flex items-center justify-center rounded-md border-2 border-dashed border-primary p-8 lg:p-12 hover:bg-accent/40 text-xl transition-colors">Create</Link>
      </Card>
    </Layout>
  );
}
