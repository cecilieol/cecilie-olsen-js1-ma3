// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.getElementById("results");

async function getInfo() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.results);

        resultsContainer.innerHTML = "";

        for (let i = 0; i <= 7; i++) {

            let game = data.results[i];
            if (game === undefined) {
                break;
            }

            console.log(game.name);
            console.log(game.rating);
            console.log(game.tags.length);

            resultsContainer.innerHTML += `<div id="results">
                                            <p>Name: ${game.name}</p>
                                            <p>Rating: ${game.rating}</p>
                                            <p>Number of tags: ${game.tags.length}</p>
                                        </div>`;
        }
    } catch (error) {
        resultsContainer.innerHTML = displayError("An error occurred");
    }
}

getInfo();