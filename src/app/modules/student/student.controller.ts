import { Request, Response } from "express";
import { StudentServieces } from "./student.service";

const createStudent = async(req: Request, res: Response) => {
    try {
        const student = req.body;
        const result = await StudentServieces.createStudentIntoDB(student);
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