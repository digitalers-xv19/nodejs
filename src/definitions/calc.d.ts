export type int = number|string
export interface Error { message: string; }
export type calcFunction = (a:int, b:int) => number|Error
