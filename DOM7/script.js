
// <li>Banana</li>

let buttonA = document.querySelector('button')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')


buttonA.addEventListener('click',function(){

    // read the input text
    let text = inputText.value  //papaya

    // create the blank element 
    let newLi = document.createElement('li') // <li></li>

    // adding text to element
    newLi.textContent = text  // <li>papaya</li>

    // add element to unordered list
    ulList.appendChild(newLi)

    // remove the text from inputText box
    inputText.value = ""
})
