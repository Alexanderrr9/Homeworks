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


window.onload = function () {
    var localMSMS = localStorage.getItem('msms');
    var localSS = localStorage.getItem('ss');
    var localMM = localStorage.getItem('mm');
    var localBtnState = localStorage.getItem('startBtnState');
    if ((localMSMS && localMSMS !== '0') && (localSS && localSS !== '0')) {
        msms = +localMSMS;
        ss = +localSS;
        mm = +localMM;
        console.log(localBtnState);
        startBtn.dataset.state = localBtnState;
        timeMsMs.innerText = convertTime(msms);
        timeSs.innerText = convertTime(ss);
        timeMm.innerText = convertTime(mm);
        optionBtn.hidden = false;
        startMSMS()
    }
};


function startMSMS() {
    stateStartBtn = startBtn.dataset.state;
    if (stateStartBtn === 'start') {
        startBtn.innerText = 'Приостановить';
        startBtn.dataset.state = 'stop';
        optionBtn.children[0].hidden = false;
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
        startBtn.dataset.state = 'start';
        optionBtn.children[0].hidden = true;
        document.getElementsByClassName('controlButton')[0].classList.add('btnHide')

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
    document.getElementsByClassName('controlButton')[0].classList.remove('btnHide')
    optionBtn.hidden = true;
    savedTimers.innerHTML = ''

}

function saveTimer() {
    savedTimers.insertAdjacentHTML("beforeend", '<p>' + i + '. ' + convertTime(mm) + ' ' + ' ' + convertTime(ss) + ' ' + convertTime(msms) + '</p>')
    i++
}

window.addEventListener("unload", function () {
    localStorage.setItem('msms', msms);
    localStorage.setItem('ss', ss);
    localStorage.setItem('mm', mm);
    if (startBtn.dataset.state === 'start') {
        localStorage.setItem('startBtnState', 'stop')
    } else if (startBtn.dataset.state === 'stop') {
        localStorage.setItem('startBtnState', 'start')
    }


});
