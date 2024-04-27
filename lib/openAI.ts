"use server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generate = async (ask: string) => {
    console.log("start generating");
    console.log("ASK ===> ", ask);


    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system", content: `
            
            A partir de ce message: "${ask}" genère un objet json qui a comme propriété {origin, categorie, priceStartOn, priceEndTo, name, mayLike} fourni uniquement des origines, des categories et des names qui sont dans ce tableau, Le champ mayLike est une liste d'id de chocolat que l'utilisateur peut aimer. Les prix sont en Malagasy Ariary (MGA) et met juste origin, categorie, priceStartOn, priceEndTo, name en string vide et , mayLike en tableau vide si il n'y a pas de correspondance`
            },
        ],
        model: "gpt-3.5-turbo",
    });

    console.log("Generation complete");
    console.log("RESPONSE AI ===> ", completion);

    return completion;
};
