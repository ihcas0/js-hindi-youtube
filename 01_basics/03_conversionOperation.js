let score = 33

console.log(typeof score)
console.log(typeof(score)) // As a methode same output and both number in lowercase

let score2 = "33" 

console.log(typeof score2)
console.log(typeof(score2)) // Both string 

let valueInNumber = Number (score2) // This means that score now has been converted to number I mean socre2

console.log(typeof valueInNumber) // Now number

let score3 = "33abs"

let valueInNumber3 = Number(score3) 

console.log(typeof valueInNumber3)// number
console.log(valueInNumber3)// NaN then just 

// If the value is null then after conversion value is 0 and in undefined then NaN
//And boolean value like 0 and 1 will come
// Type of NaN is number has to be else inconsistency as the type is coming number but not actually a number

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)// true
// If the string is empty then converted to boolean then the ouput is false and anything apart from empty is true
//Actually makes sense

let someNumber = 33

let stringNumeber = String(someNumber)
console.log(stringNumeber)
console.log(typeof stringNumeber)
