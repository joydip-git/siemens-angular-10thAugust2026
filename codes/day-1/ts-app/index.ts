var nameValue = 'siemens'
//nameValue = 10
console.log(nameValue);

function add(a: number, b: number) {
    return a + b
}

console.log(add(10, 20))

class Person {
    // private readonly _id: number;
    // private _name: string
    // private _salary: number;

    // constructor(_id: number, _name: string, _salary: number) {
    //     this._id = _id
    //     this._name = _name
    //     this._salary = _salary
    // }

    constructor(private readonly _id: number, private _name: string, private _salary: number) { }

    get id(): number {
        return this._id
    }
    get name(): string {
        return this._name
    }
    set name(name: string) {
        this._name = name
    }
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }

    print() {
        return `${this._id}, ${this._name}, ${this._salary}`
    }
}
class Trainer extends Person {
    //private _subject: string;
    constructor(_id: number, _name: string, _salary: number, private _subject: string) {
        super(_id, _name, _salary)
    }
    print(): string {
        return `${super.print()}, ${this._subject}`
    }
}

var numbers = [1, 2, 3, 4]//new Array(1,2,3,4)
numbers
    .filter(
        (n) => n % 2 === 0
    )
    .forEach(
        (n) => console.log(n)
    )

interface Operations<T, TResult> {
    add(a: T, b: T): TResult;
}
class Impl implements Operations<number, number> {
    add(a: number, b: number): number {
        return a + b
    }
}
interface Category {
    id: number;
    name: string;
    description?: string;
}
var mobile: Category = {
    name: 'mobile',
    id: 1,
    description: 'mobile category'
}

var categories: Category[] = [
    {
        name: 'mobile',
        id: 1,
        description: 'mobile category'
    },
    {
        name: 'laptop',
        id: 2,
        description: 'laptop category'
    }
]