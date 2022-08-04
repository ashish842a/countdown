let sec = document.querySelector(".sec .number");
let min = document.querySelector(".min .number");
let hour = document.querySelector(".hour .number");
let day = document.querySelector(".day .number");

// console.log(sec,min,hour,day);

let secval = 60,
    minval = 60,
    hrval = 2,
    dayval = 2;

let time = setInterval(function(){
    secval--;
    // console.log(secval);
    sec.innerHTML=secval<10?`0${secval}`:secval;
    if(secval == 0){
        minval--;
        secval=60
    }
    min.innerHTML=minval<10?`0${minval}`:minval;
    if(minval == 0){
        hrval--;
        minval=60
    }
    hour.innerHTML = hrval<10?`0${hrval}`:hrval;
    if(hrval == 0){
        dayval--;
    }
    day.innerHTML = dayval<10?`0${dayval}`:dayval;
    if(dayval == 0)
    clearInterval(time);
},1000)
