'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
});

module.exports = mongoose.model('Questions', QuestionSchema);