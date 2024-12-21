const name = "prince"
const number = 9911
console.log(name +number +"value");
console.log(`my name is ${name} and my number is ${number}`);

//  method 2
const UserName= new String("prince");
console.log(UserName); // prince 

console.log(UserName[0]); // p

console.log(UserName.length); // 6

console.log(UserName.toUpperCase());  //PRINCE

console.log(UserName.charAt(5));  // e

console.log(UserName.indexOf('c'));  // 4

const newsubstring = UserName.substring(0,3) // substring(include,exclude)
console.log(newsubstring); // pri

const newStringOne = "  prince pal  "
console.log(newStringOne);  // (  prince pal  )

console.log(newStringOne.trim());  // (prince pal)

const url = "https://prince.com/prince%20pal";
console.log(url.replace('%20','-'));    // https://prince.com/prince-20pal




