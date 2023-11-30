import { Request, Response } from "express";
import { StudentServieces } from "./student.service";
import Joi from 'joi'


const createStudent = async(req: Request, res: Response) => {
   
    try {
   
        // createing a schema validation using joy
        const JoiValidationSchema = Joi.object({
            id: Joi.string(),
            name: {
                firstName: Joi.string().max(20).required(),
                middleName: Joi.string().max(20),
                lastName: Joi.string().max(20)
            },
            gender:Joi.string().required().valid(['male','female','other']))

        })
   
        const { student: studentData } = req.body;
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

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServieces.getAllStudentFromDB();
        res.status(200).json({
            success: true,
            message: "Student Is get Successfully",
            data: result,
        })
    } catch (err) {
        res.status(500).json({
            success: true,
            message: "somethis Wrong",
            error:err,
        })
    }
}

const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServieces.getSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: "Student Is get Successfully",
            data: result,
        })
    } catch (err) {
        console.log(err);
    }
}



export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent
}