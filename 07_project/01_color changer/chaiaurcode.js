const buttons = document.querySelectorAll('.button')
const body =document.querySelector("body")
buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(event){
         console.log(event)
         console.log(event.target)
         // method 1
       /*  
       if(event.target.id==='grey'){
           body.style.backgroundColor=event.target.id // 'grey'
         }
         else if(event.target.id==='yellow'){
          body.style.backgroundColor=event.target.id
         }
         else if(event.target.id==='blue'){
          body.style.backgroundColor=event.target.id
         }
         else  body.style.backgroundColor=event.target.id

       */
      const colors=event.target.id
      switch(colors){
        case 'grey':
        body.style.backgroundColor=event.target.id;
        break;

        case 'yellow':
        body.style.backgroundColor=event.target.id;
        break;

        case 'blue':
        body.style.backgroundColor=event.target.id;
        break;
        
        case 'pink':
        body.style.backgroundColor=event.target.id;
        break;

        default :
        body.style.backgroundColor=event.target.id;
      }
    })
})