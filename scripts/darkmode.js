let preference;

window.addEventListener("load", () => {
  preference = localStorage.getItem("lightPreference");
  if (preference === null) {
    preference = false;
  } else {
    preference = JSON.parse(preference);
  }

  if (preference) {
    flipValue("clr", "#EFEFEF");
    flipValue("fontclr", "#272727");
  } else {
    flipValue("clr", "#272727");
    flipValue("fontclr", "#EFEFEF");
  }
});

const toggleButton = document.getElementById("modeToggle");
const root = document.querySelector(":root");
let styled = getComputedStyle(root);

function flipValue(object, assignedValue) {
  let changeObject = `--${object}`;
  root.style.setProperty(changeObject, String(assignedValue));
}

toggleButton.addEventListener("click", () => {
  if (!preference) {
    flipValue("clr", "#EFEFEF");
    flipValue("fontclr", "#272727");
    flipSpinners(preference);
    preference = true;
  } else {
    flipValue("clr", "#272727");
    flipValue("fontclr", "#EFEFEF");
    flipSpinners(preference);
    preference = false;
  }
  localStorage.setItem("lightPreference", preference);
});

function flipSpinners(pref) {
  const spinnerUp = document.getElementById("spinnerup");
  const spinnerDown = document.getElementById("spinnerdown");
  if (spinnerUp && spinnerDown) {
    if (pref) {
      spinnerUp.style.filter = "brightness(0) invert(1) drop-shadow(0 0 0 var(--fontclr))";
      spinnerUp.style.color = "var(--fontclr);";

      spinnerDown.style.filter = "brightness(0) invert(1) drop-shadow(0 0 0 var(--fontclr))";
      spinnerDown.style.color = "var(--fontclr);";
    } else {
      spinnerUp.style.filter = "";
      spinnerUp.style.color = "";

      spinnerDown.style.filter = "";
      spinnerDown.style.color = "";
    }
  }
}
