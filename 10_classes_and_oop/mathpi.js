const value=Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(value);
// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);
const chai={
    name : "prince",
    value: 250,
    isAvailable : true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
console.log(Object.getOwnPropertyDescriptor(chai,"isAvailable"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
