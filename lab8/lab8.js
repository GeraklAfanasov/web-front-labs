function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();

    out.innerHTML = `
        <div class="box">
            <div>Дата и время Россия: ${today.toLocaleString('ru-RU')}</div>
            <div>Дата и время Греция: ${today.toLocaleString('el-GR')}</div>
            <div>Дата и время Зимбабве: ${today.toLocaleString('en-ZW')}</div>
            <div>Дата и время Панама: ${today.toLocaleString('es-PA')}</div>
            <div>Дата и время Эстония: ${today.toLocaleString('et-EE')}</div>
            <div>Дата и время Бельгия: ${today.toLocaleString('fr-BE')}</div>
        </div>
    `;
}