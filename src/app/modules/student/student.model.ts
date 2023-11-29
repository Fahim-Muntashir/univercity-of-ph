import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required:true,
    }
},)

const guardianSchema = new Schema<Guardian>({
    fatherName: {
        type: String,
        required:true,
    },
    fatherOccupacation:{
        type: String,
        required:true,
    },
    fatherContactNo: {
        type: String,
        required:true,
    },
    motherName:{
        type: String,
        required:true,
    },
    motherOccupacation:{
        type: String,
        required:true,
    },
    motherContactNo:{
        type: String,
        required:true,
    }
},)

const localGuardianSchema = new Schema<LocalGuardian>({
    
        name: {
            type: String,
            required: true,
        },
        occupacaiton: {
            type: String,
            required: true,
        },
        contactNo: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        
    
})


const studentSchema = new Schema<Student>({
    id: { type: String, required: true },
    name: userNameSchema,
    gender: ["male", "female"],
    dateOfBirth: {String},
    email: {
        type: String, required: true
    },
    contactNo: {
        type: String,
        required:true,
    },
    emergencyContactNo:{
    type: String,
        required:true,
    },
    bloodGroup: 
       ["A +" , "B-" , "B+" , "AB+"
        ]
    ,
    presentAddress:{
    type: String,
    required:true,
    },
    parmanentAdress:{
    type: String,
    required:true,
    },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: { type: String },
    isActive:['active','blocked'],    

})

const Student = model<Student>('Student', studentSchema);
