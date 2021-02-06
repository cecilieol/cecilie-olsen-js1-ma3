// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.getElementById("results");

async function getInfo() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        resultsContainer.innerHTML = "";

        for (let i = 0; i > results.length; i++) {
            console.log(results[i].name);
            console.log(results[i].rating);
            console.log(results[i].tags.length);

            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML = `<div id="result">
                                            <p>Name: ${results[i].name}</p>
                                            <p>Rating: ${results[i].rating}</p>
                                            <p>Number of tags: ${results[i].tags.length}</p>
                                        </div>`;
        }
    } catch (error) {
        resultsContainer.innerHTML = displayError("An error occurred");
    }
}

getInfo();