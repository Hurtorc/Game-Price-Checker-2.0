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
    name: "BioShock",
    platform: 1,
    price: 22.99,
    url: null,
    user_id: 1,
  },
  {
    
    name: "The Legend of Zelda: Ocarina of Time",
    platform: 1,
    price: 39.99,
    url: null,
    user_id: 1,
  },
  {
    
    name: "The Legend of Zelda: Majora's Mask",
    platform: 1,
    price: 39.99,
    url: null,
    user_id: 1,
  },
  {
    
    name: "Modern Warfare 2",
    platform: 1,
    price: 69.99,
    url: null,
    user_id: 1,
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
    user_id: 1,
  },
  {
    name: "Modern Warfare",
    platform: 1,
    price: 18.99,
    url: null,
    user_id: 1,
  },
  {
    name: "Modern Warfare 2",
    platform: 1,
    price: 69.99,
    url: null,
    user_id: 1,
  },
  {
    name: "Asassins Creed Mirage",
    platform: 1,
    price: 59.99,
    url: null,
    user_id: 1,
  },
  {
    name: "Modern Warfare",
    platform: 1,
    price: 18.99,
    url: null,
    user_id: 1,
  },
  {
    name: "Modern Warfare 2",
    platform: 1,
    price: 69.99,
    url: null,
    user_id: 1,
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
    user_id: 1,
  },
  { 
    name: "Modern Warfare 2",
    platform: 1,
    price: 69.99,
    url: null,
    user_id: 1,
  },
  {
 
    name: "Asassins Creed Mirage",
    platform: 1,
    price: 59.99,
    url: null,
    user_id: 1,
  },
  {
    name: "Grand Theft Auto V",
    platform: 1,
    price: 39.99,
    url: null,
    user_id: 1,
  },
  {
    name: "God of War Ragnarok",
    platform: 1,
    price: 54.99,
    url: null,
    user_id: 1,
  },
  {
    name: "God of War 4",
    platform: 1,
    price: 54.99,
    url: null,
    user_id: 1,
  },
  {
    name: "Ghost of Tsusshima",
    platform: 1,
    price: 69.99,
    url: null,
    user_id: 1,

  }

  
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
