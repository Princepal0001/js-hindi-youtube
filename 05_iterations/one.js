   // for 

//    for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//    }

// for(let i=0;i<=10;i++){
//     const ans=i;
//     if(i==5){
//         console.log("5 is the best number");
//     }
//     console.log(ans); 
// }
      
               // **** nested loop ****


// for(let i=0;i<=10;i++){
//    console.log(`outer loop values ${i}`);
//    for(let j=0;j<=10;j++){
//     console.log(`inner loop values ${j} inner loop values from outer ${i}`);
//    }
   
// }
   

          // ****** array 

const arr = ["batman","supreman","spiderman"];
console.log(arr.length);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

                    //******* break and continue;


for (let i = 1; i <= 20; i++) {
    if(i===5) continue;
    if(i===19) {
        console.log(`detected 19`);
        break;
    }
    console.log(i);   
}