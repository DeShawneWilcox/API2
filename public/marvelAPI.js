const baseURL = "http://gateway.marvel.com/"
const apikey = "66eedb387295bf29b8cb125ed88436c1"

let url;

let marvelSearch = document.querySelector('.search');
let searchForm = document.querySelector('form');
let submitBtn = document.querySelector('.submit');
let section = document.querySelector('section');
let hash = 'c01549da7b564f9b8f982987362c2da1';

searchForm.addEventListener('submit' , fetchResults); 

let characters = [];

async function fetchResults(e) {
    e.preventDefault();
    for(let offset = 0; offset <= 1400; offset += 100) {
        let res =await fetch(`${baseURL}v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&limit=100&offset=${offset}`);
        let json = await res.json()
        // console.log(json);
        characters.push(...json.data.results);
    }
    displayResults(characters);
    // console.log(characters);
}



function displayResults(json) {
    // console.log('displayResults', json);
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let profile = characters;
    characters.forEach(c => {
        
        if (c.name.toLowerCase().includes(marvelSearch.value.toLowerCase()) ) {
            console.log(c.name);
            console.log(c.thumbnail.path+'.'+c.thumbnail.extension);
            console.log(c.description);
            console.log(c.series);
            
            const picture = document.createElement('img');
            const characterName = document.createElement('h1');
            // const series = document.createElement('h3');
            const description = document.createElement('p');
        
        
            picture.src = c.thumbnail.path+"/portrait_xlarge."+c.thumbnail.extension;
            picture.alt = `${c.name}`; 
            // picture.style = ;
            
            characterName.className = 'CharacterName';
            characterName.innerText = c.name;
            // // // name.style = ;
        
            // //id.className = 'characterId';
            // // id.innerText = `${profile.Character.id}`;
            // // // id.style = ;
        
            // series.className = 'marvelSeries';
            // series.innerText = c.series;
            // // // series.style = ;
        
            description.className = 'characterDescription';
            description.innerText = c.description;
            // // // description.style = ;
        
            section.appendChild(picture);
            section.appendChild(characterName);
            // // section.appendChild(id);
            // section.appendChild(series);
            section.appendChild(description);
        }
    })
    if (profile.length === 0) {
        console.log('no results');
    } 
        

        // fetch(url);
    
    
}
