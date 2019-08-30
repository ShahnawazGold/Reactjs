let a = 100
if (true) {
    let a = 200
    console.log(a)

}

function abc() {
    console.log("old")
}
abc();

//print me 

var printMe = () => {
    console.log("old printMe")
}

printMe()

var fun = (a, b) => {
    return a + b
}
console.log(fun(3, 4))
    //arrow fun
var funE = (a, b) => a + b;
console.log(funE(5, 4))

/// here function deposit

function deposit(...money) {
    console.log(money) //[]
    let balance = 0
    for (var i = 0; i < money.length; i++) {
        balance += money[i]
    }
    return balance

}

console.log(deposit(50, 40, 59))