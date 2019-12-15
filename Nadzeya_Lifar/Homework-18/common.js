var wrapper = document.getElementsByTagName('section')[0];

window.addEventListener('load', function () {
    if (sessionStorage.getItem('timeInfo')) {
        wrapper.innerHTML = JSON.parse(sessionStorage.getItem('timeInfo'));

        var buttonStart = document.getElementsByClassName('button-start')[0],
            timeCellArr = document.getElementsByClassName('time-cell');

        if (buttonStart && buttonStart.dataset.state === 'stop') {
            setTimer(buttonStart, timeCellArr);
        }
    }
}, false);

wrapper.onclick = function createTimer(event) {
    var buttonStart = document.getElementsByClassName('button-start')[0],
        target = event.target,
        timeCellArr = document.getElementsByClassName('time-cell');

    if (buttonStart === target) {
        if (buttonStart.dataset.state === 'start') {
            buttonStart.dataset.state = 'stop';
            buttonStart.textContent = 'stop';

            wrapper.insertAdjacentHTML('beforeEnd', '<button class="button button-reset">' + 'reset</button><button class="button button-save">save</button>');
        } else if (buttonStart.dataset.state === 'run') {
            buttonStart.dataset.state = 'stop';
            buttonStart.textContent = 'stop';
        } else if (buttonStart.dataset.state === 'stop') {
            buttonStart.dataset.state = 'run';
            buttonStart.textContent = 'run';
        }

        setTimer(buttonStart, timeCellArr);
    }

    var resetButton = document.getElementsByClassName('button-reset')[0],
        saveButton = document.getElementsByClassName('button-save')[0];

    if (target === resetButton) {
        if (!document.getElementsByClassName('button-start')[0]) {

            wrapper.insertAdjacentHTML('afterBegin', '<button class="button button-start" ' + 'data-state="start">start</button>');
        }

        clearInterval(JSON.parse(localStorage.getItem('timerId')));

        localStorage.removeItem('timerId');

        if (buttonStart) {
            buttonStart.dataset.state = 'start';
            buttonStart.textContent = 'start';
        }

        for (var i = 0; i < timeCellArr.length; i++) {
            timeCellArr[i].textContent = '00';
        }

        if (saveButton) {
            saveButton.remove();
        }

        resetButton.remove();

        if (wrapper.getElementsByClassName('saves-block')[0]) {
            wrapper.getElementsByClassName('saves-block')[0].remove();
        }
    }

    if (target === saveButton) {
        if (wrapper.getElementsByClassName('saves-block')[0]) {
            var listNum = document.getElementsByClassName('saves-item').length + 1;

            wrapper.getElementsByClassName('saves-block')[0].insertAdjacentHTML('beforeEnd','<span class="saves-item">' + listNum + '\) '
                + document.getElementsByClassName('time-cell')[0].textContent + ' : '
                + document.getElementsByClassName('time-cell')[1].textContent + ' : '
                + document.getElementsByClassName('time-cell')[2].textContent + '</span>');
        } else {
            wrapper.insertAdjacentHTML('beforeEnd', '<div class="saves-block">' + '<span class="saves-item">1\) '
                + document.getElementsByClassName('time-cell')[0].textContent + ' : '
                + document.getElementsByClassName('time-cell')[1].textContent + ' : '
                + document.getElementsByClassName('time-cell')[2].textContent + '</span></div>');
        }
    }
};

window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('timeInfo', JSON.stringify(wrapper.innerHTML));
}, false);

function setTimer(buttonStart, timeCellArr) {
    var timerId = setInterval(function () {
        if (buttonStart.dataset.state === 'run') {
            clearInterval(timerId);
        }

        setTwoSymbols(timeCellArr[2]);

        if (+timeCellArr[2].textContent === 100) {
            setTwoSymbols(timeCellArr[1]);

            timeCellArr[2].textContent = '00';

            if (+timeCellArr[1].textContent === 60) {
                setTwoSymbols(timeCellArr[0]);

                timeCellArr[1].textContent = '00';

                if (+timeCellArr[0].textContent === 60) {
                    clearInterval(timerId);

                    buttonStart.remove();

                    document.getElementsByClassName('button-save')[0].remove();
                }
            }
        }

        localStorage.setItem('timerId', JSON.stringify(timerId));

        function setTwoSymbols(z) {
            if (+z.textContent < 9) {
                z.textContent = '0' + (+z.textContent + 1);
            } else {
                z.textContent = +z.textContent + 1;
            }
        }
    }, 10);
}
