const { history_price } = require("../models");

const priceData = [
  {
    id: 0,
    game_id: 1,
    price: 10.99,
    user_id: 1,
  },
];

const seedPrice = () => history_price.bulkCreate(priceData);
seedPrice();
module.exports = seedPrice;
