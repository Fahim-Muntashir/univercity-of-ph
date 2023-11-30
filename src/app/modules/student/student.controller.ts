import { Request, Response } from "express";
import { StudentServieces } from "./student.service";
import Joi from 'joi'


const createStudent = async(req: Request, res: Response) => {
   
    try {
   
        // createing a schema validation using joy
        const JoiValidationSchema = Joi.object({
            const userNameSchema = Joi.object({
                firstName: Joi.string().required().trim().max(20)
                    .regex(/^[A-Z][a-z]*$/)
                    .message('First name should start with a capital letter and contain only letters'),
                middleName: Joi.string(),
                lastName: Joi.string().required()
                    .regex(/^[A-Za-z]+$/)
                    .message('Last name should contain only letters'),
            });
            
            const guardianSchema = Joi.object({
                fatherName: Joi.string().required(),
                fatherOccupation: Joi.string().required(),
                fatherContactNo: Joi.string().required(),
                motherName: Joi.string().required(),
                motherOccupation: Joi.string().required(),
                motherContactNo: Joi.string().required(),
            });
            
            const localGuardianSchema = Joi.object({
                name: Joi.string().required(),
                occupation: Joi.string().required(),
                contactNo: Joi.string().required(),
                address: Joi.string().required(),
            });
            
            // Define Joi schema for the main document
            const studentSchema = Joi.object({
                id: Joi.string().required(),
                name: userNameSchema.required(),
                gender: Joi.string().valid('male', 'female', 'other').required(),
                dateOfBirth: Joi.string().required(),
                email: Joi.string().email().required(),
                contactNo: Joi.string().required(),
                emergencyContactNo: Joi.string().required(),
                bloodGroup: Joi.string().valid('A+', 'B-', 'B+', 'AB+').required(),
                presentAddress: Joi.string().required(),
                parmanentAdress: Joi.string().required(),
                guardian: guardianSchema.required(),
                localGuardian: localGuardianSchema.required(),
                profileImg: Joi.string(),
                isActive: Joi.string().valid('active', 'blocked').default('active'),
            })
        })
        
        const { student: studentData } = req.body;
        const {error,value} =  studentSchema.validate(studentData);
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