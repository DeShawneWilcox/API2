const baseURL = "http://gateway.marvel.com"
const apikey = "66eedb387295bf29b8cb125ed88436c1"

let url;

let marvelSearch = document.querySelector('.search');
let searchForm = document.querySelector('form');
let submitBtn = document.querySelector('.submit');
let section = document.querySelector('section');

searchForm.addEventListener('submit' , displayResults); 

// let characters = [];

// async function getCharacters() {
//     for(let offset = 0; offset <= 1400; offset += 100) {
//         let res =await fetch(`${baseUrl}v1/public/characters?apikey=${apikey}&limit=100&offset=${offset}`);
//         let json = await res.json()
//         console.log(json);
//         characters.push(...json.data.results);
//     }
//     console.log(characters);
// }

function fetchResults(e) {
    console.log(e);
    e.preventDefault();

    url = baseURL + '?api-key' + apikey + '&q=' + marvelSearch.value;

    fetch(url)
    .then(function(result) {
        console.log(result);
        return result.json();
    })
    .then(function(json) {
        console.log(json);
        displayResults(json);
    })
}

function displayResults(json) {
    console.log('displayResults', json);
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let profile = json;

    if (profile.length === 0) {
        console.log('no results');
    } else {
        // const picture = document.createElement('img');
        const characterName = document.createElement('h1');
        const id = document.createElement('h3');
        const series = document.createElement('h3');
        const description = document.createElement('p');


        // picture.src = profile.Character.thumbnail;
        // picture.alt = profile.Character.name; 
        // picture.style = ;
        
        characterName.className = 'CharacterName';
        characterName.innerText = profile.Character.name;
        // name.style = ;

        id.className = 'characterId';
        id.innerText = `${profile.Character.id}`;
        // id.style = ;

        series.className = 'marvelSeries';
        series.innerText = `${profile.character.series}`;
        // series.style = ;

        description.className = 'characterDescription';
        description.innerText = `${profile.character.description}`;
        // description.style = ;

        // section.appendChild(picture);
        section.appendChild(characterName);
        section.appendChild(id);
        section.appendChild(series);
        section.appendChild(description);

        fetch(url);
    }
    
}
