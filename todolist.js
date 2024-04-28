let paragraph = document.createElement("p");
let time = document.getElementById("current-time");
time.appendChild(paragraph);

setInterval(() => {
  let currentTime = new Date().toLocaleTimeString();
  let currentDate = new Date().toLocaleDateString();
  paragraph.textContent = currentDate + "  " + currentTime;
}, 1000);
