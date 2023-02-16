let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    skills:["python","java","javascript","html"]
}
console.log(amol)
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:24,
    skills:["sql","java","javascript","html"]
}
console.log(chinmay)


class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

// let names = ["chi","nmay"]
// let names2 = new Array(["chi","nmay"])
// let city = "pune"
// let city2 = new String("pune2")


let amolb = new Person()
//console.log(amolb)
amolb.firstName = "amol"
amolb.lastName = "rao"
amolb.age = 34
amolb.rollNo = 555
console.log(amolb)

let sarika = new Person()
console.log(sarika)
sarika.firstName = "sarika"
sarika.lastName =  "pansare"
sarika.age = 23
sarika.rollNo = 44
console.log(sarika)


class PersonB {
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rollNo
    }

}


let sarthak = new PersonB("sarthak","patil",23,44)
let chinmay2 = new PersonB("chinmay2","deshpande2",25,43)
console.log(sarthak)
console.log(chinmay2)
chinmay2.city = "pune"
console.log(chinmay2)
console.log(sarthak)


// program 3
class PersonC {

    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(age){
        this.age = age
    }
    setRollNo(rn){
        this.rollNo = rn
    }

}

let raj = new PersonC()
console.log(raj)
raj.setFirstName("raj M")
raj.setLastName("raj M")
raj.setAge(33)
raj.setRollNo(44)
console.log(raj)