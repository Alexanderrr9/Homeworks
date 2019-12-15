/*
Домашнее задание по таймеру:
  Задание 1:
    Написать свой секундомер в формате mm:ss:msms (по 2 цифры в каждом параметре).
    Изначально на странице должна быть кнопка "Запустить". При запуске секундомера текст кнопки меняется на "Приостановить".
    Если пользователь нажимает на кнопку "Приостановить" - ее текст должен измениться на "Возобновить".
    Использовать data-атрибут, хранящий состояние кнопки.
    Также после старта работы секундомера должны появиться кнопки "Сохранить отметку" и "Сбросить".
    Кнопки должны работать соответственным образом (по клику на кнопку "Сбросить" секундомер должен полностью вернуться
    в изначальное состояние).
    Максимальное количество минут - 60. После этого таймер останавливается (тестировать на значениях поменьше). Должны
    остаться только кнопка "Сбросить" и метки.
    * Секундомер должен работать после перезагрузки страницы.
    (Чтобы время шло со скоростью реального - запускать интервал с промежутком в 10 ms, увеличивать значение ms на 1
    на каждой итерации и считать их до 100)
*/
var btnStart = document.getElementById('start_button'),
    btnReset = document.getElementById('reset_button'),
    btnSave = document.getElementById('save_button'),
    minutesInput = document.getElementById('minutes'),
    secondsInput = document.getElementById('seconds'),
    msSecondsInput = document.getElementById('ms_seconds'),
    optionalBtn = document.getElementById('optional_buttons'),
    resultStorage = document.getElementById('result_storage');

//localStorage.clear();
resetLocalStorage();
/*
if (JSON.parse(localStorage.getItem('msSeconds')) === null) {
    localStorage.setItem('minutes', 0);
    localStorage.setItem('seconds', 0);
    localStorage.setItem('msSeconds', 0);
} else {
    msSecondsInput.innerHTML = +JSON.parse(localStorage.getItem('msSeconds'));
    secondsInput.innerHTML = +JSON.parse(localStorage.getItem('seconds'));
    minutesInput.innerHTML = +JSON.parse(localStorage.getItem('minutes'));
    startTimer();
}
*/
btnStart.onclick = function(event) {
    var statusBtnStart = btnStart.dataset.state;
    var btnText = event.target.innerText
    if (statusBtnStart === 'start') {
        event.target.innerText = 'PAUSE';
        btnStart.dataset.state = 'pause';
        btnReset.style.visibility = 'visible';
        btnSave.style.visibility = 'visible';
        startTimer();
    } else if (statusBtnStart === 'pause') {
        stopTimer();
        event.target.innerText = 'CONTINUE';
        btnStart.dataset.state = 'continue';
    } else {
        event.target.innerText = 'PAUSE';
        btnStart.dataset.state = 'pause';
        startTimer();
    }
}

function startTimer() {
    var intervalId = setInterval(function() {
        var msSeconds = +JSON.parse(localStorage.getItem('msSeconds'));
        msSeconds = msSeconds + 1;
        localStorage.setItem('msSeconds', msSeconds);
        msSecondsInput.innerHTML = dataStyle(msSeconds);
        var seconds = +JSON.parse(localStorage.getItem('seconds'));
        var minutes = +JSON.parse(localStorage.getItem('minutes'));
        if (msSeconds == 99) {
            seconds = seconds + 1;
            localStorage.setItem('seconds', seconds);
            secondsInput.innerHTML = dataStyle(seconds);
            localStorage.setItem('msSeconds', 0);
        }
        if (seconds == 60) {
            minutes = minutes + 1;
            localStorage.setItem('minutes', minutes);
            minutesInput.innerHTML = dataStyle(minutes);
            localStorage.setItem('seconds', 0);
            secondsInput.innerHTML = '00';
        }
        if (minutes == 60) {
            stopTimer();
            resetLocalStorage();
            resetTimerInputs();
            btnStart.style.visibility = 'hidden';
            btnSave.style.visibility = 'hidden';
        }
        localStorage.setItem('intervalId', intervalId);
    }, 10);

}

function stopTimer() {
    var intervalId = localStorage.getItem('intervalId');
    clearInterval(intervalId);
}

btnReset.onclick = function() {
    stopTimer();
    resetLocalStorage();
    resetTimerInputs();
    btnStart.innerText = 'START';
    btnStart.dataset.state = 'start';
    resultStorage.innerHTML = '';
    btnStart.style.visibility = 'visible';
    btnReset.style.visibility = 'hidden';
    btnSave.style.visibility = 'hidden';
}

btnSave.onclick = function() {
    var msSeconds = localStorage.getItem('msSeconds'),
        seconds = localStorage.getItem('seconds'),
        minutes = localStorage.getItem('minutes');
    var result = document.getElementById('result_storage');
    result.insertAdjacentHTML('beforeEnd', '<li>' + dataStyle(minutes) + ':' + dataStyle(seconds) + ':' + dataStyle(msSeconds) + '</li>');
}

function resetLocalStorage() {
    localStorage.setItem('minutes', 0);
    localStorage.setItem('seconds', 0);
    localStorage.setItem('msSeconds', 0);
    localStorage.setItem('intervalId', 0);
}

function resetTimerInputs() {
    msSecondsInput.innerText = '00';
    secondsInput.innerText = '00';
    minutesInput.innerText = '00';
}

function dataStyle(type) {
    if (type.toString().length === 1) {
        return type = '0' + type;
    } else return type;
}