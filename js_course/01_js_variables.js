//Javascript variables 

const accountId = 10001
var accPassword = "098765"
let accMail = "jay@gmail.com"
accCity = "Hyderabad"

// if yuh declare variable with out any value then it will be undefined ....

let accState;

/*
prefer not to use var because of issue in block scope and function scope ...

use let or const mostly 

use var if you want to run ur websites in old versions also ..

let variables can  be changed but const variable cant be chamged its constanst...
*/

accMail = "changed@gmail.com"

var accPassword = "22"

accCity = "warangal"

// we can use console.table if we want more outputs at a time example follow my code below ..

console.table([accountId, accMail, accPassword,accCity,accState])

