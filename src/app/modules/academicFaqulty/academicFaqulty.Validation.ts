import { z } from 'zod';

const academicFaultyValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Acdemic must be string',
    })
});

export const UserValidation = {
  academicFaultyValidationSchema,
};
