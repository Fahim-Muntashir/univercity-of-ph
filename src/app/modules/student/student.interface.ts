export type Guardian = {
    fatherName: string;
    fatherOccupacation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupacation: string;
    motherContactNo: string;
}

export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;

}

export type LocalGuardian = {
    name: string;
    occupacaiton: string;
    contactNo: string;
    address: string;
}

export type Student = {
    id: string;
    name: UserName,
    gender: "male" | "female";
    dateOfBirth: string;
    email: string;
    avatar?: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: "A +" | "B-" | "B+" | "AB+";
    presendAddress: string;
    parmanentAdress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian;
    profileImg?: string;
    isActive: 'active' | 'inactive';
}