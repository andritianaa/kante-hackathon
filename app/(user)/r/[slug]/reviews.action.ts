"use server";

import { z } from "zod";
import { action, ActionError } from "@/lib/safe-action";
import { Review } from "@prisma/client";
import { prisma } from "@/prisma";
import { ReviewSchema } from "./review.schema";

export const getReviewAction = action(
    z.object({
        productId: z.string(),
        id: z.string(),
    }),
    async (input) => {
        const review = await prisma.review.findUnique({
            where: {
                id: input.id,
                productId: input.productId,
            }
        })
        if (!review) throw new ActionError("Review not found");
        return review;
    }
)

export const updateReviewAction = action(
    ReviewSchema,
    async (input) => {
        const headerList = new Headers();
        const userIp =
            headerList.get("x-real-ip") || headerList.get("x-forwarded-for");
        let review: Review | null = null;

        if (!userIp) throw new ActionError("User IP not found");

        if (input.id) {
            review = await prisma.review.findUnique({
                where: {
                    id: input.id,
                    ip: userIp,
                    productId: input.productId,
                },
            });

            if (!review) throw new ActionError("Review not found");
            review = await prisma.review.update({
                where: {
                    id: input.id,
                },
                data: {
                    rating: input.rating ?? review.rating,
                    text: input.text ?? review.text,
                    audio: input.audio ?? review.audio,
                    socialLink: input.socialLink ?? review.socialLink,
                    name: input.name ?? review.name,
                },
            });
        } else {
            review = await prisma.review.create({
                data: {
                    productId: input.productId,
                    ip: userIp,
                    rating: input.rating ?? 0,
                    text: input.text,
                    audio: input.audio,
                    socialLink: input.socialLink,
                    name: input.name,
                },
            });
        }
    }
);
