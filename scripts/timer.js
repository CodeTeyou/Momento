let spinnerContainer = document.getElementById('spinners');
let spinnerUp = document.getElementById('spinnerup');
let spinnerDown = document.getElementById('spinnerdown');
let timerInput = document.getElementById('timerinput');
let timer = document.getElementById('timer');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop')

timerInput.value = "00";
startButton.style.display = "none"

spinnerUp.addEventListener("click", () => {
    let currentValue = Number(timerInput.value);
    let newValue;

    newValue = currentValue + 5;

    if (newValue > 60) {
        return;
    }

    if (newValue < 10) {
        newValue = "0" + newValue;
    }

    if (newValue != 0) {
        startButton.style.display = "block";
    } else {
        startButton.style.display = "none";
    }

    timerInput.value = newValue;
})

spinnerDown.addEventListener("click", () => {
    let currentValue = Number(timerInput.value);
    let newValue

    newValue = currentValue - 5;

    if (newValue < 0) {
        return;
    }

    if (newValue < 10) {
        newValue = "0" + newValue;
    }
    
    if (newValue != 0) {
        startButton.style.display = "block";
    } else {
        startButton.style.display = "none";
    }

    timerInput.value = newValue;
})

let timerOn;
let time;

startButton.addEventListener("click", () => {
    if (timerOn) {
        timerOn = false;
        stopButton.style.display = "block"
        startButton.innerText = "Resume";
    } else {
        timerOn = true;
        spinnerContainer.style.display = "none";
        stopButton.style.display = "none"
        startButton.innerText = "Pause";
        timerInput.style.display = "none";


        timer.innerText = (timerInput.value + " : " + "00");

        

    }
})

stopButton.addEventListener("click", () => {
    timerOn = false;

    startButton.innerText = "Start";
    startButton.style.display = "none";
    stopButton.style.display = "none";
    spinnerContainer.style.display = "flex";
    timerInput.value = "00";
    timerInput.style.display = "inline";
    timer.innerText = ":00";
})