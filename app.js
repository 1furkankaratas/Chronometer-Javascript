const second = document.getElementById('second');
const minute = document.getElementById('minute');

const iMinute = document.getElementById('iMinute');
const iSecond = document.getElementById('iSecond');

const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let stop = false;

iMinute.addEventListener("change", () => {
    minute.textContent = iMinute.value < 10 ? "0" + iMinute.value : iMinute.value;
})

iSecond.addEventListener("change", () => {
    second.textContent = iSecond.value < 10 ? "0" + iSecond.value : iSecond.value;
})

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", () => {
    stop = true;
    minute.textContent = "00";
    second.textContent = "00";
    iSecond.value = "00";
    iMinute.value = "00";
});

function startTimer() {
    stop = false;
    let sec = second.textContent;
    let min = minute.textContent;
    if ((iMinute.value == "00" && iSecond.value == "00") || (iMinute.value == "0" && iSecond.value == "0")) {
        alert("Set a timer!")
    } else {
        iMinute.disabled = true;
        iSecond.disabled = true;
        const interval = setInterval(() => {
            sec -= 1;
            sec = sec < 10 ? "0" + sec : sec;
            if (sec == "0-1") {
                min -= 1;
                sec = 59;
            }

            if ((sec == "00" && min == "00") || (sec == "0" && min == "0")) {
                clearInterval(interval);
                alert("Timer End!");
                iMinute.value = "00";
                iSecond.value = "00";
                iMinute.disabled = false;
                iSecond.disabled = false;
            }

            if (stop) {
                clearInterval(interval);
                iMinute.disabled = false;
                iSecond.disabled = false;
                alert("Reset Time!");
                return;
            }

            minute.textContent = min;
            second.textContent = sec;
        }, 1000);
    }
}