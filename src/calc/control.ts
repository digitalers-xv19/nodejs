export const control = (args:any) => {
    if (args.length === 0)
        return 0
    if (args.length !== 2)
        return { message: 'deben pasarse 2 parametros'}
    return Array.from(args).every(n => 
    typeof n !== 'object' && !isNaN(Number(n))) ?
    true : { message: 'solo se permiten valores numericos' }
}