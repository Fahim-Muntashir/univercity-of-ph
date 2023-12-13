import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password:string,studentData: TStudent) => {


    // if(password is not given use default password)

    // set student role 
    const userData:Partial<TUser> = {}
    userData.password = password || (config.default_password as string);

    userData.role = 'student';
    // create a user

    // manually genareated id 
    userData.id = "20302010001";
    


    // create a user
    const newUser = await User.create(userData);

// create a student
    if (Object.keys(newUser).length) {
        // set id ,_id as user

        studentData.id = newUser.id;
        studentData.user = newUser._id; //reference_id
    
    
        const newStudent = await Student.create(studentData)
        return newStudent
    }
  };
  

export const UserService = {
      createStudentIntoDB,
  }