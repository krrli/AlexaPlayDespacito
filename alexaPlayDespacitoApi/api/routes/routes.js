'use strict';
module.exports = function (app) {
  var game_controller = require('../controllers/gameController');
  var user_controller = require('../controllers/userController');

  app.route('/games/:userId')
    .get(game_controller.listGames)
    .post(game_controller.createGame);


  app.route('/games/:gameId')
    .get(game_controller.get_game)
    .put(game_controller.set_response);

  app.route('/user')
    .get(user_controller.list_all_user)
    .post(user_controller.create_user);
};
