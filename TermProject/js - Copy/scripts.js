//code for Ham Menu

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
//*****end*******************************************************************************************************************


//Display date in the footer
var d = new Date();

document.write(d.toDateString());
//****end***********************************************************************************************************************


//Display the moving linear text at the top
document.getElementById("scrolling").onClick = function(e) {
    console.log("Bang");
}
//****end***********************************************************************************************************************


//Display number range on Storm center page
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
//****end***********************************************************************************************************************


 //Successful sent check mark  on thanks page
$("button").click(function () {
    $(".check-icon").hide();
    setTimeout(function () {
        $(".check-icon").show();
    }, 10);
});
//****end***********************************************************************************************************************
