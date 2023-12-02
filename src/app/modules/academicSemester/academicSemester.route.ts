import express from 'express';
import { AcademicSemesterUserControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validaterequest';
import { AcademicSemestervalidations } from './academicSemester.validation';

const router = express.Router();


router.post('/create-academic-semester',
    validateRequest(AcademicSemestervalidations.createAcademicSemesterValidationSchema),
    AcademicSemesterUserControllers.createAcademicSemester)

// router.get('/:studentId', StudentControllers.getSingleStudent);

// router.delete('/:studentId', StudentControllers.deleteStudent);

// router.get('/', StudentControllers.getAllStudents);

export const AcademicSemesterRoutes = router;
