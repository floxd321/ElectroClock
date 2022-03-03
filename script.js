function getData(){

    var curent_date = new Date();
    // array with curent time info (sec, min, hours etc.)
    var time_data = [String(curent_date.getSeconds()), String(curent_date.getMinutes()), String(curent_date.getHours()), String(curent_date.getDay())];;
    var week_days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var day = week_days[time_data[3]];

    if (time_data[2].length < 2){
        time_data[2] = "0" + time_data[2];
    }

    if (time_data[1].length < 2){
        time_data[1] = "0" + time_data[1];
    }

    if (time_data[0].length < 2){
        time_data[0] = "0" + time_data[0];
    }

    document.getElementById("clock_time").innerHTML = `${day} ${time_data[2]}:${time_data[1]}:${time_data[0]}`;
}

getData();
setInterval(getData, 200);


