document.addEventListener("DOMContentLoaded", function() {
    
    setInterval(time,1000);
    
});


function time() {
    var d = new Date();
    var n = d.getTime();

    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var format = "AM";

    if (hour > 12) {
        hour -= 12;
        format = "PM";
    }
    if (hour == 0) {
        hour = 12;
        format = "AM";
    }

    hour = hour < 10 ?
         "0" + hour : hour;

    minute = minute < 10 ?
         "0" + minute : minute; 

    second = second < 10 ?
         "0" + second : second;
   

    let currentTime = hour + ":" + minute + ":" + second + " " +  format;
    
    
    document.querySelector('.time').innerHTML = currentTime;
}