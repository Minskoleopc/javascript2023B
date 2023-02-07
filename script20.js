
//            0     1   2    3
let years = [1989,1990,1991,1992]
let ages = []

for(let i = 0 ; i < years.length ; i++){
    let age = 2023 -years[i]
    ages.push(age)
}
console.log(ages)
//years.push(1993)


// program 1
// let q1 = years.map(function(el,index,arr){
//    // console.log(el,index,arr)
//    return 2023 - el
// })
// console.log(q1)

// program 2
// let a = [11,22,33,44,55,66]
// let q2  = a.map(function(el,index,arr){
//     return el + 3
// })
// console.log(q2)

// program 3

let a = [1,2,3,4,5,6,7,8,9,10]
// [3,6,9,12,15,18,21,24,27,30]
let q3 = a.map(function(el,index,arr){
    return el * 3
})
console.log(q3)

// program 4

let n = [33,44,55,33,55,66]
let above50 = []
for(let i = 0 ; i < n.length ; i++){
    if(n[i] > 50){
        above50.push(n[i])
    }
}
console.log(above50)

let q5 = n.filter(function(el,index,arr){
    return el > 50
})
console.log(q5)

let numbers = [44,55,66,33,44,55,66,77,88,100]
let q6 = numbers.filter(function(el){
    return el % 2 == 0
})
console.log(q6)

// program 3

let na = [11,22,33] // 66
let sum = 0
for(let i = 0 ; i < na.length ; i++){
    sum = sum + na[i]
}
console.log(sum)

// accumulator value is 0
// let q7 = na.reduce(function(acc,el,index ,arr){
//     return acc + el // 33
// },0)
// console.log(q7)

let q8 = na.reduce(function(acc,el,index,arr){
    return acc + el // 66
},5)
console.log(q8)
