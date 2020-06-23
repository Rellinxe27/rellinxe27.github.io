

 //Fetch JSON data for Index homepage
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];

        const townFilter = towns.filter(
            (town) =>
                town.name == 'Preston' ||
                town.name == 'Fish Haven' ||
                town.name == 'Soda Springs'
        );

        townFilter.forEach((town) => {
            let townSection = document.createElement('section');
            let townDiv = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');

            image.setAttribute('src', `images/${town.photo}`);
            image.setAttribute('alt', town.name);
            h2.textContent = town.name;
            motto.innerHTML = town.motto;
            year.textContent = 'Year Founded: ' + town.yearFounded;
            population.textContent = 'Population: ' + town.currentPopulation;
            rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;

            townSection.appendChild(townDiv);
            townDiv.appendChild(h2);
            townDiv.appendChild(motto);
            townDiv.appendChild(year);
            townDiv.appendChild(population);
            townDiv.appendChild(rainfall);
            townSection.appendChild(image);

            document.querySelector('.towns').appendChild(townSection);
        });
    });
 //****end***********************************************************************************************************************

