const coding  = ["js","ruby","java","python","cpp"]

coding.forEach( function (item) {
    // console.log(item);
})
coding.forEach((val)=>{
    // console.log(val); 
})

function print(item){
    // console.log(item);
}
// coding.forEach(print());


coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})


const mycoding = [
    {
        languageName : "java",
        language :"java"
    },
    {
        languageName : "python",
        language :"py"
    },
    {
        languageName : "javascript",
        language :"js"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName);
    
})