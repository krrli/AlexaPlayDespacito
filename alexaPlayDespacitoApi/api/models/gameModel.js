'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
    id: {
        type: String
    },
    player1: {
        type: String,
    },
    player2: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['ongoing', 'completed']
        }],
        default: ['ongoing']
    }
});

module.exports = mongoose.model('Games', GameSchema);