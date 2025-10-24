import type { NextFunction, Request, Response } from "express";
import { app } from "../models/app.config.ts";

export const checkPwd = (req:Request, res:Response, next:NextFunction) => {
    const [p1, p2] = req.body.password
    if (p1 === p2) {
        req.body.password = p1;
        return next()
    }
    return res.render('signup',{ app, response: {
        status:true, 
        message: "las contraseñas no coinciden" 
    }})
}