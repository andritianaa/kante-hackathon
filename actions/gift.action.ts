
"use server";

import fs from "fs";
import { action, ActionError } from "../lib/safe-action"
import { currentUser } from "../lib/current-user"
import { addVoucher } from "./user.action";
const filePath = "./actions/gift.json";

export const createGift = async ({ chocolates, value, userId }) => {
    addVoucher(value, userId);

    const gift = {
        userId: userId,
        chocolates: chocolates,
        value: value,
        giftId: Math.floor(Math.random() * 1000000000) + 1
    }

    fs.readFile(filePath, "utf8", (err, data) => {
        const array = JSON.parse(data);
        array.push(gift);
        fs.writeFile(
            filePath,
            JSON.stringify(array, null, 2),
            "utf8",
            (err) => {
            }
        )
    });
}

type Chocolate = {
    occurences: number;
    chocolat_id: number;
    nom: string;
    description: string;
    categorie: string;
    origine: string;
    prix: string;
    image: string;
    categorie_id: number;
    origine_id: number;
};

type UserGift = {
    userId: string;
    chocolates: Chocolate[];
    value: number;
    giftId: number;
};


export const getUserGift = async (): Promise<UserGift[]> => {
    const user = await currentUser();

    if (user) {
        try {
            const data = await fs.readFileSync(filePath, "utf8");
            const array = JSON.parse(data);
            const response = array.filter(element => element.userId === user.id);
            console.error("response :", response);


            return response || [];
        } catch (err) {
            console.error("Error reading file:", err);
            return [];
        }
    } else {
        throw new ActionError("User not connected");
    }
};