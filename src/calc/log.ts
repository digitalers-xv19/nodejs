import type { calcFunction } from "../definitions/calc.d.ts"
import { control } from "./control.ts"

export const logaritmo:calcFunction = function (a,b) {
    const msg = control(arguments)
    return (msg !== true) ? msg : 
    Math.log(Number(a)) / Math.log(Number(b))
}