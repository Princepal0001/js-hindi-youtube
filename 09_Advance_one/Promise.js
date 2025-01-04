// promise one
const promiseone = new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log("async  task is completed")
        resolve();
     },1000)
})
promiseone.then(function(){
    console.log("promise Consumed");
})

 // promise 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async call 2")
        resolve();
    },1000)
}).then(function(){
    console.log("promise 2 consumed");
})

// promise three

const promise3 = new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log("three async is called");
        resolve({username : "prince",Email : "prince@gmail.com"});
     },1000)
})
promise3.then(function(user){
    console.log(user);
})


// promise four

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"prince",gmail:"prince@gmail.com"})
        }
        else{
            reject('error: somthing went wrong')
        }

    },1000)
})

promise4
.then((user)=>{
     console.log(user);
     return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
  console.log(error);
})
.finally(function(){
console.log("the promise either resolved or rejected")
})

// promise five
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username:"javacript",gmail:"prince@gmail.com"})
        }
        else{
            reject('error: js went wrong')
        }

    },1000)
})
async function consumepromisefive(){
    try {
        const response = await promise5
    console.log(response);
        
    } catch (error) {
         console.log(error);
    }
}
consumepromisefive()


//. method 1
// async function getuserdata() {
//     try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users') 
//        const data= await response.json();
//        console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getuserdata();


// method 2

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
   console.log(data);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("resolved or reject");
})
    


