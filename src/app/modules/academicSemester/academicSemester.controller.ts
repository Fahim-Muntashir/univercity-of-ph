import httpStatus from 'http-status';

import {  RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';




const createAcademicSemester: RequestHandler = catchAsync(async (
  req,
  res,
) => {
  

    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)
   
   
        sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic creator is created succesfully',
      data: result,
    });
 
})

export const AcademicSemesterUserControllers = {
 createAcademicSemester,
};