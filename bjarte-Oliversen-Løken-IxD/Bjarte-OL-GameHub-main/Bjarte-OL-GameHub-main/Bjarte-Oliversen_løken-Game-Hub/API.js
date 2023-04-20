const apiURL =
  "https://api.rawg.io/api/games?key=6dfa21145c0040f6a9505076866e94ca&dates=2019-09-01,2019-09-30&platforms=18,1,7;";
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const gamesListContainer = data.results
      .map((game) => {
        const name = game.name || "Unknown";
        const image = game.background_image || "";
        const description = game.description || "No description available";
        const prize = Math.floor(Math.random() * 31) + 20; // generate a random prize between 20 and 50 euros

        return `
        <div class="game">
          <h2>${name}</h2>
          <img class="coverimg" src="${image}" alt="${name}">
           <p>${description}</p>
           <p>Prize: ${prize}€</p>
           <a class="add-to-cart-btn" href="checkout.html">Add to Cart</a>
           </div>
           `;
      })
      .join("");
    document.getElementById("games-list-container").innerHTML =
      gamesListContainer;
  })
  .catch((error) => console.error(error));

//
