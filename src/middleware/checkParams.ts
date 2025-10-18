import type { Req, Res } from '../definitions/request.d.ts';

export const checkParams = (req:Req, res:Res, next:() => {}) => {
    if (req.body?.a && req.body?.b) return next();
    const a = req.params?.a || req.query?.a || 0;
    const b = req.params?.b || req.query?.b || 0;

    req.body = { ...req.body, a, b };
    return next()
}