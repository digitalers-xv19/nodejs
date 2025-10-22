import type { calcFunction } from "../definitions/calc.d.ts"
import { control } from "./control.ts"

export const suma:calcFunction = function (a,b) {
    const msg = control(arguments)
    return (msg !== true) ? msg : Number(a) + Number(b)
}