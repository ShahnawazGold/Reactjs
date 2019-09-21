//ES6 - if Statement


// if(boolean_expression) {  
//     // statement(s) will execute if the Boolean expression is true  
//  }

var num1 = 2
if (2 == num1) {
    console.log("number is positive")
}

//======================ES6 - if…else Statement

// if(boolean_expression) {  
//     // statement(s) will execute if the Boolean expression is true  
//  } else {  
//     // statement(s) will execute if the Boolean expression is false  
//  }

let mark = 50
if (50 == mark) {

    console.log("pass");

} else {
    console.log("fails ");
}

//==============================================
//
//    
//       ES6 - else…if Ladder
//
//===============================================

// if (boolean_expression1) { 
//     //statements if the expression1 evaluates to true 
//  } else if (boolean_expression2) { 
//     //statements if the expression2 evaluates to true 
//  } else { 
//     //statements if both expression1 and expression2 result to false 
//  }


var num2 = 2
if (num2 > 0) {
    console.log(num2 + " is positive")
} else if (num2 < 0) {
    console.log(num2 + " is negative")
} else {
    console.log(num2 + " is neither positive nor negative")
}


//==============================================
//
//    
//       ES6 - switch…case Statement
//
//===============================================


// switch(variable_expression) { 
//     case constant_expr1: { 
//        //statements; 
//        break; 
//     } 
//     case constant_expr2: { 
//        //statements;
//        break; 
//     } 
//     default: { 
//        //statements; 
//        break; 
//     }


var grade = "A";
switch (grade) {
    case "A":
        {
            console.log("Excellent");
            break;
        }
    case "B":
        {
            console.log("Good");
            break;
        }
    case "C":
        {
            console.log("Fair");
            break;
        }
    case "D":
        {
            console.log("Poor");
            break;
        }
    default:
        {
            console.log("Invalid choice");
            break;
        }
}