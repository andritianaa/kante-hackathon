"use server";

import fs from "fs";
import { currentUser } from "@/lib/current-user";
import { prisma } from "@/prisma";
import { ActionError } from "../lib/safe-action";
const filePathBirth = "./actions/birth.json";
const filePathGenre = "./actions/genre.json";
const filePathBond = "./actions/bond.json";

interface UserObject {
    userId: string;
    value: string;
}
interface UserObjectInt {
    userId: string;
    value: number;
}

export const addBirth = async (birth: string) => {
    const user = await currentUser();
    if (user) {
        fs.readFile(filePathBirth, "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }
            try {
                const array: UserObject[] = JSON.parse(data);
                array.push({
                    userId: user.id,
                    value: birth,
                });
                fs.writeFile(
                    filePathBirth,
                    JSON.stringify(array, null, 2),
                    "utf8",
                    (err) => {
                        if (err) {
                            throw new ActionError(
                                "Erreur lors de la modification de la date d'anniversaire"
                            );
                        }
                        console.log("Object has been added successfully!");
                    }
                );
            } catch (error) {
                throw new ActionError(
                    "Erreur lors de la modification de la date d'anniversaire"
                );
            }
        });
    }
};

export const getBirth = async (userId: string): Promise<string> => {
    const data = fs.readFileSync(filePathBirth, "utf8");
    try {
        const array: UserObject[] = JSON.parse(data);
        const user = array.find((obj) => obj.userId === userId);
        if (user) {
            return user.value;
        }
        throw new ActionError("L'utilisateur n'existe pas");
    } catch (error) { }
    throw new ActionError("L'utilisateur n'existe pas");
};

export const addGenre = async (genre: string) => {
    const user = await currentUser();
    if (user) {
        fs.readFile(filePathBirth, "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }
            try {
                const array: UserObject[] = JSON.parse(data);
                array.push({
                    userId: user.id,
                    value: genre,
                });
                fs.writeFile(
                    filePathGenre,
                    JSON.stringify(array, null, 2),
                    "utf8",
                    (err) => {
                        if (err) {
                            throw new ActionError(
                                "Erreur lors de la modification du genre"
                            );
                        }
                        console.log("Object has been added successfully!");
                    }
                );
            } catch (error) {
                throw new ActionError(
                    "Erreur lors de la modification du genre"
                );
            }
        });
    }
};

export const getGenre = async (userId: string): Promise<string> => {
    const data = fs.readFileSync(filePathGenre, "utf8");
    try {
        const array: UserObject[] = JSON.parse(data);
        const user = array.find((obj) => obj.userId === userId);
        if (user) {
            return user.value;
        }
        throw new ActionError("L'utilisateur n'existe pas");
    } catch (error) { }
    throw new ActionError("L'utilisateur n'existe pas");
};

export const addVoucher = async (amount: number, userId: string) => {
    fs.readFile(filePathBond, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        try {
            const array: UserObjectInt[] = JSON.parse(data);
            let user = array.find(user => user.userId === userId)
            if (user) {
                user.value += amount
            } else {
                array.push({
                    userId: userId,
                    value: amount,
                });
            }
            fs.writeFile(
                filePathBond,
                JSON.stringify(array, null, 2),
                "utf8",
                (err) => {
                    if (err) {
                        throw new ActionError(
                            "Erreur lors de la modification du genre"
                        );
                    }
                    console.log("Object has been added successfully!");
                }
            );
        } catch (error) {
            throw new ActionError(
                "Erreur lors de la modification du genre"
            );
        }
    });
}

export const getVoucher = async (userId: string): Promise<number> => {
    const data = fs.readFileSync(filePathBond, "utf8");
    try {
        const array: UserObjectInt[] = JSON.parse(data);
        const user = array.find((obj) => obj.userId === userId);
        if (user) {
            return user.value;
        } else {
            return 0
        }
    } catch (error) { }
    throw new ActionError("L'utilisateur n'existe pas");
};

export const substract = async (amount: number) => {
    const current = await currentUser()
    if (current) {
        fs.readFile(filePathBond, "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }
            try {
                const array: UserObjectInt[] = JSON.parse(data);
                let user = array.find(user => user.userId === current.id)
                if (user) {
                    user.value -= amount
                    if (user.value < 0) {
                        user.value = 0
                    }
                } else {
                    array.push({
                        userId: current.id,
                        value: amount,
                    });
                }
                fs.writeFile(
                    filePathBond,
                    JSON.stringify(array, null, 2),
                    "utf8",
                    (err) => {
                        if (err) {
                            throw new ActionError(
                                "Erreur lors de la modification du genre"
                            );
                        }
                        console.log("Object has been added successfully!");
                    }
                );
            } catch (error) {
                throw new ActionError(
                    "Erreur lors de la modification du genre"
                );
            }
        });
    }
}