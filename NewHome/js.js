function start() {
    Clock();
    Img();
    Datum();
}
function Clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
        h + ":" + m;
    var t = setTimeout(Clock, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function Img(){
    var today = new Date();
    var h = today.getHours();
    console.log(h);

    if(h>=6 && h<=11){
        document.getElementById('img').style.backgroundImage = "url('img/morning2.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-210px";
        document.getElementById('welcome').innerHTML = "Good morning Andrew!";
    }
    if(h>=12 && h<=16) {
        document.getElementById('img').style.backgroundImage = "url('img/day1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-250px";
        document.getElementById('welcome').innerHTML = "Good day Andrew!";
    }
    if(h>=17 && h<=19) {
        document.getElementById('img').style.backgroundImage = "url('img/noon1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-150px";
        document.getElementById('welcome').innerHTML = "Good afternoon Andrew!";
    }
    if((h>=20 && h<=23) || (h>=0 && h<=5)){
        document.getElementById('img').style.backgroundImage = "url('img/night1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-240px";
        document.getElementById('welcome').innerHTML = "Good night Andrew!";
    }
}
function Datum(){
    var today = new Date();

    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = weekday[today.getDay()];

    var d = today.getDate();

    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var m = month[today.getUTCMonth()];

    var total = day + " | " + d + " | " + m;
    console.log(total);

    document.getElementById('datum').innerHTML = total;
}
