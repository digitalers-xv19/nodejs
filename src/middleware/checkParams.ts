import type { NextFunction, Request, Response } from 'express';

export const checkParams = (req:Request, res:Response, next:NextFunction) => {
    if (req.body?.a && req.body?.b) return next();
    const a = req.params?.a || req.query?.a || 0;
    const b = req.params?.b || req.query?.b || 0;

    req.body = { ...req.body, a, b };
    return next()
}