

let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('#one')


ulList.addEventListener('click', function (e) {
    //console.log(e.target)
    //console.log(e.target.tagName)
    //console.log(e.target.className)
    if (e.target.tagName == "BUTTON") {

        if (e.target.className == "remove") {
            // code goes here
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }
        else if (e.target.className == "up") {
            let li = e.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if(prev){
                ul.insertBefore(li,prev)
            }

        }
        else if (e.target.className == "down") {
            let li = e.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }

        }







    }




})



buttonOne.addEventListener('click', function () {
    let text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = " "

})



function createButtons(li) {
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)
}