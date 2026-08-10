class Person {
    id
    name
    salary
    constructor(idValue, nameValue, salaryValue) {
        this.id = idValue
        this.name = nameValue
        this.salary = salaryValue
    }
    print() {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}
class Trainer extends Person {
    subject
    constructor(idValue, nameValue, salaryValue, subjectValue) {
        super(idValue, nameValue, salaryValue)
        this.subject = subjectValue
    }
    print() {
        return `${super.print()}, ${this.subject}`
    }
}


var anilObjRef = new Trainer(1, 'anil', 1000, 'JS')
console.log(anilObjRef.print());