const router = require("express").Router();
const { Game, history_price } = require("../../models");
const dbConnection = require("../../config/index");
const sequelize = require("sequelize");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const gameData = await Game.findAll();
    const games = gameData.map((game) => game.get({ plain: true }));
    console.log(games);
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id);
    if (!gameData) {
      res.status(404).json({ message: "No game found with this id!" });
      return;
    }
    const game = gameData.get({ plain: true });
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const gameData = await Game.create({
      name: req.body.name,
      price: req.body.price,
      url: req.body.url,
      user_id: req.session.userId || req.body.user_id,
      platform: req.body.platform,
    });
    res.status(200).json(gameData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/price-history/:game", async (req, res) => {
  const gamePrices = await history_price.findOne({
    where: {
      game_id: req.params.game,
    },
  });
  console.log(gamePrices);
  if (gamePrices) {
    res.json(gamePrices);
  } else {
    return false;
  }
});

module.exports = router;
