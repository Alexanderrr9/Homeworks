var time = 0,
    running = 0;

function startPause() {

    if(running === 0) {
        running = 1;
        increment();
        showResetSave();
        start.dataset.about = 'stop';
        start.innerText = 'Stop';
    }
    else {
        running = 0;
        start.dataset.about = 'run';
        start.innerText = 'Run';
    }
    if (mins === 1) {
        mins = 0;
    }
}

var start = document.getElementById('start');

function reset() {
    running = 0;
    time = -1;
    start.dataset.about = 'start';
    start.innerText = 'Start';
    document.getElementById('output').innerHTML = '<span>00</span><span>00</span><span>00</span>';
    document.getElementById('reset').classList.add('hidden');
    document.getElementById('save').classList.add('hidden');
    deleteDiv();
}

function showResetSave() {
    document.getElementById('reset').classList.remove('hidden');
    document.getElementById('save').classList.remove('hidden');
    document.getElementById('reset').classList.add('show');
    document.getElementById('save').classList.add('show');
}

var mins,
    secs,
    tenths,
    idDiv = document.getElementById('setTagP');

function increment() {

    if(running === 1) {
        var stopSetTimeout = setTimeout(function() {

            time++;
            this.mins = Math.floor(time/10/60);
            this.secs = Math.floor(time/10 % 60);
            this.tenths = time % 100;

            if(mins < 10) {
                this.mins = '0' + mins;
            }
            if(secs < 10) {
                secs = '0' + secs;
            }
            if(tenths < 10) {
                tenths = '0' + tenths;
            }

            document.getElementById('output').innerHTML = '<span>'+mins+'</span><span>'+secs+'</span><span>'+tenths+'</span>';
            increment();
        },99);

        if (mins == 60) {
            document.getElementById('start').classList.add('hidden');
            document.getElementById('reset').classList.add('hidden');
            clearTimeout(stopSetTimeout);
        }
    }
}

var setDiv,
    a = 0;

function createTagDiv() {
    if (a === 0) {
        a = 1;
        this.setDiv = document.createElement('div');
    }
}

var deleteDiv = function () {
    setDiv.innerHTML = '';
    i = 1;
};

var deleteDiv,
    i = 1,
    p;

var save = function () {
    createTagDiv();
    this.p = document.createElement('p');
    p.innerHTML =  i++ +') ' +mins+ ' : ' +secs+ ' : ' +tenths;
    idDiv.append(setDiv);
    setDiv.append(p);
}