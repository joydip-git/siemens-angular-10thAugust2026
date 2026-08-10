var numValue = 10
var strValue = 'siemens'
var isManager = false

console.log(numValue, typeof numValue);
console.log(strValue, typeof strValue);
console.log(isManager, typeof isManager);

var a
console.log(a, typeof a);

var b = a + 10
console.log(b, typeof b);


var ref = null
console.log(ref, typeof ref);

var obj = {
    id: 1,
    name: 'anil',
    salary: 1000,
    print: function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}

obj['location'] = 'Bengaluru'
obj.sayHi = function () {
    return `Hi ${this.name}`
}
console.log(obj);
console.log(obj.name);
console.log(obj['salary']);
console.log(obj.print());
console.log(obj.sayHi());


for (var propName in obj) {
    console.log(`${propName}:${obj[propName]}`);
}

function person(idValue, nameValue, salaryValue) {
    this.id = idValue
    this.name = nameValue
    this.salary = salaryValue
    this.print = function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
    return this
}

var sunilObjRef = new person(2, 'sunil', 2000)
var joyObjRef = new person(3, 'joydip', 3000)

console.log(global);


function divide(x, y) {
    var res = x / y

    if (res == Infinity)
        throw new Error('divisor should not be zero');
    else
        return res
}
console.log(divide(12, 0))

