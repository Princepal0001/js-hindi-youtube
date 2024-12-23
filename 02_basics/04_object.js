//   const tinderUser = new Object()  // method 1 (singleton object)

// method 2 (non singleton object)
 const tinderUser = {}
 tinderUser.id ="prince123"
 tinderUser.name="prince"
 tinderUser.isloggedIN=false
console.log(tinderUser);


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj3 = {5:"e" , 6:"f"}

// const obj4 = Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj4);

// const obj5 = Object.assign({},obj1,obj2,obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// console.log(obj5);

const obj6={...obj1,...obj2,...obj3} // best method
console.log(obj6);

const details = [
    {
        id : 1,
        name : "prince"
    },
    {
        id : 2,
        name : "himanshu"
    },
    {
        id : 3,
        name : "pawan"
    },
    {
        id : 4,
        name : "arun"
    } 
]
    console.log(details[1].name);

    console.log(Object.keys(tinderUser));
    console.log(Object.values(tinderUser));
    console.log(Object.entries(tinderUser));

    console.log(tinderUser.hasOwnProperty('isloggedIN')); // for check it is present or not


    const course = {
            course_name : "js in Hindi",
            price : 1000,
            instructor : "hitesh"

    }
//    console.log(course.course_name);      // method 1
//    console.log(course.price);       
    
            // method 2

//  const {instructor} = course
//  console.log(instructor);


// API
     
    // json format

// {
//     "name" : "prince",
//     "roll_no" : 54,
//     "class" : "ee"
// }

// object in array
[
    {},
    {},
    {}
]


  
    




