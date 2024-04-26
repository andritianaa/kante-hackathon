import type { PageParams } from "@/types/next";
import { Layout } from "@/components/layout";
import { ChocolateCard } from "../../../components/offer/ChocolateCard";
import { chocolates } from "../../../lib/chocolates";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="mt-20">
      <div className="flex flex-wrap justify-center gap-3 pb-8">
        {chocolates.map((chocolate) => (
          <ChocolateCard
            chocolat_id={chocolate.chocolat_id}
            nom={chocolate.nom}
            description={chocolate.description}
            categorie={chocolate.categorie}
            origine={chocolate.origine}
            prix={chocolate.prix}
            image={chocolate.image}
          />
        ))}
      </div>
    </Layout>
  );
}
