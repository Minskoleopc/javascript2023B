
// html --- hypertext marup language
// css  --- cascading style sheet
// js  ---- javascript

document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').textContent =  document.querySelector('h1').textContent.toUpperCase();
    document.querySelector('h1').style.color = "yellow";
    document.querySelector('h1').style.backgroundColor = "blue";
})

