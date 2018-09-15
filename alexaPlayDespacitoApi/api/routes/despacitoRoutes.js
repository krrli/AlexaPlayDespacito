'use strict';
module.exports = function (app) {
  var despacito = require('../controllers/gameController');

  app.route('/games')
    .get(despacito.list_all_games)
    .post(despacito.create_game);


  app.route('/games/:gameId')
    .get(despacito.get_game)
    .put(despacito.set_response);
};
