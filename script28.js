//             0         1      2        3       4
let names = ["chinmay", "ram", "saket", "sanjay", "sumit"]
// console.log(names)
// let a1 = names[0]
// let a2 = names[1]
// let a3 = names[2]
// let a4 = names[3]
// let a5 = names[4]
// console.log(a5)
// Destructure

let [x1,x2,x3,x4,x5] = names

console.log(x1)
console.log(x2)
console.log(x3)
// console.log(x4)
// console.log(x5)

//              0         1        2       3
let fruits  = ["apple","mango","banana","grapes"]
console.log(fruits[0])
let [a11,a12,a13,a14] = fruits

console.log(a11)
console.log(a12)
console.log(a13)
console.log(a14)



// program2 
//                   0                     1
//               0         1         0          1
let states = [["nagpur","wardha"],["jaipur","udaipur"]]
let [[s1a,s1b],[s2a,s2b]] = states
console.log(s1a)
console.log(s2b)

//               0        1
//              0   1    0  1
let numbers = [[11,22],[33,44]]
let [[d1,d2],[d3,d4]] = numbers
// console.log(a)
// console.log(b)
console.log(d4)
console.log(d2)

// program 3

let obj = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34
}

// let q1 = obj.firstName
// let q2 = obj.lastName
// let q3 = obj.age 

// console.log(q1)
// console.log(q2)
// console.log(q3)

let {firstName,lastName,age} = obj
console.log(firstName)
console.log(lastName)
console.log(age)


let vehicle = {
    color:"red",
    type:"sedane"

}

let {color:cl,type:ty} = vehicle
console.log(cl)
console.log(ty)

// program 4

let student = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    } 
}
let {fullName:fn,parent:{mother,father}} = student
console.log(fn)
console.log(father)
console.log(mother)

let animal = {
    color:"red",
    body:{
        legs:4,
        hands:2
    }
}

let {color:cll,body:{legs:lg,hands:hs}} = animal
console.log(cll)
console.log(hs)
console.log(lg)

// program 5
let info = {
    fullName:"chinmay deshpande",
    skills:["python","java"]
}

let {fullName:fnn,skills:[ss1,ss2]} = info
console.log(fnn)
console.log(ss1)
console.log(ss2)

let students = [
    {
        fullName:"ram dani",
        skills:"python"    
    },

    {
        fullName:"ravi deshpande",
        skills:"java"    
    },
]

let [{fullName:e1,skills:e2},{fullName:e3,skills:e4}] = students
console.log(e1)
console.log(e4)