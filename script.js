//variable declarations

const date = document.getElementById('date');
const day = document.getElementById('day');
const hours = document.querySelector('.hour-hand'); 
const mins = document.querySelector('.min-hand');
const secs = document.querySelector('.sec-hand');
const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hrs = document.getElementById('hour');

//start

function setDate(){
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    console.log(currentDate);
    date.innerHTML = currentDate;

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const daycount = now.getDay();
    day.innerHTML = days[daycount];

    const seconds = now.getSeconds();
    const secondHand = ((seconds/60) * 360)+90;
    secs.style.transform = `rotate(${secondHand}deg)`;
    sec.innerHTML = seconds;

    const minutes = now.getMinutes();
    const minuteHand = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;;
    mins.style.transform = `rotate(${minuteHand}deg)`;
    min.innerHTML = `: ${minutes} : `;

    const hour = now.getHours();
    const hourHand = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    hours.style.transform = `rotate(${hourHand}deg)`;
    hrs.innerHTML = `${hour}  `;
}
setInterval(setDate,1000);
setDate();