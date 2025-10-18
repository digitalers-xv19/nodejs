import type { calcFunction } from "../definitions/calc.d.ts"

export const division:calcFunction = function (a,b) {
    if (arguments.length === 0)
        return 0
    if (arguments.length !== 2)
        return { message: 'deben pasarse 2 parametros'}
    return Array.from(arguments).every(n => 
        typeof n !== 'object' && !isNaN(Number(n))) ? 
        b != 0 ? Number(a) / Number(b) : 
        { message: 'no se puede dividir entre 0' } :
        { message: 'solo se permiten valores numericos' }
}