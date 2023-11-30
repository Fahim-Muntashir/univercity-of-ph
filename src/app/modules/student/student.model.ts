import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';
import validator from 'validator';


const userNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        maxlength: [20, 'First Name can not be more than 20 carectors'],
        validate: {
            validator:function (value:string) {
                const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
                return firstNameStr === value;
            },
            message: '{VALUE} is not is capitalize format',
        }
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        validate: {
            validator: (value:string) => 
                validator.isAlpha(value),     
                    message: '{VALUE} is not valid'
            
        }
    }
},);

const guardianSchema = new Schema<Guardian>({
    fatherName: {
        type: String,
        required: [true, "Father's name is required"],
    },
    fatherOccupacation: {
        type: String,
        required: [true, "Father's occupation is required"],
    },
    fatherContactNo: {
        type: String,
        required: [true, "Father's contact number is required"],
    },
    motherName: {
        type: String,
        required: [true, "Mother's name is required"],
    },
    motherOccupacation: {
        type: String,
        required: [true, "Mother's occupation is required"],
    },
    motherContactNo: {
        type: String,
        required: [true, "Mother's contact number is required"],
    }
},);

const localGuardianSchema = new Schema<LocalGuardian>({
    name: {
        type: String,
        required: [true, "Local guardian's name is required"],
    },
    occupacaiton: {
        type: String,
        required: [true, "Local guardian's occupation is required"],
    },
    contactNo: {
        type: String,
        required: [true, "Local guardian's contact number is required"],
    },
    address: {
        type: String,
        required: [true, "Local guardian's address is required"],
    },
});



const studentSchema = new Schema<Student>({
    id: { type: String, required: [true, "Student ID is required"], unique: true },
    name: {
        type: userNameSchema,
        required: [true, "Student name is required"],
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "{VALUE} is not valid, must be one of 'male', 'female', 'other'"
        },
        required: [true, "Gender is required"]
    },
    dateOfBirth: {
        type: String,
        required: [true, "Date of birth is required"],
    },
    email: {
        type:String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: (value:string) => 
                validator.isEmail(value),     
                    message: '{VALUE} is not valid'
            
        }
    },
    contactNo: {
        type: String,
        required: [true, "Contact number is required"],
    },
    emergencyContactNo: {
        type: String,
        required: [true, "Emergency contact number is required"],
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "B-", "B+", "AB+"],
        required: [true, "Blood group is required"],
    },
    presentAddress: {
        type: String,
        required: [true, "Present address is required"],
    },
    parmanentAdress: {
        type: String,
        required: [true, "Permanent address is required"],
    },
    guardian: {
        type: guardianSchema,
        required: [true, "Guardian information is required"],
    },
    localGuardian: {
        type: localGuardianSchema,
        required: [true, "Local guardian information is required"],
    },
    profileImg: {
        type: String,
    },
    isActive: {
        type: String,
        enum: ['active', 'blocked'],
        default: 'active',
    },
});

export const StudentModel = model<Student>('Student', studentSchema);
