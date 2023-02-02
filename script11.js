
// for loop 
// for(initialzation ; conditionCheck ; increment/decrement){
//     // statements 
// }

// print 1 to 5
for(let i = 1 ; i <= 5 ; i++){ // 2 //3 // 4 // 5 // 6
    console.log(i) // 1 // 2 // 3 // 4 // 5
}

// print  3 tyms hello
for(let i = 1 ; i <= 3 ; i++){ //2 //3
    console.log('hello')
}

// print 5 to 1
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// table of 2
for(let i = 2 ; i <= 20 ; i = i + 2){ //4 // 6//8//10//12//14//16//18//20//22 
    console.log(i) // 2 // 4 // 6 // 8 // 10 //12//14//16//18//20
}
//table of 3
for(let i = 3 ; i <= 30 ; i = i + 3){
    console.log(i)
}
// reverse print 10 to 1
for(let i = 10 ; i >= 1 ; i--){ // 9//8//7//6//5//4//3//2//1//0
    console.log(i) // 10 // 9//8///7///6//5//4///3//2////1
}

// break statement with for 
for(let i = 0 ; i <= 5 ; i++){ //1 // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 0 // 1 // 2
}

for(let i = 5 ; i >= 1 ;i--){ //4 //3
    console.log(i) // 5 // 4 // 3
    if(i == 3){
        break
    }
}

for(let i = 5 ; i >= 1 ;i--){ 
    if(i == 3){
        break
    }
    console.log(i) 
}

// continue with for

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 //4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) //1 // 2 // 4 // 5
}

//jan-2