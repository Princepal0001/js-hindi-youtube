const score=600;
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);

console.log(balance.toFixed(2)); 500.00
const otherNumber= 25.0762;
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));



//*********************** MATH ****************************/

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.max(4,6,7,5));
console.log(Math.min(4,6,7,5));

// random gives value btw(0 to 1)
console.log(Math.random());
console.log((Math.random()*10) + 1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);







