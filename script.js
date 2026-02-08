// set audio at global - will be lazily initialized on first user interaction
let audio = null;

function runClock() {
  const date = new Date();
  const hourTime = date.getHours();
  const minuteTime = date.getMinutes();
  const secondTime = date.getSeconds();

  const hourDeg = (360 / 12) * hourTime + (360 / 12) * (1 / 60);
  const minuteDeg = (360 / 60) * minuteTime + (360 / 60) * (1 / 60);
  const secondDeg = (360 / 60) * secondTime;

  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");

  const digitalClock = document.querySelector(".digital-clock");
  digitalClock.textContent = `${hourTime}:${minuteTime}`;
  hour.style.transform = `rotate(${hourDeg}deg)`;
  minute.style.transform = `rotate(${minuteDeg}deg)`;
  second.style.transform = `rotate(${secondDeg}deg)`;
}

// Function to toggle Fullscreen
(function () {
  let isFullScreen = false;
  document.body.addEventListener("click", (ev) => {
    // exclude circle button click so it will exit to function
    if(ev.target === document.querySelector('#circle')) return
    
    isFullScreen
      ? document.exitFullscreen()
      : document.body.requestFullscreen();
    isFullScreen = !isFullScreen;
  });
})();

// play audio when click on middle in clock
document.querySelector("#circle").addEventListener("click", () => {
  // Initialize audio lazily on first user interaction
  if (!audio) {
    audio = new Audio("./public/audio-uwu.mp3");
  }
  
  audio.currentTime = 0;
  // Handle the play promise to avoid unhandled promise rejection
  audio.play().catch(error => {
    console.log("Audio playback failed:", error);
  });
});

runClock();

setInterval(() => {
  runClock();
}, 1000);
