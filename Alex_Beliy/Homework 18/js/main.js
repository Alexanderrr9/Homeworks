var run = document.querySelector('.run');
var stopWatch = document.querySelector('.stopwatch');
var divButtons = document.querySelector('.buttons');
var buttSave = document.getElementById('save');
var buttReset = document.getElementById('reset');
var output = document.querySelector('.output');
var dataState;
var minutes = 59,
    seconds = 40,
    milliseconds = 0,
    interval = null,
    num = 1,
    countOutPut = null;



run.addEventListener('click', startStopWatch);

function startStopWatch() {
    dataState = run.dataset.state;

    if (dataState === 'start') {
        this.innerText = 'Stop';
        output.style.display = 'block';
        divButtons.style.display = 'block';
        buttSave.style.display = 'inline-block';
        run.dataset.state = 'stop';

        interval = setInterval(function () {

            ++milliseconds;
            var countMin = '0' + minutes;
            var countSec = '0' + seconds;
            var countMill = '0' + milliseconds;



            if (milliseconds > 9) {
                countMill = milliseconds;
            }

            if (milliseconds == 99) {
                milliseconds = 0;
                ++seconds;
            }

            if (seconds > 9) {
                countSec = seconds;
            }

            if (seconds == 59) {
                seconds = 0;
                ++minutes;
            }

            if (minutes > 9) {
                countMin = minutes;
            }

            if (minutes == 60) {
                clearInterval(interval);
                countSec = '00';
                countMill = '00';
                run.style.display = 'none';
                buttSave.style.display = 'none';
            }

            countOutPut = countMin + ':' + countSec + ':' + countMill;
            stopWatch.innerHTML = '<span class="stopwatch_time">' + countMin + '</span>' + '<span class="stopwatch_time">' + countSec + '</span>' + '<span class="stopwatch_time">' + countMill + '</span>';
        }, 10);

    } else if (dataState === 'stop') {
        this.innerText = 'Start';
        clearInterval(interval);
        run.dataset.state = 'start';
    }

}


buttSave.addEventListener('click', function () {
    output.innerHTML += '<p>' + num + ') ' + countOutPut + '</p>';
    ++num;
});

buttReset.addEventListener('click', function () {
    clearInterval(interval);
    run.innerText = 'Start';
    stopWatch.innerHTML = '<span class="stopwatch_time">00</span>' +
        '<span class="stopwatch_time">00</span>' +
        '<span class="stopwatch_time">00</span>';
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    num = 1;
    output.style.display = 'none';
    output.innerText = '';
    divButtons.style.display = 'none';
    run.style.display = 'block';
    run.addEventListener('click', startStopWatch);
    run.dataset.state = 'start';
});