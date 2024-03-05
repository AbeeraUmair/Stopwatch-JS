var hour=0
var minutes = 0
var second = 0
var milis = 0
var Interval;

var gethour = document.getElementById('hr')
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('msec')

function start() {
    Interval = setInterval(function () {
        milis++
        getmili.innerHTML = milis
        if (milis >= 100) {
            second++
            getsec.innerHTML = second
            milis = 0
        }
        else if (second >= 10) {
            minutes++
            getmin.innerHTML = minutes
            second = 0
        }
        else if(minutes>=5){
            hour++
            gethour.innerHTML = hour
            minutes = 0
        }
    }, 1);
    document.getElementById('sss').disabled = true
}

function stop() {
    clearInterval(Interval)
    document.getElementById('sss').disabled = false
}

function reset() {
    hour=0
    minutes = 0
    second = 0
    milis = 0
    getmili.innerHTML = milis
    getsec.innerHTML = second
    getmin.innerHTML = minutes
    gethour.innerHTML = hour
}

