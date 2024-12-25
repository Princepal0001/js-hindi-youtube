  /*            for in
            
            for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
 }
  
  */

const myobject = {
   js : 'java script',
  cpp : 'C plus plus',
  rb :"ruby",
  swift : "swift by apple"
}
for (const key in myobject) {
  // console.log(key ,' :- ', myobject[key]);
}

const programing=["cpp","java","html","python"]
for (const key in programing) {
  console.log(key , ":-" , programing[key]);
}
