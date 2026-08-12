export interface ServiceContract<T, TResult> {
    add(a: T, b: T): TResult;
    subtract(a: T, b: T): TResult;
    multiply(a: T, b: T): TResult;
    divide(a: T, b: T): TResult;
}
export class CalculationService implements ServiceContract<number, number> {
    constructor() {
        console.log('service created');
    }
    add(a: number, b: number): number {
        return a + b
    }
    subtract(a: number, b: number): number {
        return a - b
    }
    multiply(a: number, b: number): number {
        return a * b
    }
    divide(a: number, b: number): number {
        return a / b
    }
}