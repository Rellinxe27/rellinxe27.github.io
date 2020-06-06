function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
//*****end*******************************************************************************************************************


//code for banner ad

//****end*******************************************************************************************************************


//Display info message at the top

//Display and compute Wind Chill value
const tempNumber = parseFloat(document.getElementById("temp").textContent);
console.log(tempNumber);

const speedNumber = parseFloat(document.getElementById("speed").textContent);
console.log(speedNumber);

let windChill = 35.74 + (.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, .16)) + (.4275 * tempNumber * Math.pow(speedNumber, .16));
windChill = Math.round(windChill);

if (tempNumber<=50 && speedNumber >3){
    document.getElementById("chill").textContent= "Wind Chill: "+windChill+"\xB0F";
} else{
    document.getElementById("chill").textContent= "No Wind Chill Today";
}
//****end*******************************************************************************************************************


//Display date in the footer
var d = new Date();

document.write(d.toDateString());
//****end***********************************************************************************************************************

