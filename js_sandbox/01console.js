//Single line comment

/* 
  multi 
  line
  comments  
  
  testing git
*/ 

var tamales = 'hot tamales'
console.log(tamales);

console.log([1,2,3,4]); //an array
console.log({a:1, b:2}) //an object (note the curly braces)
console.table([1,2,3,4]) //prints the obj/array out as a table

console.error('this is an error'); //prints red in the console, shows where the error is coming from
console.warning('this is a warning') //similar to error, but printed in yellow
console.clear(); //clears the console


console.time('Hello')
  console.log('Hello World')
  console.log('Hello World')
  console.log('Hello World')
  console.log('Hello World')
  console.log('Hello World')
  console.log('Hello World')
  console.log('Hello World')
console.timeEnd('Hello Again') //outputs the time it took to run the stuff inbetween