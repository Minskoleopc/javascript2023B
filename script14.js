// while 

/* 
intialization  (outside)
while(condition){

    // statments 
    // increment / decrement
}
*/

// print hello 5 times using while loop
let i1 = 1 
while(i1 <= 5){
    console.log("hello")  // "hello" "hello" "hello" "hello" "hello"
    i1 ++ // 2 // 3 // 4 // 5 // 6
}
// print 1  to 5
let i2 = 1
while(i2 <= 5){
    console.log(i2)
    i2 ++
}
// print 5 to 1
let i3 = 5
while(i3 >= 1){
    console.log(i3) // 5 // 4 // 3 // 2 //1
    i3 -- // 4 // 3 // 2 // 1 // 0
}

// table of 2
let i4 = 2
while(i4 <= 20){
    console.log(i4)
    i4 = i4 + 2
}
// table of 3 reverse
let i5 = 30
while(i5 >= 3){
    console.log(i5)
    i5 = i5 - 3
}
// break with while 

let i6 = 5
while(i6 >= 1){
    if(i6 == 3){
         break
    }
    console.log(i6) // 5 // 4
    i6 --; // 4 // 3
}

let i6a = 1
while(i6a <= 5){
    if(i6a == 3){
         break
    }
    console.log(i6a)  // 1 // 2
    i6a ++;  // 2 // 3
}

// continue
let i7 = 1
while(i7 <= 5){
    if(i7 == 3){
        i7 ++ // 4
        continue
    }
    console.log(i7) // 1 // 2 // 4 // 5
    i7 ++ // 2 // 3 // 5 // 6
}






