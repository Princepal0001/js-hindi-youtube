// singleton makes only in contractor method (object.create)


   // object literals
 const mySym = Symbol("key1"); 

 // note symbol denoted in object [symbolName] for output  console.log(objectName[symbolName]);

   const jsUser = {
      name : "prince",
      "full name" : "prince pal",
      [mySym]: "mykey1",
      age : 21,
      location : "Delhi",
      email : "prince@microsoft.com",
      isOnline : "false",
      onlineDays : ["monday","friday"],
   }
   console.log(jsUser.email); // method 1
   console.log(jsUser["email"]);  // method 2 best
   console.log(jsUser["full name"]);
   console.log(jsUser[mySym]);

   jsUser.email="prince@google.com"
   
   console.log(jsUser.email);
   
//    Object.freeze(jsUser)

   jsUser.email="prince@chatgpt.com"
   console.log(jsUser);
   
 
   jsUser.greeting = function(){
    console.log("hello js user");
    }
   jsUser.greetingtwo = function(){
    console.log(`hello js user ${this.name}`);
    }
    
   
    console.log(jsUser.greeting); //  [Function (anonymous)]
    console.log(jsUser.greeting());  // hello js user 
                                    //  undefined
    console.log(jsUser.greetingtwo());
    




   