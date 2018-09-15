'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.list_all_user = function (req, res) {
    console.log('list users...');

    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.create_user = function (req, res) {
    var new_user = new User(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};
