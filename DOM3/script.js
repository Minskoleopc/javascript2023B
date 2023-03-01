//<p id = "one" class = "two"  name ="nm">ParaOne</p>

// Css selectors

// tagName
let tg = document.querySelector('p')
console.log(tg)
// className 
let cn = document.querySelector('.two')
console.log(cn)
// id 
let ide = document.querySelector('#one')
console.log(ide)
// commonF   tagName[attribute = "value"]
let caA = document.querySelector('p[name="nm"]')
console.log(caA)

// <h1 id = "aa" class = "bb" name ="cc">Fruits</h1>

let aa = document.querySelector('h1')
let bb = document.querySelector('.bb')
let cc = document.querySelector('#aa')
let ccf = document.querySelector('h1[name= "cc"]')

console.log(aa)
console.log(bb)
console.log(cc)
console.log(ccf)

//console.log(aa.textContent)
//aa.textContent = "Fruitss"

// selecting the element

aa.addEventListener('mouseover',function(){
    aa.textContent = "Fruitss"
    aa.style.color = "green";
})











// let j = {
//     firstName:"chinmay"
// }

// console.log(j.firstName)
// console.log(j['firstName'])

// j.firstName = "chinmay d"
// console.log(j)