import type { Request, Response } from "express";
import { userModel } from "../models/user.model.ts";

export const addUser = async(req:Request, res:Response) => {
    try{
        const newUser = new userModel(req.body);
        const data = await newUser.save();
        const response = { message: data ? 'usuario creado exitosamente' : 'no se ha podido crear la cuenta' };
        return res.json(response);
    } catch(err){
        return res.json(err);
    }
}
export const getUser = async(req:Request, res:Response) => {
    try{
        const { username, password } = req.body;
        const results = await userModel.find({username, password});
        const response = results.length ? results : { message:"no se encontraron usuarios" };
        return res.json(response);
    } catch(err){
        return res.json(err);
    }
}