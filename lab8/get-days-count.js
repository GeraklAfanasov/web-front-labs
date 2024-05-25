function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    document.getElementById('count-days').textContent = 'C даты рождения прошло дней: ' + daysCount;
}

function clearInput() {
    document.getElementById('birthday').value = '';
    document.getElementById('count-days').textContent = '';
}