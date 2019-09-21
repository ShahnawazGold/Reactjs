// A variable, by definition, is “a named space in the memory”
// that stores values. In other words, it acts as a container for values in a program.
// Variable names are called identifiers. Following are the naming rules for an identifier

//  1) Identifiers cannot be keywords.

// 2) Identifiers can contain alphabets and numbers.

// 3) Identifiers cannot contain spaces and special characters, except the underscore (_) and the dollar ($) sign.

// 4 )Variable names cannot begin with a number.

//================Type Syntax========

//Declaration using var keyword
var variable_name;

// ES6 introduces the following variable declaration syntax −

//1) Using the let.
// 2) Using the const.

var name = "apptron";
console.log(name);

///=========JavaScript and Dynamic Typing

// JavaScript is an un-typed language. This means that a JavaScript variable can
//  hold a value of any data type. Unlike many other languages, you don't have to tell
//  JavaScript during variable declaration what type of value the variable will hold.
//  The value type of a variable can change during the execution of a program
//  and JavaScript takes care of it automatically. This feature is termed as dynamic typing.

//JavaScriptVariable Scope

// 1) Global Scope − A
// variable with global scope can be accessed from within any part of the JavaScript code.

// 2) Local Scope − A
//  variable with a local scope can be accessed from within a function where it is declared.

// Global vs. Local Variable

var num = 10;

function test() {
    var num = 20;

    console.log("inside Local " + num); // 20
}

console.log("inside Global " + num); // 10
test(); // 20

//=====The Let and Block Scope

function scopeFun() {
    let scope = 1000;
    console.log("block scope only call inside values " + scope); // 1000
}
scopeFun();

//console.log("block scope varible not call outside scope" + scope); //scope is not defined

//=====The const

// The const declaration creates a read-only reference to a value.
//  It does not mean the value it holds is immutable, just that the variable identifier
//   cannot be reassigned. Constants are block-scoped, much like variables defined using the
//    let statement.
// The value of a constant cannot change through re-assignment, and it can't be re-declared.

// 1) Constants cannot be reassigned a value.

// 2)A constant cannot be re-declared.

//3)  A constant requires an initializer. This means constants must be initialized during its declaration.

// 4) The value assigned to a const variable is immutable.

const xConst = 10 // only one time show
    //xConst = 12  // will result in an error!!