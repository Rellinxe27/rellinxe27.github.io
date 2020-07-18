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
            document.getElementById(`price${i+1}`).textContent = jsObject.guides[i].price;
            document.getElementById(`rentalType${i+1}`).textContent = jsObject.guides[i].rental;
            document.getElementById(`maxPerson${i+1}`).textContent = jsObject.guides[i].maxPersons;
            document.getElementById(`reservHalfDay${i+1}`).textContent = jsObject.guides[i].reservHalfDays;
            document.getElementById(`reservFullDay6${i+1}`).textContent = jsObject.guides[i].reservFullDays;
            document.getElementById(`walkinHalfDay${i+1}`).textContent = jsObject.guides[i].walkinHalfDays;
            document.getElementById(`walkinFullDay${i+1}`).textContent = jsObject.guides[i].walkinFullDays;
        }
    });