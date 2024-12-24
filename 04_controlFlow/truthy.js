//  {
// falsey values ;
//  false, 0 , -0 , BigInt 0n ,"",null,undefined,NaN
//        }


// { 
//  truthy values;
//  "0","false",'false'," ",[],{},function(){}
//     } 

const userEmail=[];
if(userEmail){
    console.log("got user email");
}
else {
    console.log("not get user email");
    
}


if(userEmail.length===0){
    console.log("array is empty");  
}

const emptyobj = {}
if(Object.keys(emptyobj).length===0){
    console.log("obj is empty");
    
}


//******* nulish coalescing operator(??) null undefined ********************/

let val1;
val1 = 5 ?? 10
console.log(val1);

val1= null ?? 10
console.log(val1);

val1= undefined ?? 15
console.log(val1);

val1= null ?? 15 ?? 25
console.log(val1);



//******* terniary operator********************/

//  condition ? true : false
const iceTeaPrice=100;
iceTeaPrice>=80 ? console.log("expensive") : console.log("not expensive");






