export interface User {
    id: number;
    firstName: string;
    lastName: string
    email: string;
    about: string;
    languages: string[];
    role: string;
    photo?: string;
    userToken?: string;
}

export interface UserSchema {
    authData?: User;
}