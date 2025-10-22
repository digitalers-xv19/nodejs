import { suma, resta, producto, division, logaritmo } from "../calc/index.ts"

export const calcOp = {
    suma, adicion: suma,
    resta, sustraccion: resta,
    producto, multiplicacion: producto,
    division, fraccion: division,
    logaritmo, log: logaritmo,
}