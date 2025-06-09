// as said earlier in 01_variables.js in 01_basics.. var le functional ra block scope ma asar garxa.. lets understand that line
let a = 50;
const b = 60;
var c = 70;

console.log(a,b,c);

if(true){
    let g = 10;
    const h = 20
    var i = 30
}

// console.log(g,h,i) // says g is not defined since it is defined in local scope in if block.. similar for h but
console.log(i); // prints 30

// so var le jun block ma define gareni global scope ma affect garxa (it is like static variable in c)
