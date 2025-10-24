import type { NextFunction, Request, Response } from "express";
import { userModel } from "../models/user.model.ts";
import { app } from "../models/app.config.ts";

export const addUser = async(req:Request, res:Response) => {
    try{
        const newUser = new userModel(req.body);
        const data = await newUser.save();
        const response = { message: 'usuario creado exitosamente' };
        res.render('signup', { app, response });
    } catch(error){
        return res.render('signup',{ app, response: {
            status: true,
            message: 'no se ha podido registrar la cuenta',
        }, error });
    }
}
export const getUser = async(req:Request, res:Response, next:NextFunction) => {
    try{
        const { username } = req.body;
        const results = await userModel.find({username}).limit(1);
        if (results?.length){ 
            req.body.account = results[0];
            return next()
        }
        else res.render('login', { app, response: {
                status: true,
                message: 'no se encontro la cuenta de usuario'
            }
        });
    } catch(error){
        return res.render('login', { app, response: {
            status: true,
            message: 'no se pudo realizar la accion, ha ocurrido un error'
        }, error});
    }
}