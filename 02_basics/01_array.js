const myarr = [0,1,3,4,5]
const names = ["prince","pooja","himanshu"]
const myarr2 = new Array(1,2,3,4,5,6);
console.log(myarr[3]);

console.log(myarr); 

console.log(myarr2);

console.log(names);

console.log(myarr.length);

console.log(names.length);

console.log(myarr2.length);


/*******************   array methods. ********************** */  

const newArray = [0,2,4,3,6,8,9]
newArray.push(7)  // [0,2,4,3,6,8,9,7]
newArray.push(10) // // [0,2,4,3,6,8,9,10]
console.log(newArray);
newArray.pop()   // [0,2,4,3,6,8,9]
console.log(newArray); 

newArray.unshift(11) // [11,0,2,4,3,6,8,9,7]. add the data into the starting
console.log(newArray); 

newArray.shift()  // [0,2,4,3,6,8,9,7]. remove the data into the starting of the array
console.log(newArray); 

const newarray=newArray.join() // it convert the array into string 
console.log(newarray);
console.log(typeof newarray);

/*******************   slice , splice ********************** */ 


console.log("A  ",newArray); 

const myn1 = newArray.slice(1,4)
console.log(myn1);

console.log("B " ,newArray);

const myn2= newArray.splice(1,4)
console.log("C ",newArray);
console.log(myn2);





















