  //  this -> is used only in object not in functons
const user={
    username:"prince",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
console.log(this);   //**  in engine the output is empty{} but in brouser->console-> output is window(object)

// function code(){
//     const username ="prince"  ///this is not used in function
//     console.log(this.username);
// }
// code()

const code =function(){
    const username ="prince"  ///this is not used in function
    console.log(this.username);
    console.log(this);
    

}
code()

// very imp ARROW function ********************

const chai =  () => {
    const username ="prince" 
    console.log(this.username);
    console.log(this);
}
chai()

// method 1 when we use curly braces then return is compalsory
const addtwoNum = (num1,num2)=>{
    return num1+num2
}
console.log(addtwoNum(3,4));
// method 2
const addtwo2 = (num1,num2)=> num1+num2  // (num1+num2) == num1+num2
// const addtwo2 = (num1,num2)=> (num1+num2) 
console.log(addtwo2(4,4));


// for object return
const addtwo3 = (num1,num2)=> ({username : "prince"})
console.log(addtwo3(3,4));



