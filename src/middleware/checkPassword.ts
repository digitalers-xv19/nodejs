import type { NextFunction, Request, Response } from "express";

export const checkPwd = (req:Request, res:Response, next:NextFunction) => {
    const [p1, p2] = req.body.password
    if (p1 === p2) {
        console.log(req.body)
        req.body.password = p1;
        return next()
    }
    return res.json({ message: "las contraseñas no coinciden" })
}