
"use server";

import fs from "fs";
import { z } from "zod"
import { action, ActionError } from "../lib/safe-action"
import { currentUser } from "../lib/current-user"
import { chocolates } from '../lib/chocolates';
const filePath = "./actions/gift.json";

export const createGift = async ({ chocolates, value, userId }) => {
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
            (err) => { }
        )
    });
}

export const getUserGift = async () => {
    const user = await currentUser()
    let response = []
    if (user) {

        fs.readFile(filePath, "utf8", (err, data) => {
            const array = JSON.parse(data);
            array.filter(e => e.userId == user.id)
            response = array
        });
        return response;
    } else throw new ActionError("User not connected")
}