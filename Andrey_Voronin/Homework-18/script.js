var wrapper = document.getElementsByTagName('body')[0];

window.addEventListener('load', function () {
    if (sessionStorage.getItem('time')) {
        wrapper.innerHTML = JSON.parse(sessionStorage.getItem('time'));

        var startButton = document.getElementById('start-button'),
            timeCollect = document.getElementsByClassName('time');

        if (startButton && startButton.dataset.state === 'stop') {
            setTimer(startButton, timeCollect);
        }
    }
}, false);

wrapper.addEventListener('click', function (event) {
    var target = event.target,
        startButton = document.getElementById('start-button'),
        timeCollect = document.getElementsByClassName('time');

    if (startButton === target) {
        if (startButton.dataset.state === 'start') {

            startButton.dataset.state = 'stop';
            startButton.textContent = 'STOP';
            wrapper.innerHTML += '<div class="button"><button id="reset-button">RESET' +
                '</button></div><div class="button"><button id="save-button">SAVE' +
                '</button></div>';
        } else if (startButton.dataset.state === 'run') {
            startButton.dataset.state = 'stop';
            startButton.textContent = 'STOP';
        } else if (startButton.dataset.state === 'stop') {

            startButton.dataset.state = 'run';
            startButton.textContent = 'RUN';

        }
        setTimer(startButton, timeCollect);
    }

    var resetButton = document.getElementById('reset-button'),
        saveButton = document.getElementById('save-button');

    if (target === resetButton) {
        if (!document.getElementById('start-button')) {

            wrapper.insertAdjacentHTML('afterBegin', '<div class="button">' +
                '<button id="start-button" data-state="start">START</button></div>');
        }

        clearInterval(JSON.parse(localStorage.getItem('timerId')));

        localStorage.removeItem('timerId');

        if (startButton) {
            startButton.dataset.state = 'start';

            startButton.textContent = 'START';
        }

        for (var i = 0; i < timeCollect.length; i++) {
            timeCollect[i].textContent = '00';
        }

        if (saveButton) {
            saveButton.remove();
        }

        resetButton.remove();

        if (wrapper.getElementsByClassName('saves')[0]) {
            wrapper.getElementsByClassName('saves')[0].remove();
        }
    }

    if (target === saveButton) {
        if (wrapper.getElementsByClassName('saves')[0]) {
            var count = document.getElementsByClassName('value').length + 1;

            wrapper.getElementsByClassName('saves')[0].insertAdjacentHTML('beforeEnd',
                '<span class="value">' + count + '\) ' +
                document.getElementsByClassName('time')[0].textContent + ' : ' +
                document.getElementsByClassName('time')[1].textContent + ' : ' +
                document.getElementsByClassName('time')[2].textContent + '</span>');
        } else {
            wrapper.insertAdjacentHTML('beforeEnd', '<div class="saves">' +
                '<span class="value">1\) ' +
                document.getElementsByClassName('time')[0].textContent + ' : ' +
                document.getElementsByClassName('time')[1].textContent + ' : ' +
                document.getElementsByClassName('time')[2].textContent + '</span></div>');
        }
    }

});

window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('time', JSON.stringify(wrapper.innerHTML));
}, false);

function setTimer(startButton, timeCollect) {
    var timerId = setInterval(function () {
        if (startButton.dataset.state === 'run') {
            clearInterval(timerId);
        }

        twoNumber(timeCollect[2]);

        if (+timeCollect[2].textContent === 100) {
            twoNumber(timeCollect[1]);
            timeCollect[2].textContent = '00';

            if (+timeCollect[1].textContent === 60) {
                twoNumber(timeCollect[0]);
                timeCollect[1].textContent = '00';

                if (+timeCollect[0].textContent === 60) {
                    clearInterval(timerId);

                    startButton.remove();

                    document.getElementById('save-button').remove();

                }
            }
        }

        localStorage.setItem('timerId', JSON.stringify(timerId));

        function twoNumber(number) {
            if (+number.textContent < 9) {
                number.textContent = '0' + (+number.textContent + 1);
            } else {
                number.textContent = +number.textContent + 1;
            }
        }

    }, 10);
}