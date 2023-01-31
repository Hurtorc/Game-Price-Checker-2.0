const { history_price } = require("../models");

const priceData = [
  {
    id: 0,
    game_id: 1,
    price: 10.99,
    user_id: 0,

    id: 1,
    game_id: 1,
    price: 15.99,
    user_id: 0,
   
    id: 2,
    game_id: 1,
    price: 20.99,
    user_id: 0,

    id: 3,
    game_id: 1,
    price: 25.99,
    user_id: 0,

    id: 4,
    game_id: 1,
    price: 30.99,
    user_id: 0,
   
   
   
    id: 5,
    game_id: 1,
    price: 10.99,
    user_id: 1,

    id: 6,
    game_id: 1,
    price: 15.99,
    user_id: 1,

    id: 7,
    game_id: 1,
    price: 20.99,
    user_id: 1,


    id: 8,
    game_id: 1,
    price: 25.99,
    user_id: 1,

    id: 9,
    game_id: 1,
    price: 30.99,
    user_id: 1,



    id: 10,
    game_id: 1,
    price: 10.99,
    user_id: 2,


    id: 11,
    game_id: 1,
    price: 15.99,
    user_id: 2,

    id: 12,
    game_id: 1,
    price: 20.99,
    user_id: 2,

    id: 13,
    game_id: 1,
    price: 25.99,
    user_id: 2,

    id: 14,
    game_id: 1,
    price: 30.99,
    user_id: 2,




    id: 15,
    game_id: 1,
    price: 10.99,
    user_id: 3,

    id: 16,
    game_id: 1,
    price: 15.99,
    user_id: 3,

    id: 17,
    game_id: 1,
    price: 20.99,
    user_id: 3,

    id: 18,
    game_id: 1,
    price: 25.99,
    user_id: 3,

    id: 19,
    game_id: 1,
    price: 30.99,
    user_id: 3,



    id: 20,
    game_id: 1,
    price: 10.99,
    user_id: 4,

    id: 21,
    game_id: 1,
    price: 15.99,
    user_id: 4,

    id: 22,
    game_id: 1,
    price: 20.99,
    user_id: 4,

    id: 23,
    game_id: 1,
    price:25.99,
    user_id: 4,

    id: 24,
    game_id: 1,
    price: 30.99,
    user_id: 4,



    id: 25,
    game_id: 1,
    price: 10.99,
    user_id: 5,

    id: 26,
    game_id: 1,
    price: 15.99,
    user_id: 5,

    id: 27,
    game_id: 1,
    price: 20.99,
    user_id: 5,

    id: 28,
    game_id: 1,
    price: 25.99,
    user_id: 5,

    id: 29,
    game_id: 1,
    price: 30.99,
    user_id: 5,



    id: 30,
    game_id: 1,
    price: 10.99,
    user_id: 6,

    id: 31,
    game_id: 1,
    price: 15.99,
    user_id: 6,

    id: 32,
    game_id: 1,
    price: 20.99,
    user_id: 6,

    id: 33,
    game_id: 1,
    price: 25.99,
    user_id: 6,

    id: 34,
    game_id: 1,
    price: 30.99,
    user_id: 6,


    id: 35,
    game_id: 1,
    price: 10.99,
    user_id: 7,

    id: 36,
    game_id: 1,
    price: 15.99,
    user_id: 7,

    id: 37,
    game_id: 1,
    price: 20.99,
    user_id: 7,

    id: 38,
    game_id: 1,
    price: 25.99,
    user_id: 7,

    id: 39,
    game_id: 1,
    price: 30.99,
    user_id: 7,

    
    id: 40,
    game_id: 1,
    price: 10.99,
    user_id: 8,

    id: 41,
    game_id: 1,
    price: 15.99,
    user_id: 8,

    id: 42,
    game_id: 1,
    price: 20.99,
    user_id: 8,

    id: 43,
    game_id: 1,
    price: 25.99,
    user_id: 8,

    id: 44,
    game_id: 1,
    price: 30.99,
    user_id: 8,


    id: 45,
    game_id: 1,
    price: 10.99,
    user_id: 9,

    id: 46,
    game_id: 1,
    price: 15.99,
    user_id: 9,

    id: 47,
    game_id: 1,
    price: 20.99,
    user_id: 9,

    id: 48,
    game_id: 1,
    price: 25.99,
    user_id: 9,

    id: 49,
    game_id: 1,
    price: 30.99,
    user_id: 9,

    
    id: 50,
    game_id: 1,
    price: 10.99,
    user_id: 10,

    id: 51,
    game_id: 1,
    price: 15.99,
    user_id: 10,

    id: 52,
    game_id: 1,
    price: 20.99,
    user_id: 10,

    id: 53,
    game_id: 1,
    price: 25.99,
    user_id: 10,

    id: 54,
    game_id: 1,
    price: 30.99,
    user_id: 10,


    id: 55,
    game_id: 1,
    price: 10.99,
    user_id: 11,

    id: 56,
    game_id: 1,
    price: 15.99,
    user_id: 11,

    id: 57,
    game_id: 1,
    price: 20.99,
    user_id: 11,

    id: 58,
    game_id: 1,
    price: 25.99,
    user_id: 11,

    id: 59,
    game_id: 1,
    price: 30.99,
    user_id: 11,


    id: 60,
    game_id: 1,
    price: 10.99,
    user_id: 12,


    id: 61,
    game_id: 1,
    price: 15.99,
    user_id: 12,


    id: 62,
    game_id: 1,
    price: 20.99,
    user_id: 12,


    id: 63,
    game_id: 1,
    price: 25.99,
    user_id: 12,


    id: 64,
    game_id: 1,
    price: 30.99,
    user_id: 12,


    id: 65,
    game_id: 1,
    price: 10.99,
    user_id: 13,

    id: 66,
    game_id: 1,
    price: 15.99,
    user_id: 13,

    id: 67,
    game_id: 1,
    price: 20.99,
    user_id: 13,

    id: 68,
    game_id: 1,
    price: 25.99,
    user_id: 13,

    id: 69,
    game_id: 1,
    price: 30.99,
    user_id: 13,

}];

const seedPrice = () => history_price.bulkCreate(priceData);
seedPrice();
module.exports = seedPrice;
