// const clock = document.querySelector('#clock') // method 1
const clock = document.getElementById('clock')
  

//  setInterval(fuction(){},refreshTime(1000))   run always after 1s;

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML= date.toLocaleTimeString()
},1000)