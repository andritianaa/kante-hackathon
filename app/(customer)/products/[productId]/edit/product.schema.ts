import { z } from "zod";

export const ProductSchema = z.object({
    name: z.string(),
    slug: z
        .string()
        .regex(/^[a-zA-Z0-9_-]*$/)
        .min(5)
        .max(20),
    noteText: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    informationText: z.string().optional().nullable(),
    reviewText: z.string().optional().nullable(),
    thanksText: z.string().optional().nullable(),
    backgroundColor: z.string().optional().nullable(),
});

export type ProductType = z.infer<typeof ProductSchema>;

export const GRADIENTS_CLASSES = [
    "bg-gradient-to-r from-blue-600 to-violet-600",
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-teal-200 to-teal-500",
    "bg-gradient-to-r from-rose-400 to-red-500",
    "bg-gradient-to-r from-red-500 to-orange-500",
];
