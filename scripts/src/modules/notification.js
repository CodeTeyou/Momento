function createPopUp(content, displayTime, color, whiteText) {
  if (!content || !displayTime || !color) {
    console.error("Missing Input Value");
    console.error(`content: ${content}`);
    console.error(`displayTime: ${displayTime}`);
    console.error(`color: ${color}`);
    return;
  }

  const mainElement = document.querySelector("main");

  let notifBox = document.querySelector("main .notificationBox")

  if (!notifBox) {
    notifBox = document.createElement("div")
    notifBox.className = "notificationBox";
    mainElement.appendChild(notifBox);
  }

  const notification = document.createElement("div");

  const closeNotif = document.createElement("button");
  const contentBox = document.createElement("span");

  const timeBar = document.createElement("div");
  const timeIn = document.createElement("div");

  notification.style.backgroundColor = color;
  notification.className = "notification";

  closeNotif.textContent = "X";
  closeNotif.className = "closeNotif";

  contentBox.textContent = content;

  timeBar.className = "timeBar";

  timeIn.style.height = "100%";
  timeIn.style.width = "100%";
  
  notifBox.appendChild(notification);

  notification.appendChild(closeNotif);
  notification.appendChild(contentBox);
  notification.appendChild(timeBar);

  timeBar.appendChild(timeIn);

  if (whiteText) {
    notification.style.color = "#EFEFEF"

    timeIn.style.backgroundColor = "#EFEFEF";
    closeNotif.style.color = "#EFEFEF"
  } else {
    notification.style.color = "#272727"
    timeIn.style.backgroundColor = "#272727";
    closeNotif.style.color = "#272727"
  }

  function removeNotification() {
    clearInterval(timer)

    notification.style.transform = `translateX(${notification.offsetWidth + 20}px)`;

    setTimeout(() => {
      notification.remove();
    }, 1000);
  }

  let time = displayTime;
  let timePercent;

  const timer = setInterval(() => {
    if (time <= 0) {timeIn.style.width = "0px"; removeNotification();}
    time -= 0.1

    timePercent = Math.floor(time / displayTime * 100)
    timeIn.style.width = `${timePercent}%`
  }, 100)

  closeNotif.addEventListener("click", (event) => {
    removeNotification();
  });
}

export default createPopUp;
