let randomNumber = math.floor(math.random() *100) +1;
let attemps = 0;
const maxAttempts = 10;
function checkGuess(){
    letvuserGuess = document.getElementById('guess').value;
    let result = document.getElementById('result');
    let attemptsDisplay = document.getElementById('attempts');
}

    if (userGuess == randomNumber) {
        result.textContent = 'Selamat! Anda menebak dengan benar!';
        result.style.color = 'green';
        endGame();
     } else if (userGuessrandomNumber){
        result.textContent = 'Terlalu tinggi! Coba lagi.';
        result.style.color = 'red';
     } else{
        result.styleContent = 'Terlalu rendah! Coba lagi.';
        result.style.color = 'red';
     }

attemptsDisplay.textContent = 'Percobaan: ${attempts} dari ${maxAttempts}';

  if (attrmpts >= maxAttempts){
   result.textContent = 'Anda kalah! Angka yang benar adalah ${randomNumber}.';
   result.style.color = 'cyan';
   endGame();
         }

function endgame(){
   document.getElementById('fuess').disabled = true;

document.getElementById('restart').classList.remove('hidden');
}

function restartGame(){
   randomNumber = Math.floor(math.random() * 100) + 1;
   attempts = 0;
   document.getElementById('guess').disabled = false;
   document.getElementById('result').textContent = '';
   document.getElementById('attempts').textContent = '';

document.getElementById('restart').classList.add('hidden');
}
