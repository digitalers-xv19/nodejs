import type { calcFunction } from "../definitions/calc.d.ts"

export const producto:calcFunction = function (a,b) {
    if (arguments.length === 0)
        return 0
    if (arguments.length !== 2)
        return { message: 'deben pasarse 2 parametros'}
    return Array.from(arguments).every(n => 
        typeof n !== 'object' && !isNaN(Number(n))) ? 
        Number(a) * Number(b) : 
        { message: 'solo se permiten valores numericos' }
}