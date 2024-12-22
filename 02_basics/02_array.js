const marvel = ["ironman","spiderman","hulk"]
const dc=["aquaman","batman","superman"]
// marvel.push(dc)
console.log(marvel);
// console.log(marvel[3][1]);
console.log(dc);
 
//***** method 1 *******
// const allHeros = marvel.concat(dc); // add the two array 
// console.log(allHeros);

//***** method 2 *******
 const all_array=[...marvel,...dc]
 console.log(all_array);


 // solve complex array
  const real_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]] 
  const solve_array =real_array.flat(Infinity)
  console.log(solve_array);




  console.log(Array.isArray("prince"));  // false
  console.log(Array.from("prince"));   // [ 'p', 'r', 'i', 'n', 'c', 'e' ]
  
  
  let score1=100;
  let score2=200;
  let score3=300;
  console.log(Array.of(score1,score2,score3));
  


