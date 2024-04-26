"use client";
import type { PageParams } from "@/types/next";
import { Layout } from "@/components/layout";
import { ChocolateCard } from "@/components/offer/ChocolateCard";
import { chocolates } from "@/lib/chocolates";
import { SearchBar } from "@/components/component/SearchBar";
import { useState } from "react";
import { search } from '@/actions/product.actions';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Chocolate } from "../../../types/chocolate";

export default function RoutePage(props: PageParams<{}>) {

  const [filteredChocolates, setFilteredChocolates] = useState<Chocolate[]>(chocolates);
  const [page, setPage] = useState(1);

  const handleSearch =async (filter) => {
    
    setTimeout(() =>{}, 20)
    setFilteredChocolates(await search(filter));
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
    <Layout className="mt-20">
      <SearchBar onSearch={handleSearch}/>
      <div className="flex flex-wrap justify-center gap-3 pt-4 pb-8">
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
