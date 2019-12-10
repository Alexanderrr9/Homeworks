// Задание 1 ---------------------------------------------------------------------------------------

var startButton = document.getElementById('startButton');
var displayMin = document.getElementById('min');
var displaySec = document.getElementById('sec');
var displayMs = document.getElementById('ms');
var forResetButton = document.getElementById('forResetButton');
var forSaveButton = document.getElementById('forSaveButton');
var forTimeSave = document.getElementById('forTimeSave');

var ms = 0;
var sec = 0;
var min = 0;
var saveCounter = 0;

startButton.onclick = checkStatus;
forResetButton.onclick = resetTimer;
forSaveButton.onclick = saveTimer;

checkDataFromStorage();

function checkDataFromStorage () {
    if (localStorage.getItem('ms') || localStorage.getItem('sec') || localStorage.getItem('min') || localStorage.getItem('counter')) {
        getTimeFromStorage();
        displayTime();
        getTimerFromStorage();
        if (localStorage.getItem('status') === 'Stop') {
            startButton.dataset.status = 'Stop';
            startButton.innerText = 'Stop';
            startTimer();
            drawButtons();
        }
        else {
            startButton.dataset.status = 'Start';
            startButton.innerText = 'Start';
            if (ms !== '0' || sec !== '0' || min !== '0' || saveCounter !== '0') {
                drawButtons();
            }
        }
    }
}

function drawButtons () {
    forResetButton.innerHTML = '<button id="resetButton">Reset</button>';
    forSaveButton.innerHTML = '<button id="saveButton">Save</button>';
}

function saveTimeInStorage () {
    localStorage.setItem('ms', ms);
    localStorage.setItem('sec', sec);
    localStorage.setItem('min', min);
    localStorage.setItem('status', startButton.dataset.status);
}

function saveTimerInStorage() {
    localStorage.setItem('counter', saveCounter);
    localStorage.setItem('timer', forTimeSave.innerHTML);
}

function getTimeFromStorage() {
    ms = localStorage.getItem('ms');
    sec = localStorage.getItem('sec');
    min = localStorage.getItem('min');
    saveCounter = localStorage.getItem('counter');
}

function getTimerFromStorage() {
    forTimeSave.innerHTML = localStorage.getItem('timer');
}

function checkStatus() {
    if (startButton.innerText === 'Start') {
        startButton.dataset.status = 'Stop';
        startButton.innerText = 'Stop';
        drawButtons();
        startTimer();
    } else {
        startButton.innerText = 'Start';
        startButton.dataset.status = 'Start';
        saveTimeInStorage();
        saveTimerInStorage();
    }
}

function startTimer () {
    var timer = setInterval(function() {
        if (startButton.dataset.status === 'Stop') {
            ++ms;
            if (ms === 100) {
                ms = 0;
                ++sec;
                if (sec === 60) {
                    sec = 0;
                    ++min;
                    if (min === 60) {
                        clearInterval(timer);
                        resetTime();
                        forSaveButton.innerText = '';
                        startButton.classList.add('none');
                    }
                }
            }
            displayTime();
            saveTimeInStorage();
        } else {
            clearInterval(timer);
        }
    }, 10)
}

function displayTime () {
    if (ms <= 9) {
        displayMs.innerText = '0' + ms;
    } else if (ms <= 99) {
        displayMs.innerText = ms;
    } else {
        displayMs.innerText = '00';
    }
    if (sec <= 9) {
        displaySec.innerText = '0' + sec;
    } else if (sec <= 59) {
        displaySec.innerText = sec;
    } else {
        displaySec.innerText = '00';
    }
    if (min <= 9) {
        displayMin.innerText = '0' + min;
    } else if (min <= 59) {
        displayMin.innerText = min;
    } else {
        displayMin.innerText = '00';
    }
}

function resetTime () {
    ms = 0;
    sec = 0;
    min = 0;
    saveCounter = 0;
    displayMin.innerText = '00';
    displaySec.innerText = '00';
    displayMs.innerText = '00';
}

function resetTimer () {
    resetTime();
    startButton.innerText = 'Start';
    startButton.dataset.status = 'Start';
    startButton.classList.remove('none');
    forResetButton.innerText = '';
    forSaveButton.innerText = '';
    forTimeSave.innerText = '';
    saveTimerInStorage();
    saveTimeInStorage();
}

function saveTimer () {
    ++saveCounter;
    forTimeSave.innerHTML += '<p>' + saveCounter + ') ' + displayMin.innerText + ' : '+ displaySec.innerText + ' : ' + displayMs.innerText + '</p>';
    saveTimerInStorage();
}