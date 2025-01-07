let randonNumber = parseInt(Math.random() * 100 + 1);
console.log(randonNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const remainingGuess = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numOfGuess = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click',(e) => { 
            e.preventDefault();
            const input = parseInt(userInput.value);
            console.log(input);
            validateGuess(input);

    })
}
function validateGuess(guess){
 if(isNaN(guess)){
    alert('please enter a num')
 }else if(guess < 1 ) { 
    alert('please enter num greater than 1')
 }else if(guess > 100){
    alert('please enter num less than 100')
 }else{
    prevGuess.push(guess);
    if(numOfGuess >=10){ 
        displayGuess(guess);
        displayMessage(`Game over, Random number was ${randonNumber}`)
        endGame();
    }else { 
        displayGuess(guess);
        checkGuess(guess);
    }
 }
}

function checkGuess(guess){
if(guess === randonNumber) { 
   displayMessage(`you guessed it right`)
   endGame()
}else if (guess < randonNumber){
   displayMessage(`your number is less than randomNumber`)
}else if (guess > randonNumber){
   displayMessage(`your number is greater than randomNumber`)
}
}

function displayGuess(guess){
   userInput.value= ''
   remainingGuess.innerHTML += `${guess}, `
   numOfGuess++;
   lastResult.innerHTML = `${11 - numOfGuess}`
}

function displayMessage(message){
   lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function endGame() { 
   userInput.value = ''
   userInput.setAttribute('disabled', '')
   p.classList.add('button')
   p.innerHTML = `<h2 id = 'newGame'>Click here for New Game </h2>`
   p.style.background = 'blue'
   startOver.appendChild(p)
   playGame = false
   newGame();
}


function newGame(){
   const newButton = document.querySelector('#newGame');
   newButton.addEventListener('click',function(e) {
      randonNumber =   parseInt(Math.random() * 50 + 1);
      prevGuess = []
      numOfGuess = 1
      remainingGuess.innerHTML = '',
      lastResult.innerHTML = `${11 - numOfGuess}`
      userInput.removeAttribute('disabled');
      startOver.appendChild(p);
      playGame = true;
   })
}




