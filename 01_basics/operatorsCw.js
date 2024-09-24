// operators 
// they are used to perform opearations on data

// Arithematic Opearors
// + , - , * , / , %, ** 
// uniary operators ++,--

let a = 10;
let b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

// post increment or decrement => first the work will be done then the increment or decrement  operation takes place
// pre increment or decrement => first the increment or decrement operation takes place and then the given work will be done



// Assignemnt Operators

// it assigns a value to a variable

// = , += , -=, *= , /= , %= , **=
// these are nothing but short hand notations

let val = 2;

val += 2; // val = val + 2;
val -= 2 // val = val - 2;

val *= 2 // val = val * 2;
val /= 2 // val = val / 2;

// similary all the opearators work




// Comparision Opearators

// == , != , > , < , >= , <= , === , !==
// it gives result in boolean means true or false

let num1 = 10;
let num2 = 20;


console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// we can compare with other datatypes also not only integer/ number values

let value = "10";

console.log(value == num1) // it gives true because first the string value is converted to number and then comparision takes place

// === and !==  are strictly equal but == and != are loosly equal 
// which means if we use === or !== it not only checks the value but also checks the datatype also

let z = 10;
let y = 10;
let w = "10";

console.log(z === y); // gives true 
console.log(z === w); // gives false


// Logical Opearators

// logocal and - &&
// logical or - ||
// logical not - !



