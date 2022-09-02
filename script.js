/**
 * I created three consts here targeting ther various class
 */
const hourItem = document.querySelector('.hour');
const minuteItem = document.querySelector('.minute');
const secondItem = document.querySelector('.second');

/**
 * I created a function here and called it 'timeUpdate'with the aim of getting 
 * the current time or updated time
 */
function timeUpdate(){
    const currentTime = new Date();
    setTimeout(timeUpdate, 1000);

    const hour = currentTime.getHours()
    const minute = currentTime.getMinutes()
    const second = currentTime.getSeconds()

    const hourDeg = (hour / 12) * 360;
    hourItem.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minute / 60) * 360;
    minuteItem.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg = (second / 60) * 360;
    secondItem.style.transform = `rotate(${secondDeg}deg)`;
    
}

/**
 * This is ment to call the function
 */
timeUpdate();
