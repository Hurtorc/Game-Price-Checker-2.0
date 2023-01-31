// Dashboard Routes
// This is a set of routes that will be used to render the dashboard pages.
// All of these routes will be protected by the withAuth middleware function.

const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Game, User, Platform } = require("../models");

// TODO - create logic for the GET route for / that renders the dashboard homepage
// It should display all of the posts created by the logged in user
router.get("/", withAuth, async (req, res) => {
  try {
    //--------------------------------------------//
    User.findOne({
      where: {
        id: req.session.userId,
      },
    }).then((userData) => {
      const users = userData.get({ plain: true });

      // console.log(users);
      //--------------------------------------------//
      Game.findAll({
        where: {
          user_id: req.session.userId,
        },
      }).then((gameData) => {
        const games = gameData.map((game) => game.get({ plain: true }));

        //.console.log(games);
        //--------------------------------------------//
        Platform.findAll().then((platformData) => {
          const platforms = platformData.map((platform) =>
            platform.get({ plain: true })
          );
          // console.log(platforms);
          //--------------------------------------------//

          res.render("admin-all-posts", {
            layout: "dashboard",
            platforms,
            users,
            games,
            loggedIn: true,
          });
        });
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// const userData = await User.findAll({
// const users = userData.map((user) => user.get({ plain: true }))

// TODO - retrieve all posts from the database for the logged in user
// render the dashboard template with the posts retrieved from the database
//default layout is set to main.handlebars, layout need to be changed to dashboard to use dashboard.handlebars
// let posts = Post.findAll();

//   res.render("admin-all-posts", {
//     layout: "dashboard",
//   });
// } catch (err) {
//   res.status(500).json(err);
// }
// // refer to admin-all-posts.handlebars write the code to display the posts

// TODO - create logic for the GET route for /game that renders the gamep page

module.exports = router;
