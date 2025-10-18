import type { Request, Response } from "express";
import { calcOp } from "../models/calc.model.ts";

export const calcController = (req:Request, res:Response) => {
    const {
        params: {operation}, 
        body: {a, b} 
    } = req;
    const op = calcOp[operation as keyof typeof calcOp]
    return res.json(op ? 
        { resultado: op(a,b) } : 
        { message: 'operacion no valida' }
)}