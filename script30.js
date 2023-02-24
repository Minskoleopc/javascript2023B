let randomNumber = Math.floor(Math.random()*6) + 1
// console.log(randomNumber)

// let userInput = prompt('Enter the number 1 to 6')
// console.log(typeof userInput)
// if(userInput == randomNumber){
//     console.log("Guess is correct")
// }
// else {
//     console.log("Guess is incorrect")
// }

//userInput == randomNumber ? console.log('Guess is correct'):console.log("Guess is incorrect")

randomNumber = Math.floor(Math.random()*6) + 1
console.log(randomNumber)
// let userInput;
// for(let i = 0 ; i < 5 ; i++){
//     userInput = prompt("Enter any number between 1 to 6")
//     if(userInput == randomNumber){
//         console.log("Guess is correct")
//         break
//     }
//     else {
//         console.log("Guess is incorrect")
//     }
// }



randomNumber = Math.floor(Math.random()*6) + 1 // 4
console.log(randomNumber)
let userInput; // undefined

while(userInput != randomNumber){
    userInput = prompt('Please Guess any number between 1 to 6') //4
    if(randomNumber == userInput){
        console.log("Guess is correct")
        //break
    }
    else {
        console.log("Guess is incorrect")
    }
}







// console.log(userInput)
// if(userInput){
//     console.log('Hello')
// }
// else {
//     console.log("Bye")
// }







