import type { calcFunction } from "../definitions/calc.d.ts"
import { control } from "./control.ts"

export const division:calcFunction = function (a,b) {
    const msg = control(arguments)
    return (msg !== true) ? msg :
    b != 0 ? Number(a) / Number(b) : 
    { message: 'no se puede dividir entre 0' }
}