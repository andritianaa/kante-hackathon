export type Chocolate = {
  occurences?: number;
  chocolat_id: number;
  nom: String;
  description: String;
  categorie: String;
  origine: String;
  prix: string;
  image: String;
};
export interface Command {
  id: string;
  chocolates: number[];
  userId: string;
  price: number;
  remise: number;
  TTC: number;
}

export interface User {
  id: string;
  name?: string;
  email?: string;
  emailVerified?: Date;
  image?: string;
  stripeCustomerId?: string;
  createdAt: Date;
  updatedAt: Date;
  Command: Command[];
}

