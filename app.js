// this is the begining of code //
const kelvin = 0;
// here we have definition of celsius //
const celsius = kelvin - 273;
// so we define fahrenheit //
let fahrenheit = celsius * (9/5) + 32;
// using math.floor in order to round up //
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);
// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);