const countdown = () => {
    const countDate = new Date("July 1, 2023").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Transformando a minutos y segundos
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    const textDayD = String(textDay).padStart(2, "0");
    const textHourD = String(textHour).padStart(2, "0");
    const textMinuteD = String(textMinute).padStart(2, "0");
    const textSecondD = String(textSecond).padStart(2, "0");



    // Pasando a HTML
    document.querySelector(".day").innerText = textDayD;
    document.querySelector(".hour").innerText = textHourD;
    document.querySelector(".minute").innerText = textMinuteD;
    document.querySelector(".second").innerText = textSecondD;


};

setInterval(countdown, 1000);