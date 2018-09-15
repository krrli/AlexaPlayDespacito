'use strict';

var mongoose = require('mongoose'),
    Game = mongoose.model('Games');

exports.list_all_games = function (req, res) {
    Game.find({}, function (err, game) {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.create_game = function (req, res) {
    var new_game = new Game(req.body);
    new_game.save(function (err, game) {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.get_game = function (req, res) {
    Game.findById(req.params.gameId, function (err, game) {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.set_response = function (req, res) {

};