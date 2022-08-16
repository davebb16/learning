// PRIMITIVE TYPES

// String
const name = 'John Doe'
// console.log(typeof name) retruns 'string'

// Number
const age = 16;
// console.log(typeof age) returns 'number'
// If we add quotes however, it is a string
// const age = '16';
// console.log(typeof age)

// Boolean
const hasKids = true;
// console.log(typeof hasKids) returns 'boolean'

// Null
const car = null;
// console.log(typeof car) returns 'object' even though it is one of the primitive types. this is pretty much a bug in js

// Undefined
let test;
// console.log(typeof test) returns 'undefined'

// Symbol
const sym = Symbol();
// console.log(typeof sym) retuns 'symbol


// REFERENCE TYPES
// These will all return as object

// Array
const hobbies = ['movies', 'music'];
// console.log(typeof hobbies) returns object

// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
// console.log(typeof address) returns 'object'

const today = new Date(); // We'll get into dates/time later
// console.log(typeof today) returns 'object'

console.log(today);
console.log(typeof today);