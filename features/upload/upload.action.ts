"use server"

import { z } from "zod";
import { ActionError, userAction } from "../../lib/safe-action";
import { put } from "@vercel/blob";

export const uploadImageAction = userAction(
    z.instanceof(FormData),
    async (formData: FormData) => {
        const file = formData.get("file") as File;
        console.log(file);
        if (!file) throw new ActionError("File not found");
        const name = file.name;

        const result = await put(name, file, { access: "public" });
        return result;
    }
);
