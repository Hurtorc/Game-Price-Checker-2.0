// Frontend JS for login page, this is loaded via the script tag in the login.handlebars file
const gameAdd = async function (event) {
  event.preventDefault();
  console.log("Game add button clicked");
  const gamenameEl = document.querySelector("#game-name-input");
  const gamepriceEl = document.querySelector("#game-price-input");
  const gameplatformEl = document.querySelector("#game-platform-input");
  const gameurlEl = document.querySelector("#game-url-input");

  let userid = req.session.user_id;

  const response = await fetch("/api/gameData", {
    method: "POST",
    body: JSON.stringify({
      name: gamenameEl.value,
      price: gamepriceEl.value,
      platform: gameplatformEl.value,
      url: gameurlEl.value,
      user_id: userid,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("Game added");
  } else {
    console.error("Failed to add game: Response code ", response.status);
  }
};

document.querySelector("#game-add-form").addEventListener("submit", gameAdd);
