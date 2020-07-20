const jsonURL = "https://rellinxe27.github.io/TermProject/rentals.json";

fetch(jsonURL)
    .then((response) => response.json())
    .then((jsObject) => {
        for (let i = 0; i < jsObject.guides.length; i++) {
            document.getElementById(`name${i+1}`).textContent = jsObject.guides[i].name;
            const picName = jsObject.guides[i].photo;
            const picSource = `https://rellinxe27.github.io/TermProject/images/${picName}.jpg`;
            const altText = "picture of " + jsObject.guides[i].name;
            document.getElementById(`pic${i+1}`).setAttribute('src', picSource);
            document.getElementById(`pic${i+1}`).setAttribute('alt', altText);
            document.getElementById(`maxperson${i+1}`).textContent = jsObject.guides[i].maxPersons;
            document.getElementById(`halfday${i+1}`).textContent = jsObject.guides[i].halfDays;
            document.getElementById(`fullday${i+1}`).textContent = jsObject.guides[i].fullDays;
            document.getElementById(`pric${i+1}`).textContent = jsObject.guides[i].price;
        } 
    }); 
