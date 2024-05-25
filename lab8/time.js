function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

    const seconds = today.getSeconds();
    document.getElementById('seconds').innerHTML = seconds;

    const secondsArrow = ((seconds / 60) * 360) + 90; // Смещение стрелки, начала с 12:00
    document.getElementById('arrow').style.transform = `rotate(${secondsArrow}deg)`;
}
setInterval(showTime, 1000);