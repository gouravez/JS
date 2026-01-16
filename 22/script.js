const button = document.getElementById("stop-button");
function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
  console.log(currentTime);
}

let interval = setInterval(showTime, 1000);

button.addEventListener("click", () => {
  clearInterval(interval);
});

const startButton = document.getElementById("start-button");
const time = document.getElementById("time");
startButton.addEventListener("click", () => {
    
});
