let val;
// Cant be const bc we arent setting a value yet


// Number
val = 5;

// Output
console.log(val); // returns 5
console.log(typeof val); // returns number
console.log(val.length); // returns undefined (.length only works for strings)


// Number to string
val = String(4+4);  // now this is a string (we can do math in here)

// Output
console.log(val); // returns 8
console.log(typeof val); // returns string
console.log(val.length); // returns 1


// Number to string
val = String(4+4);  // now this is a string (we can do math in here)

// Output
console.log(val); // returns 8
console.log(typeof val); // returns string
console.log(val.length); // returns 1


// Boolean to string
val = String(true);

// Output
console.log(val); // returns true
console.log(typeof val); // returns string
console.log(val.length); // returns 4


// Date to string
val = String(new Date());

// Output
console.log(val); // returns Mon Aug 22 2022 19:17:56 GMT-0500 (CDT)
console.log(typeof val); // returns string
console.log(val.length); // returns 39


// Array to string
val = String([1,2,3,4]);

// Output
console.log(val); // 1,2,3,4
console.log(typeof val); // string
console.log(val.length); // 7


// toString() method
val = (true).toString();



// String to Number
val = Number('5');

// Output
console.log(val); // 5
console.log(typeof val); // number
console.log(val.toFixed(2)); // 5.00 (toFixed() only works on numbers)



// Boolean to Number
val = Number('true'); // null and false are both 0, true is ofc 1

// Output
console.log(val); // 1
console.log(typeof val); // number
console.log(val.toFixed(2)); // 1.00


// NaN
val = Number('Hello'); // returns NaN (not a number)



// parseInt()
val = parseInt('100'); // Returns 100
val = parseInt('100.30'); // Still returns 100, since it returns an int

// parseFloat()
val = parseFloat('100.12283892000'); // Returns 100.12



// TYPE COERSION
// Type coersion is where js does the converting for us

const val1 = '5'; // this is a string
const val2 = 6;

const sum = val1 + val2;

// Output
console.log(sum); // 56, it converted the 6 to a string and concatonated it w the other
console.log(typeof sum); // string