// let info = ["chinmay","deshpande",34,22]

// let info2 = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:34,
//     roll:45

// }

// // retrive  (.dot notation and bracket notation)
// console.log(info2.firstName)
// console.log(info2['firstName'])
// // add (.dot notation and bracket notation)
// info2.city = "pune";
// info2['city'] = "pune";
// // update(.dot notation and bracket notation)
// info2.age = 66
// info2['roll'] = 99
// // delete(.dot notation and bracket notation)
// delete  info2.age
// delete  info2['roll']

//             0         1       2       3
// let names = ["chinmay","sarika","ram","satish"] 
// for(let i = 0 ; i < names.length ; i++){
//     console.log(i)
//     console.log(names[i])
// }

// object does not stores the value by index
let vehicle = {
    color:"red",
    type:"sedane",
    regNo:34
}

console.log(vehicle.color) // does work inside loop
console.log(vehicle['color'])

for(let prop in vehicle){
    console.log(prop,vehicle[prop])
}


let animals = {
    leg:4,
    eyes:2,
    color:"red"
}

for(let prop in animals){
    console.log(prop,animals[prop])
}












