const clock = document.querySelector('.clock-box')
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000)

