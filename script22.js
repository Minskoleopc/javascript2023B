//              fn         ln         mob     rn age
let  info = ["chinmay","deshpande",7709192441,23,33]
// Array stores the value by index
console.log(info[0])

// retrive 
console.log(info[4])
// udpate
info[1] = "dani"
// add 
info.push('pune')
info.unshift("Mr")
// delete
info.pop()
info.shift()
info.splice(1,1)

//info = ["chinmay","deshpande",7709192441,23,33]

let info2 = {
    // property - value 
    // key      - value
    firstName:"chinmay",
    lastName:"deshpande",
    mobile:7709192441,
    age:33,
    rollNo:22
}
// object does not stores the value by index

console.log(info2[0])
// retrive  (.dot notation / bracket notation)
console.log(info2.firstName)
console.log(info2['firstName'])
// update  (.dot notation / bracket notation)

info2.firstName = "tanmay"
console.log(info2)
info2['firstName'] = "ram"
console.log(info2)
// add (.dot notation / bracket notation)
info2.city = "pune"
info2['language'] = "hindi"
console.log(info2)
// delete  (.dot notation / bracket notation)
delete info2.firstName
delete info2['lastName']
console.log(info2)


let vehicle = {
    color:"red",
    type:"sedane"
}
//(dot notation and bracket notation)

//retrive 
console.log(vehicle.color)
console.log(vehicle['color'])
// update 
vehicle.color = "blue"
vehicle['color'] = "grey"
console.log(vehicle)
//add 
vehicle.state = "MH"
vehicle['city'] = "pune"
console.log(vehicle)
//delete 
delete  vehicle.city
delete  vehicle['state']
console.log(vehicle)

//               0          1        2
let cities = ["bhopal","banglore","chennai"]
for(let i = 0 ; i < cities.length ; i++){
    console.log(i)
    console.log(cities[i])
}
// object looping 