// let and const

// let x = 10
// console.log(x)
// x = 500
// console.log(x)


// const u = 1000
// console.log(u)
// u = 8000


// Arithmetic operator

// + , - , * , / , %

let a = 1000
let b = 500

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)


let s = 10
let t = 5

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

console.log(22%7)
// 10 pair ===> 50 lines
function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,4)
Calculator(20,10)

// function without parameter and without return type

function addition(){
    console.log(9+2)
}
addition()
addition()
addition()
addition()


// function with parameter and without return type

function additionB(x,y){
    console.log(x+y)
}
additionB(12,4)
additionB(120,40)
additionB(1200,400)

// function with parameter and with return type 

function additionC(x,y){
    return x + y
}
let q4 = additionC(12,14)
console.log(q4)
console.log(q4 - 4)
console.log(q4 + q4)
console.log(q4 * 0.10)


// Types

let x = 10 
console.log(x)
console.log(typeof x) // number //  34,-90,0,45.7,-78.88

let y = true
console.log(y)
console.log(typeof y) // boolean

let z = 'chinmay'
console.log(z)
console.log(typeof z)


// comparison

// < , > , <= , >= , != , == ,!== , ==
// entity < entity ====> boolean (true or false)

console.log(typeof 10) // number
console.log(typeof '10') // string
console.log(12 > 3) // True
console.log(12 < 30) // True
console.log(12 == 12) // True
console.log(12 != 12) // False
console.log(12 >= 13) // False
console.log(12 <= 30)  // True
console.log(12 <= 12) //True
console.log(120 >= 120) // True

// == , !=  ========> value 
// === , !==  ======> value and type 

console.log(10 == '10')
console.log(10 === '10')


console.log(2===2)
console.log(2 ==='2')
console.log(2 !=='2')
console.log(2 == '2')

console.log(4 === '4')
console.log(4 === 4)

























