const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5606338&appid=de0b9a3291e852137733bf4abab06ac0&units=imperial";
const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5606338&appid=de0b9a3291e852137733bf4abab06ac0&units=imperial";

//let currentTime = new Date();
let currentDay = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //Use an array to display the name of the weekday
let currentWeekday = days[currentDay.getDay()]; //Returns the weekday of a date

let currentHour = currentDay.getHours();
if (currentHour > 12) {
    currentHour -= 12;
} else if (currentHour == 0) {
    currentHour = 12;
}

let currentMinutes = currentDay.getMinutes();
if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
}

if (currentDay.getHours() >= 12) {
    document.getElementById("currentWeekdayId").innerHTML = currentWeekday + ", " + currentHour + ":" + currentMinutes + " PM";
} else {
    document.getElementById("currentWeekdayId").innerHTML = currentWeekday + ", " + currentHour + ":" + currentMinutes + " AM";
}

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('currentlyId').textContent = jsObject.weather[0].main;
        document.getElementById('tempId').textContent = Math.round(jsObject.main.temp);
        document.getElementById('humidityId').textContent = jsObject.main.humidity;
        document.getElementById('windSpeedId').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('windChillId').textContent = getWindChill();
        const iconName = jsObject.weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${iconName}.png`;
        const altText = jsObject.weather[0].description;
        document.getElementById('icon').setAttribute('src', iconsrc);
        document.getElementById('icon').setAttribute('alt', altText);
    });

function getWindChill() {
    let tString = document.getElementById("tempId").innerHTML;
    let t = Number(tString);
    let sString = document.getElementById("windSpeedId").innerHTML;
    let s = Number(sString);
    if (t <= 50 && s > 3) {
        let windChill = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16));
        return Math.round(windChill) + " mph";
    } else {
        return "N/A";
    }
}

//Supplies the dates for five day forecast
let currentDayNumber = currentDay.getDay() + 1;
let endDay = currentDayNumber + 5;
for (i = currentDayNumber; i < endDay; i++) {
    let nextDayNumber = i % 7;
    let nextDay = days[nextDayNumber];
    let nextDayShort = nextDay.substring(0, 3);
    let j = i - currentDayNumber;
    let x = document.getElementsByClassName("dayClass");
    x[j].innerHTML = nextDayShort;
}

fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        for (let i = 0; i < fiveDayForecast.length; i++) {
            document.getElementById(`temp${i+1}`).textContent = Math.round(fiveDayForecast[i].main.temp);
            const iconName = fiveDayForecast[i].weather[0].icon;
            const iconsrc = `https://openweathermap.org/img/w/${iconName}.png`;
            const altText = fiveDayForecast[i].weather[0].description;
            document.getElementById(`icon-${i+1}`).setAttribute('src', iconsrc);
            document.getElementById(`icon-${i+1}`).setAttribute('alt', altText)
        }
    });