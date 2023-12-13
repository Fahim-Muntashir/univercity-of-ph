import { z } from "zod";

const userValidationSchema = z.object({
    password: z.string({
        invalid_type_error:'Password Must Be string',
    }).max(20, { message: "password cannot be more than 20 carector" }).optional(),
})

export const UserValidation = {
    userValidationSchema
}