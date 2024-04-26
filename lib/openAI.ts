"use server";
import OpenAI from "openai";

const openai = new OpenAI();

export const generate = async (ask: string) => {
    console.log("start generating");
    console.log("ASK ===> ", ask);


    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system", content: `
            Tu es une IA qui va me permettre d'optimiser la recherche dans mon application de vente de chocolat, voici ma liste de chocolat export const chocolates = [
                {
                    chocolat_id: 1,
                    nom: "Tablette Noir 70%",
                    description: "Delicieuse tablette de chocolat noir avec 70% de cacao.",
                    categorie: "Tablettes de chocolat",
                    origine: "Côte Ivoire",
                    prix: "38400",

                },
                {
                    chocolat_id: 8,
                    nom: "Tablette Noir Intense",
                    description: "Tablette de chocolat noir avec 85% de cacao pour une experience intense.",
                    categorie: "Tablettes de chocolat",
                    origine: "Côte Ivoire",
                    prix: "39500",
                },
                {
                    chocolat_id: 14,
                    nom: "Tablette Lait Caramel Beurre Sale",
                    description: "Tablette de chocolat au lait avec un caramel au beurre sale fondant.",
                    categorie: "Tablettes de chocolat",
                    origine: "Côte Ivoire",
                    prix: "43500",
                },
                {
                    chocolat_id: 9,
                    nom: "Praline Noisette",
                    description: "Praline fondant aux eclats de noisettes torrefiees.",
                    categorie: "Pralinés",
                    origine: "Venezuela",
                    prix: "44000",
                },
                {
                    chocolat_id: 15,
                    nom: "Praline Amande Grillee",
                    description: "Praline croquant avec des eclats d amandes grillees.",
                    categorie: "Pralinés",
                    origine: "Venezuela",
                    prix: "47000",
                },
                {
                    chocolat_id: 2,
                    nom: "Tablette Lait aux Noisettes",
                    description: "Tablette de chocolat au lait avec des eclats de noisettes croquants.",
                    categorie: "Tablettes de chocolat",
                    origine: "Venezuela",
                    prix: "24000",
                },
                {
                    chocolat_id: 10,
                    nom: "Truffe Chocolat Noir",
                    description: "Truffe au chocolat noir riche et onctueuse.",
                    categorie: "Truffes",
                    origine: "Equateur",
                    prix: "35500",
                },
                {
                    chocolat_id: 16,
                    nom: "Truffe Chocolat au Lait",
                    description: "Truffe au chocolat au lait onctueux et fondant.",
                    categorie: "Truffes",
                    origine: "Equateur",
                    prix: "28900",
                },
                {
                    chocolat_id: 3,
                    nom: "Praline Fondant",
                    description: "Praline fondant enrobe de chocolat noir.",
                    categorie: "Pralinés",
                    origine: "Equateur",
                    prix: "43200",
                },
                {
                    chocolat_id: 11,
                    nom: "Chocolat Chaud Classique",
                    description: "Chocolat chaud traditionnel … base de cacao pur.",
                    categorie: "Chocolats chauds",
                    origine: "Madagascar",
                    prix: "19200",
                },
                {
                    chocolat_id: 17,
                    nom: "Chocolat Chaud Cannelle Vanille",
                    description: "Chocolat chaud aromatise … la cannelle et … la vanille pour une touche exotique.",
                    categorie: "Chocolats chauds",
                    origine: "Madagascar",
                    prix: "18000",
                },
                {
                    chocolat_id: 4,
                    nom: "Truffe Chocolat Blanc",
                    description: "Truffe au chocolat blanc avec une touche de vanille.",
                    categorie: "Truffes",
                    origine: "Madagascar",
                    prix: "40000",
                },
                {
                    chocolat_id: 12,
                    nom: "Dragees au Chocolat Blanc",
                    description: "Dragees aux amandes enrobees de chocolat blanc.",
                    categorie: "Dragées",
                    origine: "Pérou",
                    prix: "24200",
                },
                {
                    chocolat_id: 18,
                    nom: "Dragees aux Noix de Pecan",
                    description: "Dragees aux noix de pecan enrobees de chocolat au lait.",
                    categorie: "Dragées",
                    origine: "Pérou",
                    prix: "18500",
                },
                {
                    chocolat_id: 5,
                    nom: "Chocolat Chaud epice",
                    description: "Melange de cacao avec une touche de cannelle et de piment.",
                    categorie: "Chocolats chauds",
                    origine: "Pérou",
                    prix: "28000",
                },
                {
                    chocolat_id: 13,
                    nom: "Barre Chocolat Noisette",
                    description: "Barre de chocolat noir aux eclats de noisettes croustillants.",
                    categorie: "Barres de chocolat",
                    origine: "Mexique",
                    prix: "31000",
                },
                {
                    chocolat_id: 19,
                    nom: "Barre Chocolat au Nougat",
                    description: "Barre de chocolat noir avec des morceaux de nougat tendre.",
                    categorie: "Barres de chocolat",
                    origine: "Mexique",
                    prix: "36000",
                },
                {
                    chocolat_id: 6,
                    nom: "Dragees aux Amandes",
                    description: "Dragees aux amandes enrobees de chocolat au lait.",
                    categorie: "Dragées",
                    origine: "Mexique",
                    prix: "32000",
                },
                {
                    chocolat_id: 7,
                    nom: "Barre Chocolat Caramel",
                    description: "Barre de chocolat au lait avec un cour fondant au caramel.",
                    categorie: "Barres de chocolat",
                    origine: "Ghana",
                    prix: "35000",
                {
                    chocolat_id: 20,
                    nom: "Tablette Blanc Citron",
                    description: "Tablette de chocolat blanc avec une touche de citron acidule.",
                    categorie: "Tablettes de chocolat",
                    origine: "Ghana",
                    prix: "27500",
                }
            ]
            A partir de ce message: "${ask}" genère un objet json qui a comme propriété {origin, categorie, priceStartOn, priceEndTo, name, mayLike} fourni uniquement des origines, des categories et des names qui sont dans ce tableau, Le champ mayLike est une liste d'id de chocolat que l'utilisateur peut aimer. Les prix sont en Malagasy Ariary (MGA) et met juste origin, categorie, priceStartOn, priceEndTo, name en string vide et , mayLike en tableau vide si il n'y a pas de correspondance`
            },
        ],
        model: "gpt-3.5-turbo",
    });

    console.log("Generation complete");
    console.log("RESPONSE AI ===> ", completion);

    return completion;
};
