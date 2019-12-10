var mm = 0;
var ss = 0;
var msms = 0;

var timeMm = document.getElementById('mm');
var timeSs = document.getElementById('ss');
var timeMsMs = document.getElementById('msms');

var startBtn = document.getElementById('startBtn');
var optionBtn = document.getElementById('optionBtn');

var savedTimers = document.getElementById('savedTimer');

var timerIdGlobal;

var i = 1; // счетчик сохраненных таймеров

function startMSMS() {
    stateStartBtn = startBtn.dataset.state;
    if (stateStartBtn === 'start' && mm === 60) {
        clearTime()
    }
    if (stateStartBtn === 'start') {
        startBtn.innerText = 'Приостановить';
        startBtn.dataset.state = 'stop';
        optionBtn.hidden = false;
        var timerID = setInterval(function () {
            increaseMSMS()
        }, 10);
        timerIdGlobal = timerID
    } else if (stateStartBtn === 'stop') {
        startBtn.innerText = 'Запустить';
        startBtn.dataset.state = 'start';
        clearInterval(timerIdGlobal)
    }
}

function increaseMSMS() {
    msms += 1;
    timeMsMs.innerText = convertTime(msms);
    if (msms === 99) {
        msms = 0;
        increaseSS()
    }
}

function increaseSS() {
    ss += 1;
    timeSs.innerText = convertTime(ss);
    if (ss === 60) {
        ss = 0;
        timeSs.innerText = convertTime(ss);
        increaseMM()
    }
}

function increaseMM() {
    mm += 1;
    timeMm.innerText = convertTime(mm);

    // Достигли максимального значения секундомера
    if (mm === 60) {
        clearInterval(timerIdGlobal);
        timeMsMs.innerText = '00';
        startBtn.dataset.state = 'start'
    }
}

function convertTime(type) {
    if (type.toString().length === 1) {
        return type = '0' + type;
    } else return type;
}

function clearTime() {
    clearInterval(timerIdGlobal);
    mm = 0;
    ss = 0;
    msms = 0;
    i = 1;
    timeMsMs.innerText = '00';
    timeSs.innerText = '00';
    timeMm.innerText = '00';
    startBtn.innerText = 'Запустить';
    startBtn.dataset.state = 'start';
    optionBtn.hidden = true;
    savedTimers.innerHTML =''

}

function saveTimer() {
    savedTimers.insertAdjacentHTML("beforeend", '<p>' + i + '. ' + convertTime(mm) + ' ' + ' ' +  convertTime(ss) + ' ' +  convertTime(msms) + '</p>')
    i++
}
