var ctx = document.getElementById("myChart");

//funtion that returns the gameID from the history_price table
// const getGameID = async (gameName) => {
//   const game = await history_price.findOne({
//     where: {
//       game_id: gameName,
//     },
//   });
//   if (game) {
//     return game;
//   } else {
//     return false;
//   }
// };

// console.log(data);
console.log("chart js", ctx);
async function buildGamePriceChart() {
  const res = await fetch("/api/gameData/price-history/1");
  const data = await res.json();
  console.log("GOT PRICE DATA", data);
  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "January",
        "Febraury",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "History Of Game Price",
          data,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

buildGamePriceChart();
