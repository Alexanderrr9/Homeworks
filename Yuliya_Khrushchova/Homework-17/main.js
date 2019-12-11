var mainButton = document.getElementsByClassName('primary_button')[0],
	resetButton = document.getElementsByClassName('reset_button')[0],
	saveButton = document.getElementsByClassName('save_button')[0],
	secondarySection = document.getElementsByClassName('secondary_buttons')[0],
	minField = document.getElementsByClassName('minutes')[0],
	secField = document.getElementsByClassName('seconds')[0],
	msField = document.getElementsByClassName('milliseconds')[0],
	records = document.getElementsByClassName('saved_records-container')[0],
	time, minutes = 0, seconds = 0, milliseconds = 0, count = 0;

window.onunload = function () {
	sessionStorage.clear();
	
	sessionStorage.setItem('status', JSON.stringify(mainButton.dataset.status));
	sessionStorage.setItem('mainB', JSON.stringify(mainButton.className));
	sessionStorage.setItem('min', JSON.stringify(minField.innerText));
	sessionStorage.setItem('sec', JSON.stringify(secField.innerText));
	sessionStorage.setItem('ms', JSON.stringify(msField.innerText));
	sessionStorage.setItem('resetB', JSON.stringify(resetButton.className));
	sessionStorage.setItem('saveB', JSON.stringify(saveButton.className));
	sessionStorage.setItem('count', JSON.stringify(count));
	sessionStorage.setItem('records', JSON.stringify(records.innerText));
};

window.onload = function () {
	if (sessionStorage.length > 0) {
		minutes = JSON.parse(sessionStorage.getItem('min'));
		seconds = JSON.parse(sessionStorage.getItem('sec'));
		milliseconds = JSON.parse(sessionStorage.getItem('ms'));
		count=JSON.parse(sessionStorage.getItem('count'));
		
		mainButton.dataset.status = JSON.parse(sessionStorage.getItem('status'));
		mainButton.className = JSON.parse(sessionStorage.getItem('mainB'));
		minField.innerText = minutes;
		secField.innerText = seconds;
		msField.innerText = milliseconds;
		resetButton.className = JSON.parse(sessionStorage.getItem('resetB'));
		saveButton.className = JSON.parse(sessionStorage.getItem('saveB'));
		records.innerText = JSON.parse(sessionStorage.getItem('records'));
		
		sessionStorage.clear();
		
		switch (mainButton.dataset.status) {
			case 'stop': {
				initializeTimer();
				mainButton.innerText = 'STOP';
				break;
			}
			case 'run': {
				mainButton.innerText = 'RUN';
				break;
			}
		}
	}
};

mainButton.addEventListener('click', function (e) {
		var btn = e.target;
		
		switch (btn.dataset.status) {
			case 'start': {
				applyStopState(btn);
				initializeTimer();
				showSecondaryBtns();
				break;
			}
			case 'stop': {
				applyRunState(btn);
				stopTimer();
				break;
			}
			case 'run': {
				applyStopState(btn);
				initializeTimer();
				break;
			}
		}
	}
	, false);

secondarySection.addEventListener('click', function (e) {
	var target = e.target;
	if (target.className === 'reset_button') {
		if (mainButton.classList.contains('hidden')) {
			mainButton.classList.remove('hidden');
		}
		resetTimer();
		hideSecondaryBtns();
		records.innerText = '';
		count = 0;
	}
	
	if (target.className === 'save_button') {
		addRecord(minField.innerText, secField.innerText, msField.innerText);
	}
	
}, false);

function showSecondaryBtns() {
	resetButton.classList.remove('hidden');
	saveButton.classList.remove('hidden');
}

function hideSecondaryBtns() {
	resetButton.classList.add('hidden');
	saveButton.classList.add('hidden');
}

function initializeTimer() {
	clearInterval(time);
	time = setInterval(startTimer, 10);
}

var startTimer = function () {
	++milliseconds;
	
	if (milliseconds < 10) {
		msField.innerHTML = '0' + milliseconds;
	}
	
	if (milliseconds > 9) {
		msField.innerHTML = milliseconds;
	}
	
	if (milliseconds > 99) {
		++seconds;
		secField.innerHTML = '0' + seconds;
		milliseconds = 0;
		msField.innerHTML = '0' + milliseconds;
	}
	
	if (seconds > 9) {
		secField.innerHTML = seconds;
	}
	
	if (seconds > 59) {
		++minutes;
		minField.innerHTML = '0' + minutes;
		seconds = 0;
		secField.innerHTML = '0' + seconds;
	}
	
	if (minutes > 9) {
		minField.innerHTML = minutes;
	}
	
	if (minutes === 60) {
		stopTimer();
		saveButton.classList.add('hidden');
		mainButton.classList.add('hidden');
		applyStartState(mainButton);
	}
};

function stopTimer() {
	clearInterval(time);
}

function resetTimer() {
	clearInterval(time);
	
	minutes = '00';
	seconds = '00';
	milliseconds = '00';
	minField.innerHTML = minutes;
	secField.innerHTML = seconds;
	msField.innerHTML = milliseconds;
	
	applyStartState(mainButton);
}

function addRecord(m, s, ms) {
	records.innerText += `${++count}. ${m} : ${s} : ${ms};\n`;
}

function applyStartState(btn) {
	btn.dataset.status = 'start';
	btn.innerText = 'START';
}

function applyStopState(btn) {
	btn.dataset.status = 'stop';
	btn.innerText = 'STOP';
}

function applyRunState(btn) {
	btn.dataset.status = 'run';
	btn.innerText = 'RUN';
}