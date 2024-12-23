// let a=300 // global
if(true){
    let a=10
    const b=20
    var c=30                    // block scope
    console.log("inner a : ", a)
}
// // console.log(a);
// // console.log(b);
// console.log(a);


function one(){
    const username="prince"
    // bache bado se icecream le skte hai par bade bacho se nii
    function two(){
        const website = "youtube"
       console.log(username);
       
    }

    // console.log(website);  // it is not run
    two() 
}
one()



// +++++++++++++++++++++++++++ interesting   ++++++++++++++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num+1
}
addtwo(5) // it doent execute because it insilaize before the declearation
const addtwo = function(num){
    return num+2
}
console.log(addtwo(5));


 