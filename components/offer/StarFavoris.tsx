"use client"
import { Star } from "lucide-react";
import { useState } from "react";

export const StarFavoris = () => {
  const [isFavoris, setFavoris] = useState<boolean>(false);
  const addToFavoris = () => {
    setFavoris(!isFavoris);
  };
  return (
    <>
      {" "}
      {isFavoris ? (
        <Star color="#03b07c" onClick={addToFavoris} />
      ) : (
        <Star onClick={addToFavoris} />
      )}
    </>
  );
};
