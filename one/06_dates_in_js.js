const myDate = new Date();
console.log(myDate);
console.log(myDate.toISOString());
console.log(myDate.toJSON());          // till here all 3 outputs are same
console.log(myDate.toDateString());    // Thu Jun 05 2025
console.log(myDate.toString());        // Thu Jun 05 2025 07:03:02 GMT+0545 (Nepal Time)
console.log(myDate.toLocaleString());  // 6/5/2025, 7:03:02 AM
console.log(myDate.getHours());        // 7

//all the above mentioned comments are current date and time so they can differ when run again

const myCreatedDate = new Date(2021,5,6) // zero bata suru hunxa 5 vaneko june
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()           // stores current time in millisecond format
console.log(myTimeStamp);

console.log(Math.floor(myTimeStamp/1000)) // converted current time in millisecond to second
