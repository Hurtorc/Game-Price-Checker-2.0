const { Game } = require("../models");

const gameData = [
  {
    name: "Super Mario 64",
    platform: 1,
    price: 10.99,
    url: null,
    user_id: 1,
  },
  {
    id: 1,
    name: "BioShock",
    platform: 1,
    price: 22.99,
    url: null,
    user_id: 2,
    post_date: "2021-01-02",
  },
  {
    
    name: "The Legend of Zelda: Ocarina of Time",
    platform: 1,
    price: 39.99,
    url: null,
    user_id: 3,
    post_date: "2021-01-03",
  },
  {
    
    name: "The Legend of Zelda: Majora's Mask",
    platform: 1,
    price: 39.99,
    url: null,
    user_id: 4,
    post_date: "2021-01-04",
  },
  {
    
    name: "Modern Warfare 2",
    platform: 1,
    price: 69.99,
    url: null,
    user_id: 1,
    post_date: "2021-10-28",
  },
  {
    name: "Asassins Creed Mirage",
    platform: 1,
    price: 59.99,
    url: null,
    user_id: 1,
  },
  {
    name: "The Legend of Zelda: Link's Awakening",
    platform: 11,
    price: 10.99,
    url: 'https://www.gamestop.com/video-games/nintendo-switch/products/the-legend-of-zelda-links-awakening---nintendo-switch/205958.html',
    user_id: 1,
  },
  {
    name: "Asassins Creed Mirage",
    platform: 1,
    price: 59.99,
    url: null,
    user_id: 3,
    post_date: "2021-01-05",
  },
  {
    name: "Modern Warfare",
    platform: 1,
    price: 18.99,
    url: null,
    user_id: 1,
    post_date: "2021-10-25",
  },
  {
    name: "Modern Warfare 2",
    platform: 1,
    price: 69.99,
    url: null,
    user_id: 1,
    post_date: "2021-10-28",
  },
  {
    name: "Asassins Creed Mirage",
    platform: 1,
    price: 59.99,
    url: null,
    user_id: 3,
    post_date: "2021-01-05",
  },
  {
    name: "Modern Warfare",
    platform: 1,
    price: 18.99,
    url: null,
    user_id: 1,
    post_date: "2021-10-25",
  },
  {
    name: "Modern Warfare 2",
    platform: 1,
    price: 69.99,
    url: null,
    user_id: 1,
    post_date: "2021-10-28",
  },
  {
    name: "Asassins Creed Mirage",
    platform: 1,
    price: 59.99,
    url: null,
    user_id: 1,
  },
  {
    name: "The Legend of Zelda: Link's Awakening",
    platform: 11,
    price: 10.99,
    url: 'https://www.gamestop.com/video-games/nintendo-switch/products/the-legend-of-zelda-links-awakening---nintendo-switch/205958.html',
    user_id: 1,
  },
  {
    
    name: "Modern Warfare",
    platform: 1,
    price: 18.99,
    url: null,
    user_id: 6,
    post_date: "2021-10-25",
  },
  { 
    name: "Modern Warfare 2",
    platform: 1,
    price: 69.99,
    url: null,
    user_id: 7,
    post_date: "2021-10-28",
  },
  {
 
    name: "Asassins Creed Mirage",
    platform: 1,
    price: 59.99,
    url: null,
    user_id: 1,
    post_date: "2021-01-05",
  },
  {
    name: "Grand Theft Auto V",
    platform: 1,
    price: 39.99,
    url: null,
    user_id: 1,
    post_date: "2021-01-05",
  },
  {
    name: "God of War Ragnarok",
    platform: 1,
    price: 54.99,
    url: null,
    user_id: 11,
    post_date: "2022-11-09",
  },
  {
    name: "God of War 4",
    platform: 1,
    price: 54.99,
    url: null,
    user_id: 12,
    post_date: "2022-04-20",
  },
  {
    name: "Ghost of Tsusshima",
    platform: 1,
    price: 69.99,
    url: null,
    user_id: 13,
    post_date: "2020-17-07",

  }

  
];

const seedGames = () => Game.bulkCreate(gameData);
seedGames()
module.exports = seedGames;
