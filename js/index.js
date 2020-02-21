const clock = document.querySelector('.clock-box')
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000)

function multiply() {
    let num1, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    result = num1 * num1;
    document.getElementById('numberisEqualTo').innerHTML = result;
}


