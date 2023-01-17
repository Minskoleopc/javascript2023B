// variables 
// let and const


let balance = 0
console.log(balance)
balance = 1000
console.log(balance)


const pi = 3.14
console.log(pi)
//pi = 89

// Arithmetic operation

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(22 % 5)

let k = 90
let l = 45

console.log(k+l)
console.log(k-l)
console.log(k*l)
console.log(k/l)
console.log(k%l)

// 10  pair -- 50 lines (DRY)


// functions 

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(10,5)
Calculator(9,3)

// program 1
// function without parameter and without return type 

function sum(){
    console.log(8+7)
}

sum()
sum()
sum()
sum()

// program 2
// function with parameter and without return 

function suma(x,y){
    console.log(x+y)
}
suma(12,3)
suma(12,6)
suma(120,60)

// program 3
// function with parameter and return type 
// 100 Given   --->  100 + 100 , 100 - 50 , 100 * 0.10
// 100 Show    ---> print(100)

function sumb(x,y){
    return x + y
}
let w = sumb(1,3)
console.log(w)
console.log(w + w)
console.log(w - 2)
console.log(w * 0.10)