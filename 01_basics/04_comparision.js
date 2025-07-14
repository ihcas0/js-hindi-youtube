console.log(2>1)
console.log(2>=1)
console.log(2==1)
console.log(2<=1)
console.log(2!=1)

console.log(null > 0)// false
console.log(null == 0)//false
console.log(null >= 0)//true
// as the equality and comparision operator works differently comaparision converts null to a number 
// undefined all three case is false even if less than equal to sign

//=== strict check  that means not just check value as conversion in == but === then it checks the datatype as well
console.log("2"==2)//true
console.log("2"===2)//false 