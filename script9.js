let a = 10
console.log(a)
a = 800
console.log(a)

const jkl = 900
console.log(jkl)
//jkl = 90000
console.log(jkl)

// arithmetic operation 

let s = 10
let t = 5

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

let s1 = 90
let s2 = 45

console.log(s1+s2)
console.log(s1-s2)
console.log(s1*s2)
console.log(s1/s2)
console.log(s1%s2)


// functions 


function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}

Calculator(123,4)
Calculator(12,4)


// functions 


// function without parameter and without return type 

function Addition(){
    console.log(1+2)
}
Addition()
Addition()
Addition()



// function with parameter and without return type 

function AdditionB(x,y){
    console.log(x+y)
}
AdditionB(12,4)
AdditionB(120,40)

// function with parameter and with return parameter

function AdditionC(x,y){
    return x+ y
}
AdditionC(12,4)
let q1 = AdditionC(120,40)
console.log(q1)
console.log(q1 + q1)
console.log(q1 * 0.30)


// comparision operator

// < , > , <= ,>= , != , == ,=== ,!==

// === , !== --- value and type 
// == , != -- value

let x1 = 100
console.log(x1)
console.log(typeof x1)

let x3 = true
console.log(x3)
console.log(typeof x3) 

let x2 = "chinmay"
console.log(typeof x2)
console.log(x2)

console.log(typeof 10)
console.log(typeof '10')

console.log(2 == '2') // true
console.log(2 >= 2) // true
console.log(2 === 2) // true
console.log(2 !== '2') // true
console.log(2 === '2') // false
console.log(4 > 7) // false
console.log(6 <= 66) // true
console.log(7 <= 7) // true
console.log(8 === 8) //true
console.log(9 >= 7) // true
console.log(1<7) // true

// logical operator 


// AND && --

// True       True  ---- True
// False      True  ----- False
// True       False ----- False 
// False      False ----- False  

console.log(99 == 99 && 90 > 45)
console.log(99 != 99 && 90 > 45)
console.log(99 == 99 && 90 == 45)
console.log(99 != 99 && 90 == 45)

// OR ||
// True       True  ---- True
// False      True  ----- True
// True       False ----- True 
// False      False ----- False 

console.log(99 == 99 || 90 > 45)
console.log(99 != 99 || 90 > 45)
console.log(99 == 99 || 90 == 45)
console.log(99 != 99 || 90 == 45)

// NOT 
// True --- False 
// False --- True

console.log(!(9 == 9))
console.log(!(9 != 9))


// conditional 

// input and multiple outcomes

let numT = 11

// if(numT > 0 && numT <= 5){
//     console.log('10 percent')
// }

// if(numT > 5 && numT <= 10){
//     console.log('20 percent')
// }

// if(numT > 10 ){
//     console.log('30 percent')
// }


// if(numT > 0 && numT <= 5){
//     console.log('10 percent')
// }

// else if(numT > 5 && numT <= 10){
//     console.log('20 percent')
// }

// else if(numT > 10 ){
//     console.log('30 percent')
// }


let marks = 92

if(marks > 90){
    console.log('Grade A')
}
if(marks > 75){
    console.log('Grade B')
}
if(marks > 60){
    console.log('Grade C')
}

if(marks > 90){
    console.log('Grade A')
}
else if(marks > 75){
    console.log('Grade B')
}
else if(marks > 60){
    console.log('Grade C')
}
else {
    console.log("Fail")
}

let a1 = 10
let a2  = 5

if(a1 > a2 ){
    console.log('a1 is greater')
}
else {
    console.log('a2 is greater')
}
a1 > a2 ? console.log('a1 is greater'):console.log('a2 is greater')
