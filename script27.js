let obj = {
    firstName:"chinmay",
    lastName:"deshpande"
}

// Map 
let mapA = new Map()
console.log(mapA)

// set()
mapA.set(1,"admin")
mapA.set(2,"customer")
mapA.set(3,"student")
console.log(mapA)

// javascript  -- object --- property and method
console.log(mapA.size)

// has()
let q1 = mapA.has(1)
console.log(q1)

//clear()
// mapA.clear()
// console.log(mapA)

//delete()
mapA.delete(1)
console.log(mapA)

mapA.forEach(function(v,k){
    console.log(v,k)
})

for(let k of mapA.keys()){
    console.log(k)
}

for(let v of mapA.values()){
    console.log(v)
}
for(let [k,y] of mapA.entries()){
    console.log(k,y)
}
let q3 = mapA.get(2)
console.log(q3)

//---------------------------------------------------------->
let mapB = new Map([
    [1,"admin"],
    [true,"can drive"],
    ["fullName","chinmay deshpande"]
])
console.log(mapB)

// Set 

let names = new Set(["chinmay","ram","satish","ramesh","ram"])
console.log(names)

//  Set does not stotes the value by index
//console.log(names[0])

// add()
names.add('sarika')
console.log(names)

// names.clear()
// console.log(names)

console.log(names.size)

names.delete('sarika')
console.log(names)

let q2 = names.has('ram')
console.log(q2)

names.forEach(function(el){
    console.log(el)
})

//let r1 = names.values()

for(let v of names.values()){
    console.log(v)
}
for(let k of names.keys()){
    console.log(k)
}

for(let [k,v] of names.entries()){
    console.log(k,v)
}

let jj = names.values()
console.log(jj)

console.log(jj.next().value)
console.log(jj.next().value)
console.log(jj.next().value)
console.log(jj.next().value)


names.clear()
console.log(names)




