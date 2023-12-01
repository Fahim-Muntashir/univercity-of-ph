export type TUser = {
    id: string;
    password: string;
    needsPasswordChange: boolean;
    role: 'admin' | 'student' | 'admin';
    status: 'in-progress' | 'blocked';
    isDeleted: boolean,

}