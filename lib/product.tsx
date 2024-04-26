import { chocolates } from "./chocolates";

export function getOneproduct(id: string) {
  const chocoId = parseInt(id);

  const filtered = chocolates.filter((chocolate) => {
    chocolate.categorie_id === chocoId;
  });
  return filtered;
}
