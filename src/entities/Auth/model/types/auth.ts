import {User} from "../../../User";

export interface Auth {
    loading: boolean;
    userInfo: User | null; // for user object
    userToken: string | null; // for storing the JWT
    error: string | null;
    success: boolean;
}