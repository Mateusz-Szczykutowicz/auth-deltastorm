import { exportFunction } from "./general.interface";

export interface userI {
    id: string;
    secureID: string;
    email: string;
    password: string;
    admin: boolean;
    createdAt: Date;
}

export interface userControllerI {
    login: exportFunction;
}
