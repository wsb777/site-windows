function date() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = '' + minutes;
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }
    let timeText = hours + ":" + minutes;
    let day = now.getDate();
    let month = now.getMonth() + 1;
    month = '' + month;
    day = '' + day;
    if (day.length == 1) {
        day = "0" + day;
    }
    if (month.length == 1) {
        month = "0" + month;
    }
    let year = now.getFullYear();
    let dateText = day + "." + month + "." + year;
    let time = document.querySelector('.time');
    let date = document.querySelector('.date');
    time.textContent = timeText;
    date.textContent = dateText;
}
date();
setInterval(function(){
    date()
}, 10000);