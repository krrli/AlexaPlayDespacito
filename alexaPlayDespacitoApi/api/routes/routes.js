'use strict';
module.exports = function (app) {
  var gameController = require('../controllers/gameController');
  var userController = require('../controllers/userController');

  app.route('/games/:userId')
    .get(gameController.listGames)
    .post(gameController.createGame);

  app.route('/results/:gameId')
    .post(gameController.sendResults);

  app.route('/users')
    .post(userController.createUser);

  app.route('/users/:userId')
    .get(userController.getUser);
};
