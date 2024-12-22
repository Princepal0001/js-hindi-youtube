const mydate = new Date();
console.log(mydate);
console.log(mydate.toString()) //Sat Dec 21 2024 10:41:50 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString()) // Sat Dec 21 2024
console.log(mydate.toISOString()) // 2024-12-21T10:41:50.170Z
console.log(mydate.toJSON())  // 2024-12-21T10:41:50.170Z
console.log(mydate.toLocaleDateString()) // 12/21/2024
console.log(mydate.toLocaleString()) // 12/21/2024, 10:41:50 AM
console.log(mydate.toLocaleTimeString()) // 10:41:50 AM

let mycreatedDate = new Date(2023, 0 , 23)
console.log(mycreatedDate.toDateString());
let myTimeStamp=Date.now()

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
