import { Request, Response } from "express";

interface ResponseI {
    message: string;
    status: 200;
    data?: any;
}

export type exportFunction = (req: Request, res: Response<ResponseI>) => void;
