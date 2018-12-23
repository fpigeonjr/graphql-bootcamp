import myCurrentLocation, { message, name, greeting } from "./myModule";
import Add, { subtractNumbers } from "./math";

const student = "Jessica";

console.log(`${name} says ${message} and he lives in ${myCurrentLocation}`);
console.log(greeting(student));
console.log(Add(1, 1));
console.log(subtractNumbers(10, 1));
