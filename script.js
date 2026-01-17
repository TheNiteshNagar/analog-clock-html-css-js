function runClock() {
  const date = new Date();
  const hourTime = date.getHours();
  const minuteTime = date.getMinutes();
  const secondTime = date.getSeconds();

  const hourDeg = (360 / 12) * hourTime + (360 / 12) * (1 / 60)
  const minuteDeg = (360 / 60) * minuteTime + (360 / 60) * (1 / 60)
  const secondDeg = (360 / 60) * secondTime

  const hour = document.getElementById('hour')
  const minute = document.getElementById('minute')
  const second = document.getElementById('second')

  const digitalClock = document.querySelector('.digital-clock')
  digitalClock.textContent = `${hourTime}:${minuteTime}`
  hour.style.transform = `rotate(${hourDeg}deg)`
  minute.style.transform = `rotate(${minuteDeg}deg)`
  second.style.transform = `rotate(${secondDeg}deg)`
}

// Function to toggle Fullscreen
(function(){
  let isFullScreen = false
  document.body.addEventListener('click', () => {
    const audio = new Audio('./public/audio-uwu.mp3')
    audio.currentTime = 0
    audio.play()
    isFullScreen ? document.exitFullscreen() : document.body.requestFullscreen()
    isFullScreen = !isFullScreen
  })
}())


runClock();

setInterval(() => {
  runClock();
}, 1000);