const fireworkContainer = document.querySelector('.fireworks-container')

const countdown = () => {
  let dateNewYear = new Date('Jan 22, 2023 00:00:00').getTime();
    function refreshCounter() {
        let dateCurrent = new Date().getTime(),
            timeLeft = dateNewYear - dateCurrent;
        let second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
        let tLDay = zeroPad(Math.floor(timeLeft / day), 2),
            tLHour = zeroPad(Math.floor((timeLeft % day) / hour), 2),
            tLMinute = zeroPad(Math.floor((timeLeft % hour) / minute), 2),
            tLSecond = zeroPad(Math.floor((timeLeft % minute) / second), 2);
        function zeroPad(num, count) {
            return num.toString().padStart(count, "0");
        }
        document.getElementById("day").innerText = tLDay;
        document.getElementById("hour").innerText = tLHour;
        document.getElementById("minute").innerText = tLMinute;
        document.getElementById("second").innerText = tLSecond;
    }
    setInterval(() => {
        refreshCounter();
    }, 1000);
}
countdown()

const countdownInterval = setInterval(countdown, 1000)

const fireworks = new Fireworks(fireworkContainer, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})

fireworks.start()
