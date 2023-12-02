import express from 'express';
import { AcademicSemesterUserControllers } from './academicSemester.controller';

const router = express.Router();


router.post('/create-academic-semester',AcademicSemesterUserControllers.createAcademicSemester)

// router.get('/:studentId', StudentControllers.getSingleStudent);

// router.delete('/:studentId', StudentControllers.deleteStudent);

// router.get('/', StudentControllers.getAllStudents);

export const AcademicSemesterRoutes = router;
