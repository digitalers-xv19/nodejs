import type { Request, Response } from "express";
import { readFileSync } from "node:fs"

export const staticPage = (req:Request, res:Response) => {
    const data = readFileSync(process.cwd() + '/public/index.html');
    return res.end(data);
}