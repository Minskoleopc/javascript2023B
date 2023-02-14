let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:33,
    city:"pune"
}
let amol = {
    firstName:"amol",
    lastName:"deshpande",
    age:32,
    city:"banglore"
}

// 500 ------ 2000 lines . DRY

// program 

class Person  {
    firstName = undefined
    lastName = undefined
    rollNo = undefined
    age = undefined
}

let amolb = new Person()
let sarikb = new Person()
console.log(sarikb)
console.log(amolb)

amolb.firstName = "amol"
amolb.lastName = "rao"
amolb.age = 33
amolb.rollNo = 88

console.log(amolb)

class PersonB {
    constructor(fn,ln,ag,rollNo){
        this.firstName  = fn
        this.lastName = ln 
        this.ag = ag
        this.rollNo = rollNo
    }
}
let abhisha = new PersonB("abhisha","dani",32,77)
let chinmaya = new PersonB("chinmaya","deshpande",33,7)
console.log(abhisha)
console.log(chinmay)
abhisha.firstName = "abhisha"