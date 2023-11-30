import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: [true," first name required"],
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true," last name required"],
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
    id: { type: String, required: true ,unique:true},
    name: {
        type:userNameSchema,
        required:true,
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "{VALUE} is not valid of the following 'male','female','other'"
        },
        required: true
    },
    dateOfBirth: {String},
    email: {
        type: String, required: true,
        unique:true
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
    {   type:String,
        enum:["A+", "B-", "B+", "AB+"
        ],
        required: true,
    }
    ,
    presentAddress:{
    type: String,
    required:true,
    },
    parmanentAdress:{
    type: String,
    required:true,
    },
    guardian: {
        type: guardianSchema,
        required:true,
    },
    localGuardian: {
        type: localGuardianSchema,
        required:true,
    },
    profileImg: { type: String },
    isActive: {
    type:String,
    enum: ['active', 'blocked'],
    default:'active',
    },    

})

export const StudentModel = model<Student>('Student', studentSchema);
