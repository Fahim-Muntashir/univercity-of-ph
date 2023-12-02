import { TAcademicSemester } from "./academicSemester";
import { AcademicSemester } from "./academicSemesterModel";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {   

    // semester name ==> semester code

    type TAcademicSemesterNameCodeMapper = {
        [key: string]: string;
    }

    const academicSemesterNameCodeMapper:TAcademicSemesterNameCodeMapper = {
        Autumn: "01",
        Summer: "02",
        Fall: "03",
    }

    if (academicSemesterNameCodeMapper[payload.name] !==payload.code){
        throw new Error('Invalid semester code!!')
}
        const result = await AcademicSemester.
            create(payload);
    return result;
}
export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
}