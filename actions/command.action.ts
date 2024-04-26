"use server"

import { action, ActionError } from "@/lib/safe-action";
import { prisma } from "@/prisma";
import { z } from "zod";
import { currentUser } from "@/lib/current-user";
import { Command } from "@prisma/client";


export const newCommand = action(
    z.object({
        chocolates: z.array(z.number()),
        userId: z.string(),
        price: z.number(),
        remise: z.number(),
        TTC: z.number(),
    }),
    async (input) => {
        const command = await prisma.command.create({
            data: {
                chocolates: input.chocolates,
                userId: input.userId,
                price: input.price,
                remise: input.remise,
                TTC: input.TTC,
            }
        })
        if (!command) throw new ActionError("Command not found");
        return command;
    }
)

export const getCommands = async (userId: string | undefined): Promise<Command[]> => {
    const user = await currentUser()
    if (user) {
        const commands = await prisma.command.findMany({
            where: {
                userId: userId ? userId : user.id
            }
        })
        if (!commands) throw new ActionError("Commands not found");
        return commands;
    } else throw new ActionError("User not found");
}