
// selecting the element 

//<h1 id = "one"  class = "two"  name = "nm" >Chinmay</h1>

let  headOne = document.querySelector('h1')
let b = document.querySelector('.two')
let c = document.querySelector('#one')
let d = document.querySelector('h1[name= "nm"]')

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// a.textContent = "poorva"
// a.style.color = "red"

headOne.addEventListener('click',function(){
    headOne.textContent = "poorva"
    headOne.style.color = "red"
})









// let info = {
//     firstName:'chinmay'
// }

// info.firstName = "chinmay"

// let family = {
//     fullName:"chinmay",
//     parent:{
//         mother:"kanchan",
//         father:"shirish"
//     }
// }
// family.parent.mother = "kanchan s"












