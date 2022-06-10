//var, let const

var name = 'Doe John'; //can be double or single quotes
console.log(name);
name = 'Steve Smith';
console.log(name); //is now changed to steve smith, can be reassigned

// How to initialize a var without setting it
var greeting;

// Then we can set it later
greeting = 'Hello';

// Variables can only have letters, numbers, _, and $
// Vars can NOT start with a number

// Multi word vars
var firstName = 'John'; // Camel case -- probably the most common
var first_name = 'John'; // Underscore
var FirstName = 'John'; // Pascal case
var firstname = 'John'; // All lower -- would not recomment

// LET
// let and var are identical in the global scope, but let has advantages in block-level scope
let anotherNameInitialized; // This is how you would initialize it 
let anotherName = 'Senor hot tamale' // Or you could set it like this
anotherName = 'Doe John'; // Exactly the same as with var
console.log(anotherName);
anotherName = 'Steve Smith';
console.log(anotherName); 

// CONST
// Cannot be reassigned
const constName = 'John';
console.log(constName); // This is fine
// const constName = 'Sara'; This is not
console.log(constName); // Throws an error, because we tried to reassign
// Cannot initialize without setting a value
// const shabam; Throws an error

// Using const with non-primitive data types, things that can change, but not be reassigned:
const person = {
  name: 'John',
  age: 82
} // An object literal

console.log(person);

person.name = 'Sara'; // We can do this, we can change the data in the object, we just can't reassign person/change the object itself
// This is also true with arrays
console.log(person);

// Recommends using const unless the value will need to change, it needs to be initialized, or it's going to be used in an iterator/loop