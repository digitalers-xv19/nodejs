import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt"

export const encrypt = (req:Request, res:Response, next:NextFunction) => {
    const { password } = req.body
    const hash = bcrypt.hashSync(password, 10);
    req.body.password = hash;
    return next();
};
export const decrypt = (req:Request, res:{password:string, json: (data:object) => void}, next:NextFunction) => {
    const [{body: {password}},{password:hash }] = [req, res]
    const success = bcrypt.compareSync(password, hash);
    if (success) return next();
    return res.json({message: 'no se pudieron validar las credenciales'})
}