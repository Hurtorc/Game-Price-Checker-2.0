const { Model, DataTypes } = require("sequelize");
// const { Hooks } = require("sequelize/types/hooks");
const sequelize = require("../config");

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: "platform",
        key: "id",
      },
    },
    price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      unique: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "game",
  }
);

// sequelize.query(`DROP TRIGGER IF EXISTS history_trigger
// delimiter //
// CREATE TRIGGER history_trigger
// BEFORE UPDATE ON game
//     FOR EACH ROW
//     BEGIN
//         IF OLD.price != NEW.price
//         THEN
//                 INSERT INTO history_price
//                     (
//                         game_id,
//                         game_price,
//                         post_date

//                     )
//                     VALUES
//                     (
//                         OLD.id,
//                         OLD.price,
//                         OLD.post_date
//                     );
//         END IF;
//     END;
// delimiter ;`)

module.exports = Game;
