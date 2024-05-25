function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];


    out.innerHTML += `<div>Россия: ${today.toLocaleString('ru-RU')}</div>`;
    out.innerHTML += `<div>Греция: ${today.toLocaleString('el-GR')}</div>`;
    out.innerHTML += `<div>Зимбабве: ${today.toLocaleString('en-ZW')}</div>`;
    out.innerHTML += `<div>Панама: ${today.toLocaleString('es-PA')}</div>`;
    out.innerHTML += `<div>Эстония: ${today.toLocaleString('et-EE')}</div>`;
    out.innerHTML += `<div>Бельгия: ${today.toLocaleString('fr-BE')}</div>`;

    out.innerHTML += `<div>Год: ${today.getFullYear()}</div>`;
    out.innerHTML += `<div>Месяц: ${today.getMonth()}</div>`;
    out.innerHTML += `<div>Дата: ${today.getDate()}</div>`;
    out.innerHTML += `<div>День: ${weekDays[today.getDay()]}</div>`;
}