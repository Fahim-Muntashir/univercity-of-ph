import { z } from "zod";

const userValidationSchema = z.object({
    id: z.string(),
    password: z.string().max(20, { message: 'Password Can Not Be more than 20 carector' }),
    needsPasswordChange: z.boolean().optional().default(true),
    role: z.enum(['student', 'faculty', 'admin']),
    status: z.enum(['in-progress', 'blocked']).default('in-progress'),
    idDeleted: z.boolean().optional().default(false),
    
})

export const userValidation = {
    userValidationSchema,
}