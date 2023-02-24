

// console.log(Math.floor(23.6)) // 23
// console.log(Math.floor(-23.6)) // -24
// console.log(Math.ceil(23.6)) // 24  
// console.log(Math.ceil(-23.6)) // -23
// console.log(Math.round(22.4)) // 22
// console.log(Math.round(22.5)) // 23
// console.log(Math.round(22.6)) // 23
// console.log(Math.random())  // 0 ----- 1
// console.log(Math.random()*6) // 0 -6
// // 0.33, 1.34,2.55,3.66,4.88,5.99
//  0   , 1  , 2  , 3  , 4,5
//console.log(Math.floor(Math.random()*6)+1)


// program1

// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// let userGuess = prompt('Guess any number between 1 to 6')

// // if( randomNumber == userGuess){
// //     console.log('Guess is correct')
// // }
// // else {
// //     console.log("Guess is incorrect")
// // }

// randomNumber == userGuess ? console.log("Guess is correct"):console.log("Guess is incorrect")

// program 2 
let randomNumber = Math.floor(Math.random()*6)+1
console.log(randomNumber)
let userInput;
console.log(userInput)

for(let i = 1 ; i <= 5 ; i++){
    userInput = prompt('Enter the number between 1 to 6')
    if(userInput == randomNumber){
        console.log("Guess is correct")
        break
    }
    else {
        console.log("Guess is incorrect")
    }

}

// while










