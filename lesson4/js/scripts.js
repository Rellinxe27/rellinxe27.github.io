//Display date in the footer
var d = new Date();

document.write(d.toDateString());
//****end****

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}