//              0           1       2        3      4
let names = ["chinmay", "shirish", "ravi", "rakesh", "sham"]

// property 
// Type --- Object
// Properties and Methods 
// Method --- action and return type 

console.log(names.length)

// push()
//["chinmay","shirish","ravi","rakesh","sham"]
let q1 = names.push("sarika")
console.log(q1)
console.log(names)
//unshift()
let q2 = names.unshift("ram")
console.log(q2)
console.log(names)
//pop()
let q3 = names.pop()
console.log(q3)
console.log(names)

//shift()
let q4 = names.shift()
console.log(q4)
console.log(names)

// includes()
let q5 = names.includes('Chinmay')
console.log(q5)
// join()
console.log(names.join('-'))
console.log(names.join('@'))
console.log(names.join(' '))

// indexOf()
//       0   1  2  
let n = [22, 33, 44, 55, 66, 77, 88, 99, 00]
let q11 = n.indexOf(44)
let q22 = n.indexOf(777)
console.log(q11)
console.log(q22)

// program 1
//                0      1    2   3
let birthYears = [1989, 1990, 1991, 1992]
let ages = []  //[34,33,32,31]
for (let i = 0; i < birthYears.length; i++) {
    // console.log(i)
    // console.log(birthYears[i])
    //console.log(2023 - birthYears[i])
    let ag = 2023 - birthYears[i]
    ages.push(ag)
}
console.log(ages)
// program 2
//             0  1  2  3  4  5  6
let numbers = [33,44,55,66,22,33,55]
let above40 = [] // [44]
//[44,55,66,55]
for(let i = 0 ; i < numbers.length ; i++){
   // console.log(i)
   //console.log(numbers[i])
   if(numbers[i] > 40){
        above40.push(numbers[i])
   }
}
console.log(above40)

// program 3





// program 3




// program 4