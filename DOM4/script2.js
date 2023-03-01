

let buttonE = document.querySelector('button')
let headOne  = document.querySelector('h1')

console.log(buttonE)
console.log(headOne)

buttonE.addEventListener('click',function(){
    headOne.style.color = "red"
})