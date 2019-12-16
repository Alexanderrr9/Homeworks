var startButton = document.getElementById('startStop');
var resetButton = document.getElementById('reset');
var saveButton = document.getElementById('save');

var displayMillisec = document.querySelector('.milliseconds');
var displaySeconds = document.querySelector('.seconds');
var displayMinutes = document.querySelector('.minutes');
var infoList = document.querySelector('.info-list');

var counter = 0;
var millisec = 0;
var seconds = 0;
var minutes = 0;
var interval;
var buttonStatus = startButton.dataset.status;

startButton.addEventListener('click', startStop, false);
resetButton.addEventListener('click', reset, false);
saveButton.addEventListener('click', save, false);

function startStop() {
	switch (buttonStatus) {

		case 'stopped':
			startCount();
			startButton.innerHTML = 'Stop';
			buttonStatus = 'started';
			break;

		case 'started':
			stopCount();
			startButton.innerHTML = 'Run';
			buttonStatus = 'stopped';
			break;
	}
	resetButton.classList.remove('hide');
	saveButton.classList.remove('hide');
}

function reset() {
	stopCount();
	counter = 0;
	buttonStatus = 'stopped';
	displayMillisec.innerHTML = '00';
	displaySeconds.innerHTML = '00';
	displayMinutes.innerHTML = '00';
	startButton.innerHTML = 'Start';
	infoList.innerHTML = '';
	startButton.classList.remove('hide');
	resetButton.classList.add('hide');
	saveButton.classList.add('hide');
}

function save() {
	var info = document.querySelector('.info-list');
	var item = document.createElement('li');
	item.innerHTML = displayMinutes.innerHTML + ':' + displaySeconds.innerHTML + ':' + displayMillisec.innerHTML;
	info.appendChild(item);
}

function startCount() {
	interval = setInterval(stopWatch, 10);
}

function stopCount() {
	clearInterval(interval);
}

function stopWatch() {
	counter++;
	millisec = Math.floor(counter % 100);
	seconds = Math.floor(counter / 100 % 60);
	minutes = Math.floor(counter / 100 / 60);

	if (minutes === 60) {
		stopCount();
		startButton.classList.add('hide');
		saveButton.classList.add('hide');
	}

	(millisec < 10) ? displayMillisec.innerHTML = '0' + millisec : displayMillisec.innerHTML = millisec;
	(seconds < 10) ? displaySeconds.innerHTML = '0' + seconds : displaySeconds.innerHTML = seconds;
	(minutes < 10) ? displayMinutes.innerHTML = '0' + minutes : displayMinutes.innerHTML = minutes;
}







