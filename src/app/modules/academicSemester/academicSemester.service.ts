import { TAcademicSemester } from "./academicSemester";
import { academicSemester } from "./academicSemesterModel";

const createAcademicSemesterIntoDB = async (payload:TAcademicSemester) => {   
    const result = await academicSemester.create(payload);
    return result;
}
export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
}