const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2; // 150
val = num1 * num2; // 5000
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 % num2; //0



// MATH OBJECT

// Pi
val = Math.PI; // 3.141592653589793

// Eulers number
val = Math.E; // 2.718281828459045

// Rounding
val = Math.round(2.4); // 2
val = Math.round(2.8); // 3
val = Math.ceil(2.4); // 3 (will always round up)
val = Math.floor(2.8); // 2 (will always round down)
val = Math.sqrt(64); // 8 (spuare root)
val = Math.abs(-3); // 3
val = Math.pow(8, 2); // 64 (8^2)
val = Math.min(4, 2, 84, 7); // 2 (returns the minimum)
val = Math.max(4, 2, 84, 7); // 84 (returns the minimum)
val = Math.random(); // Gives a random decimal (0-1)


//Output
console.log(val);