"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { chocolates } from "@/lib/chocolates";

import "swiper/css";
import { ChocolateCard } from "../offer/ChocolateCard";
import { EffectCards } from 'swiper/modules';
import { EffectCreative } from 'swiper/modules';
export const Swipper = () => {
  return (
    <Swiper
    grabCursor={true}
        effect={'creative'}
        modules={[EffectCreative]}
        className="mySwip "
        autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
    >
      {chocolates.map((chocolate) => (
        <SwiperSlide >
          <ChocolateCard
            chocolat_id={chocolate.chocolat_id}
            nom={chocolate.nom}
            description={chocolate.description}
            categorie={chocolate.categorie}
            origine={chocolate.origine}
            prix={chocolate.prix}
            image={chocolate.image}
          />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};
