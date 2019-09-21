//==============================================
//
//    
//       ES6 - Loops
//
//===============================================


// At times, certain 
// instructions require repeated execution. Loops are an ideal way to do the same.
//  A loop represents a set of instructions that must be repeated. In a loop’s context,
//   a repetition is termed as an iteration.

// 1) Definite Loop
// A loop whose number of iterations are definite/fixed is termed as a definite loop.
//  The ‘for loop’ is an implementation of a definite loop

// 1	The ‘for’ loop
// The for loop executes the code block for a specified number of times.

// 2	The for…in loop
// The for...in loop is used to loop through an object's properties.

// 3	The for…of loop
// The for…of loop is used to iterate iterables instead of object literals

// 2) Indefinite Loop

// An indefinite loop is used when the number of iterations in a 
// loop is indeterminate or unknown.


// 1	The while loop
// The while loop executes the instructions each time the condition specified evaluates to true.

// 2	The do…while loop
// The do…while loop is similar to the while loop except that the do...
// while loop doesn’t evaluate the condition for the first time the loop executes.



//==============================================
//
//    
//       Definite Loop
//
//===============================================

//for loop 
var a = ["App", "TRON", "tech"]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}


//==============================================
//
//    
//       ES6 - The for…in loop
//
//===============================================

// for (variablename in object) {  
//     statement or block to execute  
//  }

var obj = {
    a: 1,
    b: 2,
    c: 3
};
for (var prop in obj) {
    console.log(obj[prop]);
}





//==============================================
//
//    
//       ES6 - The for…of loop
//
//===============================================

// for (variablename of object) {  
//     statement or block to execute  
//  }

for (let val of[12, 13, 123]) {
    console.log(val)
}




//==============================================
//
//    
//       Indefinite Loop
//
//===============================================

//ES6 - The while loop

// while (expression) {  
//     Statement(s) to be executed if expression is true  
//  } 

var num = 5;
var factorial = 1;

while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("The factorial  is " + factorial);



//==============================================
//
//    
//       ES6 - The do…while loop
//
//===============================================

// do {  
//     Statement(s) to be executed;  
//  } 
//  while (expression);  


var n = 10;
do {
    console.log(n);
    n--;
}
while (n >= 0);