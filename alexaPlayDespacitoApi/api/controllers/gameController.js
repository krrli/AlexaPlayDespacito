'use strict';

var mongoose = require('mongoose'),
    Game = mongoose.model('Games'),
    User = mongoose.model('Users')

exports.listGames = function (req, res) {
    console.log('list games...');

    return Game.find({}, function (err, game) {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.createGame = function (req, res) {
    var game = new Game()

    challanger = User.findById(req.params.userId, null, null, (err, data) => {
        if (err) {
            res.send(err)
        }
        game.challanger.id = data._id
        game.challanger.username = data.username
    })

    opponent = User.findOne({}, null, null, (err, data) => {
        if (err) {
            res.send(err)
        }
        game.opponent.id = data._id
        game.opponent.username = data.username
    })

    let responses = [
        { "title": "Billy Jean", "artist": "Michael Jackson", "isCorrect": false },
        { "title": "Take on me", "artist": "A-HA", "isCorrect": false },
        { "title": "Poker Face", "artist": "Lady Gaga", "isCorrect": false },
        { "title": "Chop Suey", "artist": "System of a Down", "isCorrect": true },
    ];

    let questions = [
        { "songUrl": "https://p.scdn.co/mp3-preview/9a712112b9a333e326ff46c93e83c4c9e17b8e80?cid=774b29d4f13844c495f206cafdad9c86", responses },
        { "songUrl": "https://p.scdn.co/mp3-preview/2ddba43917fe8892fe9cecd237b6f8b55a174186?cid=774b29d4f13844c495f206cafdad9c86", responses },
        { "songUrl": "https://p.scdn.co/mp3-preview/9a712112b9a333e326ff46c93e83c4c9e17b8e80?cid=774b29d4f13844c495f206cafdad9c86", responses },
        { "songUrl": "https://p.scdn.co/mp3-preview/2ddba43917fe8892fe9cecd237b6f8b55a174186?cid=774b29d4f13844c495f206cafdad9c86", responses },
        { "songUrl": "https://p.scdn.co/mp3-preview/9a712112b9a333e326ff46c93e83c4c9e17b8e80?cid=774b29d4f13844c495f206cafdad9c86", responses },
    ];

    game.questions = questions

    console.log(game);
    return game
    /* return new_game.save(function (err, game) {
        if (err)
            res.send(err);
        res.json(game);
    }); */
};

exports.getGame = function (req, res) {
    return Game.findById(req.params.gameId, function (err, game) {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.sendResults = function (req, res) {

};