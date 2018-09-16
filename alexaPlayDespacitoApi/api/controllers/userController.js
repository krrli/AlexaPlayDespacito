'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Users');


exports.createUser = function (req, res) {
    console.log(req);
    var new_user = new User({
        username: req.body.username
    });

    return new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.getUser = function (req, res) {
    var id = req.params.userId
    return User.findById(id, null, (err, data) => {
        if (err) {
            res.send(err)
        }
        res.json(data)
    })
}
