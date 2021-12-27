// variables

const inputSearch = document.getElementById('search');

const btnSearch = document.getElementById('btnSearch');

const btnGenerate = document.getElementById('btnGenerate')

const card = document.getElementById('card_container');

// functions

async function getData(url) {
    return (await fetch(url)).json();
}


// load data from api and show in card container

card.innerHTML = '';

btnSearch.addEventListener('click', async () => {
    try {
        result = await getData(`https://rickandmortyapi.com/api/character/?name=${inputSearch.value}`);
    }
    catch (error) {
        console.log(error.message);
    }
    console.log(result)
    for (let i = 0; i < result.results.length; i++) {
        const id = result.results[i].id;
        const name = result.results[i].name;
        const status = result.results[i].status;
        const image = result.results[i].image;
        const species = result.results[i].species;
        const gender = result.results[i].gender;
        const created = result.results[i].created;
        const origin = result.results[i].origin.name;
        const location = result.results[i].location.name;

        card.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <img src="${image}" alt="rick" class="header-image" alt="${name}">
                    <div class="header-info">
                        <div class="hero-name">${name}</div>
                        <div class="small-text">id: ${id} - ${created}</div>
                    </div>
                </div>
                <div class="card-info">
                    <div class="info-item">
                        <span class="name">STATUS</span>
                        <span class="value">${status}</span>
                    </div>
                    <div class="info-item">
                        <span class="name">SPECIES</span>
                        <span class="value">${species}</span>
                    </div>
                    <div class="info-item">
                        <span class="name">GENDER</span>
                        <span class="value">${gender}</span>
                    </div>
                    <div class="info-item">
                        <span class="name">ORIGIN</span>
                        <span class="value">${origin}</span>
                    </div>
                    <div class="info-item">
                        <span class="name">LAST<br>LOCATION</span>
                        <span class="value">${location}</span>
                    </div>
                </div>
        </div>`;
    }
});

btnGenerate.addEventListener('click', async () => {
    let result = [];

    try {
        result = await getData('https://rickandmortyapi.com/api/character/');
    }
    catch (error) {
        console.error(error.message);
    }

    for (let i = 0; i < result.results.length; i++) {
        const id = result.results[i].id;
        const name = result.results[i].name;
        const status = result.results[i].status;
        const image = result.results[i].image;
        const species = result.results[i].species;
        const gender = result.results[i].gender;
        const created = result.results[i].created;
        const origin = result.results[i].origin.name;
        const location = result.results[i].location.name;

        card.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <img src="${image}" alt="rick" class="header-image" alt="${name}">
                    <div class="header-info">
                        <div class="hero-name">${name}</div>
                        <div class="small-text">id: ${id} - ${created}</div>
                    </div>
                </div>
                <div class="card-info">
                    <div class="info-item">
                        <span class="name">STATUS</span>
                        <span class="value">${status}</span>
                    </div>
                    <div class="info-item">
                        <span class="name">SPECIES</span>
                        <span class="value">${species}</span>
                    </div>
                    <div class="info-item">
                        <span class="name">GENDER</span>
                        <span class="value">${gender}</span>
                    </div>
                    <div class="info-item">
                        <span class="name">ORIGIN</span>
                        <span class="value">${origin}</span>
                    </div>
                    <div class="info-item">
                        <span class="name">LAST<br>LOCATION</span>
                        <span class="value">${location}</span>
                    </div>
                </div>
        </div>`;
    }
});

