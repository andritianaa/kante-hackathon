"use server";

import { chocolates } from "@/lib/chocolates";
import { Chocolate } from "@/types/chocolate";

export type SearchParams = {
    search: string;
    category: string;
    origin: string;
    price: string;
};

export const search = async (filter: SearchParams): Promise<Chocolate[]> => {
    return chocolates.filter((chocolate) => {
        return (
            (chocolate.nom
                .toLowerCase()
                .includes(filter.search ? filter.search?.toLowerCase() : "") ||
                chocolate.origine
                    .toLowerCase()
                    .includes(filter.search ? filter.search?.toLowerCase() : "") ||
                chocolate.image
                    .toLowerCase()
                    .includes(filter.search ? filter.search?.toLowerCase() : "") ||
                chocolate.prix.includes(
                    filter.search ? filter.search?.toLowerCase() : ""
                ) ||
                chocolate.categorie
                    .toLowerCase()
                    .includes(filter.search ? filter.search?.toLowerCase() : "") ||
                chocolate.description
                    .toLowerCase()
                    .includes(filter.search ? filter.search?.toLowerCase() : "")) &&
            chocolate.categorie
                .toLowerCase()
                .includes(filter.category ? filter.category?.toLowerCase() : "") &&
            chocolate.origine
                .toLowerCase()
                .includes(filter.origin ? filter.origin?.toLowerCase() : "")
        );
    });
};
