//use the input of the user to search the database for the game
//if the game is found, return the game object
//if the game is not found, return false

const searchGame = await fetch("/api/gameData", {
  method: "GET",
  body: JSON.stringify({
    name: gamenameEl.value,
  }),
  headers: { "Content-Type": "application/json" },
});

if (searchGame.ok) {
  console.log("Game found");
} else {
  alert("Failed to find game");
}

function blank() {
  document.getElementById("game-name-input").value = "";
  if (blank) return true;
  else return false;
}

const gamenameEl = document.querySelector("#game-name-input");
