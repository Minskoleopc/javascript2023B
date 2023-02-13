// program1
//            0    1     2   3
let years = [1989,1990,1991,1992]
let ages  =[] 
// [34,33,32,31]

for(let i = 0 ; i < years.length ; i++){
    //console.log(i)
    //console.log(years[i])
    //console.log(2023 - years[i])
    let val = 2023 - years[i]
    ages.push(val)
}
console.log(ages)
// program 2 (filter)

let numbers = [22,33,55,66,77,33,44,55,66]
let above50 = []
//[55,66,77,55,66]
for(let i  = 0 ; i < numbers.length ; i++){
    //console.log(i)
    console.log(numbers[i])
    if(numbers[i] > 50){
        above50.push(numbers[i])
    }
}
console.log(above50)

// program3
let addAll = [11,22,33] // 11+22+33 === 66
let sum = 0

for(let i = 0 ; i < addAll.length ; i++){
    //console.log(i)
    //console.log(addAll[i])
    sum = sum + addAll[i]
    //     0  +  11       ====> 11
    //     11 +  22       =====> 33
    //     33  + 33       =====> 66
}

console.log(sum)

// program 4
let city = ["pune","nashik","mumbai","bangalore"]
for(let i = 0 ; i < city.length ; i++){
    console.log("welcome "+city[i])
}

// program 5
let  numbersa  = [11,22,33,44,55,22,33,44,55]
// flag
let allGreaterThan10 = true

for(let i = 0 ; i < numbersa.length , i++){
    if(numbersa[i] <= 10 ){
        allGreaterThan10 = false
    }
}

if(allGreaterThan10){
    console.log('All are greater than 10')
}
else{
    console.log("Not all greater than 10")
}