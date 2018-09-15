'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ResponseItemSchema = new Schema({
});

module.exports = mongoose.model('ResponseItems', ResponseItemSchema);