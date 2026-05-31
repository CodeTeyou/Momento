let spinnerUp = document.getElementById('spinnerup');
let spinnerDown = document.getElementById('spinnerdown');
let timerInput = document.getElementById('timerinput');
let timer = document.getElementById('timer');

timerInput.value = "00";

spinnerUp.addEventListener("click", () => {
    let currentValue = Number(timerInput.value);
    let newValue;

    newValue = currentValue + 5;

    if (newValue > 60) {
        return "stop";
    }

    if (newValue < 10) {
        newValue = "0" + newValue;
    }

    timerInput.value = newValue;
})

spinnerDown.addEventListener("click", () => {
    let currentValue = Number(timerInput.value);
    let newValue

    newValue = currentValue - 5;

    if (newValue < 0) {
        return "stop";
    }

    if (newValue < 10) {
        newValue = "0" + newValue;
    }

    timerInput.value = newValue;
})