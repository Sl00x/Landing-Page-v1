var bgSunrise = "https://4.bp.blogspot.com/-8iT_knywI6Q/XTFp8_0ZyaI/AAAAAAAAIkw/5EYYTTjPcrkqwup6PuncyZ8Gj_g4ck09ACKgBGAs/w914-h514-p-k-no-nu/sunrise-minimalist-digital-art-mountain-landscape-uhdpaper.com-8K-51-wp.thumbnail.jpg";
var bgSunShine = "https://cdn.statically.io/img/hdqwalls.com/wallpapers/bridge-in-forest-minimalist-4k-w7.jpg";
var bgSunSet = "https://i.pinimg.com/originals/ea/00/0c/ea000cc6fb9375b14a7b21d55dcf9745.jpg";
var bgNight = "https://i.pinimg.com/originals/82/f2/7c/82f27c36993bb5afecfa277e2f78c7ca.jpg";



var interval = setInterval(function(){
    var deadline = new Date("aug 21, 2020 10:39:00").getTime();
    var now = new Date().getTime();
    var t = deadline - now;

    var days = Math.floor(t / (1000*60*60*24));
    var hours = Math.floor((t%(1000*60*60*24)) /  (1000*60*60));
    var chours = new Date().getHours();
    var minutes = Math.floor( (t%(1000*60*60))/(1000*60) );
    var secondes =  Math.floor( (t%(1000*60))/ 1000 );

    if(chours > 6 && chours <= 11){
        document.getElementsByClassName('bg-image')[0].style.backgroundImage = 'url("'+bgSunrise+'")';
        document.getElementsByClassName('state')[0].innerHTML = "Good Morning";
    } else if(chours > 11 && chours <= 16){
        document.getElementsByClassName('bg-image')[0].style.backgroundImage = 'url("'+bgSunShine+'")';
        document.getElementsByClassName('state')[0].innerHTML = "Nice Day";
    } else if(chours > 16 && chours <= 20){
        document.getElementsByClassName('bg-image')[0].style.backgroundImage = 'url("'+bgSunSet+'")';
        document.getElementsByClassName('state')[0].innerHTML = "The Sun is Set";
    } else if(chours > 20 && chours <= 6){
        document.getElementsByClassName('bg-image')[0].style.backgroundImage = 'url("'+bgNight+'")';
        document.getElementsByClassName('state')[0].innerHTML = "Good Night";
    }
    if(days < 10) {
        document.getElementById("days").innerHTML = "0" + days;
    } else {
        document.getElementById("days").innerHTML = days;
    }
    
    if(hours < 10) {
        document.getElementById("hours").innerHTML = "0" + hours;
    } else {
        document.getElementById("hours").innerHTML = hours;
    }

    if(minutes < 10) {
        document.getElementById("minutes").innerHTML = "0" + minutes;
    } else {
        document.getElementById("minutes").innerHTML = minutes;
    }

    if(secondes < 10) {
        document.getElementById("secondes").innerHTML = "0" + secondes;
    } else {
        document.getElementById("secondes").innerHTML = secondes;
    }
    
}, 1000);

