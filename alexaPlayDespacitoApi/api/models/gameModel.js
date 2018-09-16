'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
    challanger: {
        id: String,
        username: String,
    },
    opponent: {
        id: String,
        username: String,
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
    },
    questions: [
        { songUrl: String, responses: [ { title: String, artist: String, songUrl: String}]}
    ]
});

module.exports = mongoose.model('Games', GameSchema);