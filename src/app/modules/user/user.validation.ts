import { z } from "zod";

const userValidationSchema = z.object({
    password: z.string(
        {
            invalid_type_error:'Password must be string'
        }
    ).max(20, { message: 'Password Can Not Be more than 20 carector' }).optional(),    
})

export const userValidation = {
    userValidationSchema,
}