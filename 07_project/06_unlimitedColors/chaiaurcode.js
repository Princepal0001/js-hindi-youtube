const randomcolor = function(){
    const hex ='0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
    color +=hex[Math.floor(Math.random()*16)]
    }
    return color
 }
 // console.log(parseInt(Math.random()*16));
 // console.log(Math.floor(Math.random()*16));
 console.log(randomcolor());
 
 let intervalid
 const startChangingColor =  function(){
  function changebgcolor(){
    document.body.style.backgroundColor=randomcolor();
   }
   if(!intervalid){
    intervalid=setInterval(changebgcolor,1000);}
 }
 const stopChangingColor =  function(){
   clearInterval(intervalid)
   intervalid=null;
 }
 document.querySelector("#start").addEventListener('click',startChangingColor)
 
 document.querySelector("#stop").addEventListener('click',stopChangingColor)