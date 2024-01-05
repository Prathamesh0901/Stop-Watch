let seconds = 0;
let minute = 0;
let hour = 0;
let isStarted = false;
let intervalId;

document.querySelector('.js-start-button').addEventListener('click', () => {
    if(!isStarted){
        isStarted = true;
        document.querySelector('.js-start-button').innerHTML = `STOP`;
        intervalId = setInterval(() => {
            display();
            seconds++;
            if(seconds === 60){
                seconds = 0;
                minute++;
            }
            if(minute === 60){
                minute = 0;
                hour++;
            }
        },1000);
    }
    else{
        isStarted = false;
        document.querySelector('.js-start-button').innerHTML = `START`;
        clearInterval(intervalId);
    }
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
    milliseconds = 0;
    seconds = 0;
    minute = 0;
    hour = 0;
    clearInterval(intervalId);
    display();
    isStarted = false;
    document.querySelector('.js-start-button').innerHTML = `START`;
})

function display(){
    if(hour < 10){
        document.querySelector('.js-hour-number').innerHTML = `0${hour}`;
    }
    else{
        document.querySelector('.js-hour-number').innerHTML = hour;
    }
    if(minute < 10){
        document.querySelector('.js-minute-number').innerHTML = `0${minute}`;
    }
    else{
        document.querySelector('.js-minute-number').innerHTML = minute;
    }
    if(seconds < 10){
        document.querySelector('.js-seconds-number').innerHTML = `0${seconds}`;
    }
    else{
        document.querySelector('.js-seconds-number').innerHTML = `${seconds}`;
    }
}