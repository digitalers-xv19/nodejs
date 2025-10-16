interface Error { message: string; }
function sum(a:number,b:number):number|Error{
    const [A, B] = [Number(a), Number(b)]
    if (arguments.length === 0) 
        return 0
    if (arguments.length !== 2) 
        return { message: 'deben pasarse 2 parametros'}
    if (typeof a === 'object' || typeof b === 'object') 
        return { message: 'solo se permiten valores numericos'}
    if(isNaN(A) || isNaN(B)) 
        return { message: 'solo se permiten valores numericos'}
    return A + B
}
export { sum }