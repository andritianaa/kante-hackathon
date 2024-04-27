import type { PageParams } from "@/types/next";
import { getUserGift } from "../../actions/gift.action";
import { Layout, LayoutTitle } from "../../components/layout";
import { Header } from "../../features/layout/Header";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

export default async function RoutePage(props: PageParams<{}>) {
  const gifts = await getUserGift();
  gifts.reverse();

  return (
    <>
      <Header />
      <Layout>
        <LayoutTitle className="mt-20">Gift</LayoutTitle>
        {gifts.map((gift) => (
          <Table className="mb-10">
            <TableHeader>
              <TableRow>
                <TableHead className="">Nom</TableHead>
                <TableHead>Categories</TableHead>
                <TableHead>Origines</TableHead>
                <TableHead className="text-right">Qtés</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gift.chocolates.map((choc) => (
                <TableRow key={choc.nom}>
                  <TableCell className="font-medium">{choc.nom}</TableCell>
                  <TableCell>{choc.categorie}</TableCell>
                  <TableCell>{choc.origine}</TableCell>
                  <TableCell className="text-right">
                    {choc.occurences}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">{gift.value} MGA</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        ))}
        
      </Layout>
    </>
  );
}
