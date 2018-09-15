'use strict';
module.exports = function (app) {
  var game_controller = require('../controllers/gameController');
  var user_controller = require('../controllers/userController');

  app.route('/games')
    .get(game_controller.list_all_games)
    .post(game_controller.create_game);


  app.route('/games/:gameId')
    .get(game_controller.get_game)
    .put(game_controller.set_response);

  app.route('/user')
    .get(user_controller.list_all_user)
    .post(user_controller.create_user);
};
