const form = document.querySelector('form')

// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(event){
    event.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  
  if(height==='' || height<0 || isNaN(height)){
     results.innerHTML=`please give a valid height ${height}`
  } 
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`please give a valid weight ${weight}`
   } 
   else{
    const BMI=(weight/((height*height)/10000)).toFixed(2);
    // show the result
  let condition='';
    if(BMI<18.6){
      condition="Under Weight";
       }
   else if(BMI>=18.6 && BMI<=24.9){
     condition="Normal Weight";
      }
   else  condition="Over Weight";
    results.innerHTML=`<span>${BMI}  ${condition}</span>`;
 
  }
    
})