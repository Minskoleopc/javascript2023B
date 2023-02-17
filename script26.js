// string , array , object , userdefined , map ,set
// data type --- object -- property and method

// map 

// data stores in 
// property - value
// key - value

let obj = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 29,
    rollNo: 34
}

// keys .. property are always string 
// map -- keys or properties can be any data type

let mapA = new Map([
    [1, "Admin"],
    [true, "canDrive"],
    ["fullName", "Chinmay Deshpande"]
])

console.log(obj)
console.log(mapA)


let mapB = new Map([
    [1, "admin"],
    [2, "customer"],
    [3, "manager"],
    [4, 'officer']

])

console.log(mapB)
//mapB  -- Object ---- property and methods 
console.log(mapB.size)


// to check whether element is presenf 
let q = mapB.has(4)
console.log(q)

// To add the property value 
mapB.set(6,"clerk")
console.log(mapB)

// to clear out only element
// mapB.clear()
// console.log(mapB)
let q2 = mapB.get(2)
console.log(q2)


mapB.forEach(function(v,k){
    console.log(v,k)
})


//size 
//has()
//get()
//set()
//clear()
//forEach(v,k)

mapB.delete(1)
console.log(mapB)

// entries() , keys() , values()
console.log(mapB.keys())
console.log(mapB.values())
console.log(mapB.entries())

for(let k of mapB.keys()){
    console.log(k)
}
for(let k of mapB.values()){
    console.log(k)
}

for(let [k,v] of mapB.entries()){  //["2","customre"]
    console.log(k,v)
}