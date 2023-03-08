{/* <h1 id = "one" class = "two" name = "nm">Fruits</h1>
<ul>
    <li class = "fruit">Apple</li>
    <li class = "fruit">Mango</li>
    <li class = "fruit">Grapes</li>
    <li class = "fruit">Payapa</li>
</ul> */}

let q1 = document.querySelector('#one')
let q2 = document.getElementById('one')
console.log(q1)
console.log(q2)


let liList = document.querySelectorAll('li') //nodeList
console.log(liList)

let classList = document.querySelectorAll('.fruit')
for (let i = 0; i < liList.length; i++) {
    //console.log(i)
    // console.log(liList[i].textContent)
    if (i % 2 == 0) {
        liList[i].style.color = "green"
    }
    else {
        liList[i].style.color = "red"
    }
}
console.log(classList)
for (let i = 0; i < liList.length; i++) {
    //console.log(i)
    // console.log(liList[i].textContent)
    if (i % 2 == 0) {
        liList[i].style.background = "black"
    }
    else {
        liList[i].style.background = "yellow"
    }
}

let htmlCollection = document.getElementsByClassName('fruit')
let nodeList = document.querySelectorAll('.fruit')
console.log(htmlCollection)
console.log(nodeList)

let nl = document.querySelectorAll('li')
let hc = document.getElementsByTagName('li')
console.log(nl)
console.log(hc)
let q11 =  document.querySelectorAll('li[name="nm"]')
console.log(q11)
let q12 = document.getElementsByName('nm')
console.log(q12)

