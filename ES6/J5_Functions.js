// Functions are the building blocks of readable, maintainable, and reusable code. 
// Functions are defined using t
// he function keyword. Following is the syntax for defining a standard function.


// function function_name() { 
//     // function body 
//  } 
//  function_name()

//define a  function 
function test() {
    console.log("function called")
}
//call the function 
test()

//======================Classification of Function

// Functions may be classified as Returning and Parameterized functions.

// Returning functions
// Functions may also return the value along with control, back to the caller. Such functions are called as returning functions.

// Following is the syntax for the returning function.

// 1) 
// function function_name() { 
//     //statements 
//     return value; 
//  }


function retStr() {
    return "hello world!!!"
}
var val = retStr()
console.log(val)



//==============================================
//
//    
//           Parameterized functions
//       
//
//===============================================

// function func_name( param1,param2 ,…..paramN) {   
//     ...... 
//     ...... 
//  }

// function add(n1, n2) {
//     var sum = n1 + n2
//     console.log("The sum of the values entered " + sum)
// }
// add(12, 13)

function add(a, b = 1) {
    return a + b;
}
console.log(add(4))



//==============================================
//
//    
//          Rest Parameters
//       
//
//===============================================

// Rest parameters are similar to variable arguments in Jav
//  Rest parameters doesn’t restrict the number of values that you can pass to a function.
//   However, the values passed must all be of the same type.
//    In other words, rest parameters act as placeholders for multiple arguments of the same type.

// To declare a rest parameter, the parameter name is prefixed with three periods, 
// known as the spread operator. The following example illustrates the same.

function fun1(...params) {
    console.log(params.length);
}
fun1(); //0
fun1(5); //1 
fun1(5, 6, 7); //3




//==============================================
//
//    
//         Anonymous Function
//       
//
//===============================================


// Functions that are not bound to an identifier (function name) are called as anonymous functions.
// These functions are dynamically declared at runtime.
// Anonymous functions can accept inputs and return outputs, just as standard functions do.
// An anonymous function is usually not accessible after its initial creation.

// Variables can be assigned an anonymous function. 
// Such an expression is called a function expression.

//var res = function( [arguments] ) { ... } 

var f = function() {
    return "APPTRON"
}
console.log(f())



//==============================================
//
//    
//        =Anonymous Parameterized FunctionE
//       
//
//===============================================

var func = function(x, y) {
    return x * y
};

function product() {
    var result;
    result = func(600, 20);
    console.log("The APPTRON : " + result)
}
product()



//==============================================
//
//    
//       The Function Constructor
//       
//
//===============================================

// The function statement is not the only way to define a new function;
//  you can define your function dynamically using Function() constructor along with the new operator.

// Following is the syntax to create a function using Function() constructor along with 
// the new operator


// /var variablename = new Function(Arg1, Arg2..., "Function Body"); 

var func = new Function("x", "y", "return x*y;");

function producSSt() {
    var result;
    result = func(10, 20);
    console.log("The product : " + result)
}
producSSt()





//==============================================
//
//    
//       Lambda Functions
//       
//
//===============================================

// Lambda refers to anonymous functions in programming. Lambda functions are a concise mechanism to represent anonymous functions.
//  These functions are also called as Arrow functions.

// Parameters − A function may optionally have parameters.

// The fat arrow notation/lambda notation (=>): It is also called as the goes to operator.

// Statements − Represents the function’s instruction set./

// ([param1, parma2,…param n] )=>statement;

var foo = () => 10
console.log(foo()) //10
var foo2 = (x) => 10 + x
console.log(foo2(10)) //20

//Lambda Statement

// ( [param1, parma2,…param n] )=> {       
//     //code block 
//  }

var msg = () => {
    console.log("function invoked")
}
msg()

//Syntactic Variations
var msg2 = x => {
    console.log(x)
}
msg2(10)

var disp = () => console.log("Hello World")
disp();




//==============================================
//
//    
//       Generator Functions
//       
//
//===============================================

// When a normal function is invoked, the control rests with the function called until it returns. With generators in ES6, the caller function can now control the execution of a called function.
//  A generator is like a regular function except that 

"use strict"

function* rainbow() {
    // the asterisk marks this as a generator 
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}
for (let color of rainbow()) {
    console.log(color);
}