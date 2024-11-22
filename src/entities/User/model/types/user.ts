export interface User {
    id: number;
    name: string;
    email: string;
    about: string;
    languages: string[];
    photo: string;
    userToken?: string;
}

export interface UserSchema {
    authData?: User;
}