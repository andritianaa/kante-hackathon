import type { PageParams } from "@/types/next";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReviewStep } from "./ReviewStep";

export default async function RoutePage(props: PageParams<{ slug: string }>) {
  const product = await prisma.product.findFirst({
    where: {
      slug: props.params.slug,
    },
  });
  if (!product) notFound();
  return (
    <div
      className={cn(
        product.backgroundColor,
        `h-full w-full flex items-center flex-col p-4`
      )}
    >
      <div className="flex gap-2 items-center">
        {product.image ?<img className="size-8" src={product.image} alt={product.name} />: null}
        <h1 className="text-lg font-bold">{product?.name}</h1>
      </div>
      <div className="flex-1">
        <ReviewStep product={product}/>
      </div>
    </div>
  );
}
