// immediately invoked function expression (IIFE).  ()()

// ()(); used to end the iife otherwise is not execute the another One

// iife is used to remove the declaration of global variable pollution 
(function chai(){
    console.log(`DB Connected`);
    
})();

( (name) => {
   console.log(`DB Connected two ${name}`);
})("prince");