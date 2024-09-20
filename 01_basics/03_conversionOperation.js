let score = 22;

console.log(typeof score);
console.log(typeof(score));


let age = "10";

console.log(typeof age);


// converting string to number

let valueInNumber = Number(age);
console.log(valueInNumber);
console.log(typeof valueInNumber);


//  what if string has letter too 
let a = "12abc"; // or undefined it gives NaN
let b = Number(a); // it converts to number 

console.log(b); // but it contains value NaN
console.log(typeof b);



let c = null  // if true - > 1 , false -> 0
let d = Number(c)

console.log(d) // it prints 0




// "33" => 33 
// "33abs" => NaN
// true => 1,false => 0
// null => 0
// undefined => NaN



// ... to boolean

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false, "junaid" => true




// num to string

let num = 51;
let stringNum = String(num);

console.log(stringNum);
console.log(typeof stringNum);
