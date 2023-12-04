import { TAcademicFaculty } from "./academicFaqulty.interface";

const createAcademicFaqultyIntoDB = async (payload: TAcademicFaculty) => {
  

  const result = await AcademicFaqulty.create(payload);
  return result;
};

const getAllAcademicFaqultysFromDB = async () => {
  const result = await AcademicFaqulty.find();
  return result;
};

const getSingleAcademicFaqulty\FromDB = async (id: string) => {
  const result = await AcademicFaqulty\.findById(id);
  return result;
};

const updateAcademicFaqulty\IntoDB = async (
  id: string,
  payload: Partial<TAcademicFaqulty\>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await TAcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB: createAcademicFaqultyIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
