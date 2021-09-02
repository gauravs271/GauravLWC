/***************************************VAR Keyword************************************/
//How to declare variale in JS
//var keyword only support two types of scope global and function
//it dosen't supports block level scope

//var account= "My account"
//console.log("My account")
//var course = "Zero to hero"
//console.log("Zero to hero")
//console.log(window)


/***************************Variable*************************************** */

var x= 10
console.log(typeof x)
var y= "Gaurav"
console.log(typeof y)

//declaration of boolean
var z= true
console.log(typeof z)

//declatition of string
var a= "gahdjsd108723t3bsjgd"
console.log(typeof a)

//declaration of Big int in JS
var b= 10n
console.log(typeof b)

//undefined data type 
var c
console.log(typeof c)


//Object declatation in JS object is a also a type of datatype in JS

var obj={}
console.log(typeof obj)

// below it is showin how to declare arry as data type 

var arr=[]
console.log(typeof arr)


// below it is shown how to initialitze or declare Symbol data type.
var sym = Symbol("id")
console.log(typeof sym)

// how to declare Null as data type or initialaize it 
var x1 = 10 
var x1 = null
console.log(typeof x1)

//return typw of Null is Object


//diffrence between Null and Undefined 
//return type o Null is object 
//return type of Undefined is undefined 
//Null is to be explicitly initiallied or assigned but for undefined it not that case
//If a veriable is declared, but not initialized or assigned with any value the JS automatically initialized it to Undefined 
//it's a special data type which represents "nothing" or emplty or "value unknow" it is assigned explicitly
//when we compare undefined== null it result will be true.
//when we compare undefined === null it will be false.


// Equality operator or comparision 

//normal comprasion  only compare value 
//strict comparision


//In Normal comparsion we use (==)

console.log(3=="3")

//strict comparision will compare vale and data type since "" we use for string operator bu in this case we have used 3 as a number to compare 
// always use === in LWC
console.log(3==="3")

//If we compare undefined to Null the return type will we "true" beacuse Unfedined is something where valus is unknow
//and same is for null

var j
console.log(j)

var r= null
console.log(r)

//comparing Undefined to null with strict operator it is false but when compare with normal operatore (==) it is true beacise it only compares the value 
console.log(j===r)


//Spread Oprator symbole (...) 3 dots.
//where can we use this spred opreatores
//Expanding String:- Converting "String" into "list of Array"  
//Expending Arrys:- Combine array or add value to array 
//Combining Object: Combine object or add value to object
//Creating New Shallow Copy of Array and Objects





















