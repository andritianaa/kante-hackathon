"use client";
import type { PageParams } from "@/types/next";
import { Layout } from "@/components/layout";
import { ChocolateCard } from "../../../components/offer/ChocolateCard";
import { chocolates } from "../../../lib/chocolates";
import { SearchBar } from "../../../components/component/SearchBar";
import { useLocalStorage } from "react-use";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function RoutePage(props: PageParams<{}>) {
  const [searchFitlter, setSearchFitlter, removeSearchFitlter] =
    useLocalStorage(`searchFilter`, "");
  const [categoryFitlter, setCategoryFitlter, removeCategoryFitlter] =
    useLocalStorage(`categoryFilter`, "");
  const [originFitlter, setOriginFitlter, removePriginFitlter] =
    useLocalStorage(`originFilter`, "");
  const [priceFitlter, setPriceFitlter, removePriceFitlter] = useLocalStorage(
    `priceFilter`,
    ""
  );

  const [filteredChocolates, setFilteredChocolates] = useState(chocolates);
  const [page, setPage] = useState(1);

  const handleSearch = (filter) => {
    console.log("search filter ===> ", filter);
    filter.category == "none" ? "" : filter.category;
    filter.origin == "none" ? "" : filter.origin;
    filter.price == "none" ? "" : filter.price;

    let tempResult = chocolates.filter((chocolate) => {
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

    setFilteredChocolates(tempResult);
  };

  const handdlePagination = (page: number)=>{
    setPage(page)
  }
  const handdlePrev = ()=>{
    if (page > 1) {
      setPage(page- 1)
    }
  }
  const handdleNext = ()=>{
    if (page < 2) {
      setPage(page+ 1)
    }
  }

  return (
    <Layout className="flex flex-col mt-20">
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center gap-3 pb-8">
        {filteredChocolates.map((chocolate) => (
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
      <div className="mb-20">
        <Pagination>
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious onClick={handdlePrev} />
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              {page == 1 ? (
                <PaginationLink onClick={()=> handdlePagination(1)}  isActive>
                  1
                </PaginationLink>
              ) : (
                <PaginationLink onClick={()=> handdlePagination(1)} >1</PaginationLink>
              )}
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              {page == 2 ? (
                <PaginationLink onClick={()=> handdlePagination(2)}  isActive>
                  2
                </PaginationLink>
              ) : (
                <PaginationLink onClick={()=> handdlePagination(2)} >2</PaginationLink>
              )}
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              <PaginationNext onClick={handdleNext} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Layout>
  );
}
