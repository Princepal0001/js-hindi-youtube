function my_name(){
    console.log("p");
    console.log("r");
    console.log("i");
    console.log("n");
    console.log("c");
    console.log("e");
    console.log("prince pal");
    
}
// my_name() 


// add two no function

// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }

function addTwoNumber(num1,num2){

   let result = num1+num2
   return result
}
 
const result = addTwoNumber(3,4)
console.log("result : ",result);



function loggedinMessage(username){
    if(username===undefined){   // if(!username) == if(username===undefined)
        return "please enter username"
    }
    return `${username } justloggedin`
}
const ans = loggedinMessage("prince") // if argument is not given function return undefined
console.log(ans);



function numbers(...num1){         // rest == spread  
    return num1
}
console.log(numbers(200,300,400));



const user = {
    name :"prince pal",
    price:1000
}
function handleobject(anyobject){
    console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`); 
}
//     handleobject(user)               method 1
      handleobject(
    {
    name :"prince pal",
    price:1000
      }
           )

// array passing
const new_array =[200,300,4000,500]
function array(givenarray){
     return givenarray[1]  
}    
console.log(array(new_array));
 

