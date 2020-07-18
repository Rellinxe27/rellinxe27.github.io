//Shows current year next to copyright symbol in footer

let currentTime = new Date();

let currentYear = currentTime.getFullYear(); //Returns the year of a date as a four digit number

document.getElementById("currentYearId").innerHTML = currentYear;