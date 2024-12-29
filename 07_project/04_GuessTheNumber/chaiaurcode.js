let random = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guess_slot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworHi=document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevguess=[];
let numguess=1;

let playGame=true;
 
if(playGame){
  submit.addEventListener('click',function(event){
    event.preventDefault();
    const guess=parseInt(userInput.value)
    console.log(guess);
    validateguessuess(guess)
  })
}

function validateguessuess(guess){
   if(isNaN(guess)){
     alert('please enter a valid no');
   }
   else if(guess<1){
     alert('please enter a valid number more than 1');
   }
   else if(guess>100){
     alert('please enter a valid number number less than 100');
   }
   else{
      prevguess.push(guess);
      if(numguess===11){
        displayguess(guess)
        displayMessage(`game over . Random number was ${random}`)
        endgame();
      }
      else{
        displayguess(guess)
        checkGuess(guess)
      }
    }

}

function checkGuess(guess){
  if(random==guess){
    displayMessage(`you guess a right number`)
    end()
  }
  else if(guess<random){
    displayMessage(`number is Too low `)
  }
  else if(random<guess){
    displayMessage(`number is Too high`)
  }
}


function displayguess(guess){
   userInput.value=''
   guess_slot.innerHTML+=`${guess} `
   numguess++;
   remaining.innerHTML=`${11-numguess}`
}

function displayMessage(message){
   loworHi.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
   userInput.value=''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML=`<h2 id = "newgame">Start new Game</h2>`
   startOver.appendChild(p)
   playGame=false;
   newgame();
}
function newgame(){
 const newgameButton=document.querySelector('#newgame')
 newgameButton.addEventListener('click',function(event){
   random=parseInt(Math.random()*100 + 1);
   prevguess=[];
    numguess=1;
    guess_slot.innerHTML='';
    remaining.innerHTML=`${11-numguess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
   playGame=true;
 })
}

