'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: {
        type: String,
    },
    token: {
        type: String,
    }
});

module.exports = mongoose.model('Users', UserSchema);