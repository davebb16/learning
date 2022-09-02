// STRINGS AND CONCATENATION

const firstName = 'Sid';
const lastName = 'Wid';
age = 2;

let val;

val = firstName + lastName; // SidWid

// Concatenation
val = firstName + ' ' + lastName; // Concatenates first name, then a space, then the lastname

// Append
// Adding on to a var
val = 'Ab';
val += 'erham'; // Aberham

val = 'Hello, my name is ' + firstName + ' and I am ' + age; //Hello, my name is Sid and I am 2

// ES6 introduced template literals (aka template strings) which make this much easier. However it's still important to know how to do it this way

// Escaping
val = 'That\'s awesome, I can\'t wait'; // '\' Escapes the apostropies in the sentance

// Length
val = firstName.length; // This is a property, NOT A METHOD, so we dont need parentheses at the end. Returns 3

// concat() Method
val = firstName.concat(' ', lastName); // Sid Wid, it concatenates first and last name

// Change Case
val = firstName.toUpperCase(); // SID
val = firstName.toLowerCase(); // sid

val = firstName[0]; // returns the 0 index, s. 

// indexOf() Method
val = firstName.indexOf('d') // 2 (Returns the index of the first instance of that letter)
val = firstName.lastIndexOf('d') // 2 (Returns the index of the last instance of that letter)
val = firstName.indexOf('z') // -1 since the letter doesnt exist

// charAt() Method
val = firstName.charAt('2'); // d, the letter at the index of 2 

// Get last char
val = firstName.charAt(firstName.length - 1); // d, will always return the last letter

console.log(val);