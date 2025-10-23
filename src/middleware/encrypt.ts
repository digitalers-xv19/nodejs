import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt"

export const encrypt = (req:Request, res:Response, next:NextFunction) => {
    const { password } = req.body
    const hash = bcrypt.hashSync(password, 10);
    req.body.password = hash;
    return next();
};
export const decrypt = (req:Request, res:Response) => {
    const { body: { password, account: {_id, password:hash} }} = req 
    const success = bcrypt.compareSync(password, hash);
    return res.json({
        message: success ? 
        'inicio de sesion exitoso' : 
        'no se pudieron validar las credenciales'
    })
}