console.log(2**3); //prints 2^3
console.log(2^3); //In JavaScript, the ^ operator is not for exponentiation. It's actually the bitwise XOR (exclusive OR) operator.
// 2 in binary → 10 
// 3 in binary → 11
// XOR means: if the bits are different, return 1; if they're the same, return 0.


console.log("2"+3);//23
console.log(2+"3");//23
// but

console.log(2 + 3 + "3"); //53
console.log("2" + "3" +3); //233