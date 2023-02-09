// map()

let birthyear = [1989,1990,1991,1992]
//[34,33,32,21]
let r1 = birthyear.map(function(el,index,arr){
   // console.log(el,index,arr)
   return 2023 - el
})
console.log(r1)

let tables = [1,2,3,4,5,6,7,8,9,10]

let twoTable = tables.map(function(el){
    return el * 2
})
console.log(twoTable)

// filter()
let numbers = [55,66,77,33,44,55,66,77]
let above50 = numbers.filter(function(el){
    return el > 50
})
console.log(above50)

let even = [66,77,88,33,44,55,66,77,88]
let evs = even.filter(function(el,index){
    return el % 2 == 0
})
console.log(evs)

// reduce()

let ya = [11,22,33]
let q11 = ya.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q11)
// forEach()

let names = ["sarika","poorva","shubham","ram"]
let qqq = names.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
console.log(qqq)



// find()

//         0 1  2  3  4  5  6  7
//(filter revison)
let uu = [22,33,44,22,33,44,55,64]
let ww = uu.filter(function(el){
    return el > 30
})
console.log(ww)

// find()
let www = uu.find(function(el){
    return el > 30
})
console.log(www)

// findIndex()
let wwwq = uu.findIndex(function(el){
    return el > 30
})
console.log(wwwq)

// some 
let m = [33,2,66,22,34,66,77]
let r111= m.some(function(el,index,arr){
    return el > 600
})
console.log(r111)

// every()
let m1 = [33,2,66,22,34,66,77]
let r1111= m1.every(function(el,index,arr){
    return el > 0
})
console.log(r1111)