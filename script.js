function getData(){

    var curent_date = new Date();
    var seconds = String(curent_date.getSeconds());
    var hours = String(curent_date.getHours());
    var minutes = String(curent_date.getMinutes());
    var int_day = String(curent_date.getDay());
    var week_days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var day = week_days[int_day];

    if (hours.length < 2){
        hours + "0" + hours;
    }
    if (seconds.length < 2){
        seconds = "0" + seconds;
    }
    if (minutes.length < 2){
        minutes = "0" + minutes;
    }

    document.getElementById("clock_time").innerHTML = `${day} ${hours}:${minutes}:${seconds}`;

}

getData();
setInterval(getData, 200);


