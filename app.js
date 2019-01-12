//Define variable

let min = 1,
	max = 10,
	winnigNumber = randomNumber(min, max),
	guessLeft = 3;

//Difine UI Varibles

const 	gameWrapper = document.querySelector('.container'),
		minNumberInput = document.querySelector('.minNum'),
		maxNumberInput = document.querySelector('.maxNum'),
		inputNumber = document.querySelector('#number'),
		submitBtn = document.querySelector('#submit-btn'),
		messageInput = document.querySelector('.message');

minNumberInput.textContent = min;
maxNumberInput.textContent = max;

gameWrapper.addEventListener('mousedown', function(e){

	if(e.target.classList.contains('play_again')){
		window.location.reload();
	}
})

submitBtn.addEventListener('click', numberGuess);

function numberGuess(){
	let number;
	number = parseInt(inputNumber.value);

	if(isNaN(number) || number > max || number < min){
		showMessage(`Please Enter between ${min} to ${max}`, 'red');
	}
	else{
		guessLeft -= 1;
		if(winnigNumber === number){
			gameOver(true, `You are right, the number is ${number}`);
		}
		else{

			if(guessLeft === 0){
				gameOver(false, `You lost, the number was ${winnigNumber}`);
			}
			else{
				showMessage(`${number} is not right, you have ${guessLeft} guess left`, 'red');
			}
		}
	}
}

function showMessage(msg, color){
	messageInput.textContent = msg;
	messageInput.style.color = color;
	inputNumber.style.borderColor = color;
}

function gameOver(won, msg){
	let color;
	
	won === true ? color = 'green' : color = 'red';
	
	inputNumber.disabled = true;

	submitBtn.className += ' play_again';

	submitBtn.textContent = 'Play Again';

	showMessage(msg, color);
}

function randomNumber(min, max){
	return Math.round(Math.random() * max + 1 - min); 
}