import { Request, Response } from "express";
import { StudentServieces } from "./student.service";

const createStudent = async(req: Request, res: Response) => {
    try {
        const {student:studentData} = req.body;
        const result = await StudentServieces.createStudentIntoDB(studentData);
        res.status(200).json({
            success: true,
            message: "Student Is Created Successfully",
            data: result,
        })
    } catch (err) {
        console.log(err);
    }
    
}
export const StudentControllers = {
    createStudent,
}