import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaqulty.interface';
const academicFaqultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
        }
    },
  {
    timestamps: true,
  },
)


export const AcademicFaqulty = model<TAcademicFaculty>('AcademicFaqulty', academicFaqultySchema);
