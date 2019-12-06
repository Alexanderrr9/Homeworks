var main = document.querySelector('main'),
		startButton = document.querySelector('main button'),
		startButtonDiv = document.querySelector('main .start-button'),
		controlButtons = document.querySelector('.control-buttons'),
		mnBoard = document.querySelector('.scoreboard .minutes'),
		scBoard = document.querySelector('.scoreboard .seconds'),
		msBoard = document.querySelector('.scoreboard .miliseconds'),
		resultContainer = document.querySelector('.results'),
		msCounter = scCounter = mnCounter = 1,
		timerId;

if(localStorage.getItem('buttonData') === 'stop') {
	changeData('stop');
	dataFromLocalStorage();

	timerId = setInterval(timer,10);

} else if (localStorage.getItem('buttonData') === 'run') {
	changeData('run');
	dataFromLocalStorage();
	
} else {
	localStorage.clear();
}

startButtonDiv.onclick = function(e) {
	if(e.target.tagName === 'BUTTON') {

		if (startButton.dataset.state === 'start') {
			changeData('stop');

			if(!controlButtons.innerText) {
				controlButtons.insertAdjacentHTML('afterbegin','<button class="reset">RESET</button>'+
																					'<button class="save">SAVE</button>');
				localStorage.setItem('controlButtons',controlButtons.innerHTML);
			}

			timerId = setInterval(timer,10);

		} else if (startButton.dataset.state === 'stop') {
				changeData('run');
				clearInterval(timerId);

		} else if (startButton.dataset.state === 'run') {
				changeData('stop');
				timerId = setInterval(timer,10);
		}
	}
}

controlButtons.onclick = function(e) {
	var target = e.target;
	
	if (target.classList.contains('reset')) {
		reset();
	}

	if (target.classList.contains('save')) {
		var resultNumber = resultContainer.getElementsByTagName('div').length;

	if(startButton.dataset.state === 'run') {
		resultContainer.insertAdjacentHTML('beforeend','<div>' + (resultNumber+1) + ') '
			+ (mnCounter-1) + ': ' + (scCounter-1) + ': '
			+ (msCounter-1) + '</div>');
	}

	if(startButton.dataset.state === 'stop') {
		resultContainer.insertAdjacentHTML('beforeend','<div>' + (resultNumber+1) + ') '
			+ (mnCounter-1) + ': ' + (scCounter-1) + ': '
			+ (msCounter) + '</div>');
	}

		localStorage.setItem('results',resultContainer.innerHTML);
	}
}

function timer() {
	localStorage.setItem('ms',msCounter);
	msCounter = timeCounter(msBoard, msCounter);
	
	if (msCounter >	100) {
		msCounter = 1;
		localStorage.setItem('sc',scCounter);
		timeCounter(msBoard, 0);
		scCounter = timeCounter(scBoard, scCounter);
		
	}

	if(scCounter > 60) {
		scCounter = 1;
		localStorage.setItem('mn',mnCounter);
		timeCounter(scBoard, 0);
		mnCounter = timeCounter(mnBoard, mnCounter);
		
	}

	if(mnCounter > 60) {
		clearInterval(timerId);
		localStorage.clear();
		scBoard.innerText = msBoard.innerText ='00';
		mnBoard.innerText = '60';
		startButtonDiv.innerText ='';
		controlButtons.removeChild(controlButtons.querySelector('.save'));
	}
}

function timeCounter(board, counter) {
	if(counter <= 9) {
		board.innerText = '0' + counter++;
	} else if (!counter) {
		board.innerText = '00';
	} else {
		board.innerText = counter++;
	}

	return counter;
}

function reset() {
	localStorage.clear();

	if(!startButtonDiv.innerText) {
		changeData('start');
		startButtonDiv.insertAdjacentHTML('afterbegin','<button data-state="start">START</button>');

	} else {
		changeData('start');
	}

	clearInterval(timerId);
	mnBoard.innerText = scBoard.innerText = msBoard.innerText ='00';
	controlButtons.innerText = '';
	resultContainer.innerText = '';
	msCounter = scCounter = mnCounter = 1;
}

function changeData(dataState) {
	startButton.dataset.state = dataState;
	startButton.innerText = dataState.toUpperCase();
	localStorage.setItem('buttonData',dataState);
}

function dataFromLocalStorage() {
	
	msCounter = +localStorage.getItem('ms') + 1;
	scCounter = +localStorage.getItem('sc') + 1;
	mnCounter = +localStorage.getItem('mn') + 1;

	timeCounter(msBoard, localStorage.getItem('ms'));
	timeCounter(scBoard, localStorage.getItem('sc'));
	timeCounter(mnBoard, localStorage.getItem('mn'));

	controlButtons.innerHTML = localStorage.getItem('controlButtons');
	resultContainer.innerHTML = localStorage.getItem('results');
}