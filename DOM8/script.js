

let ulList = document.querySelector('ul')
console.log(ulList)
let buttonOne = document.querySelector('#one')
console.log(buttonOne)
let inputText  = document.querySelector('input')


// add remove delete functionality
//<h1 id = "one" class = "two" name = "nm">Fruits</h1>
// document.querySelector('#one')
// document.querySelector('.two')
// document.querySelector('h1')
// document.querySelector('h1[name="nm"]')

ulList.addEventListener('click',function(e){
    //console.log(e.target) --- element
    //console.log(e.target.tagName) // tagName
    //console.log(e.target.className) // className
})


// Adding the new li element
buttonOne.addEventListener('click',function(){
    let textP = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = textP // <li>Papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""

})


// Adding 3 button to new li
function createButtons(li){
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') //<button class = "remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement('button') // <button></button>
    u.textContent = "Up" // <button>Up<button>
    u.classList.add('up') // <button class = "Up">up</button>
    li.appendChild(u) // 

    let d = document.createElement('button') // <button></button>
    d.textContent = "Down" // <button>Down<button>
    d.classList.add('down') // <button class = "Down">up</button>
    li.appendChild(d) // 



}
