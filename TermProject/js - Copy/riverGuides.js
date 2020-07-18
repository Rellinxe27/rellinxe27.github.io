const jsonURL = "https://ellenhc.github.io/termProject/riverguides.json";

fetch(jsonURL)
    .then((response) => response.json())
    .then((jsObject) => {
        for (let i = 0; i < jsObject.guides.length; i++) {
            document.getElementById(`name${i+1}`).textContent = jsObject.guides[i].name;
            const picName = jsObject.guides[i].photo;
            const picSource = `https://ellenhc.github.io/termProject/images/${picName}.jpg`;
            const altText = "portrait of " + jsObject.guides[i].name;
            document.getElementById(`pic${i+1}`).setAttribute('src', picSource);
            document.getElementById(`pic${i+1}`).setAttribute('alt', altText);
            document.getElementById(`email${i+1}`).textContent = jsObject.guides[i].email;
            document.getElementById(`cert${i+1}`).textContent = jsObject.guides[i].certification;
            document.getElementById(`years${i+1}`).textContent = jsObject.guides[i].years;
            document.getElementById(`bio${i+1}`).textContent = jsObject.guides[i].biography;
        }
    });