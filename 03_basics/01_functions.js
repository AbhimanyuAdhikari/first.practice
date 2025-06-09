function sum(num1 , num2){
    return num1 + num2
}

// console.log(sum(5,6)); // output=11

console.log(sum(8, true)); // returns 9
// js treats true as integer if it comes with integer

console.log(sum(false, false)); // returns 0 

console.log(sum(undefined, 5)); // returns NaN(not a number)

//js treats null as zero but undefined is not zero