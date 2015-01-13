var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect("mongodb://localhost/kurs", config.get("mongoose.options"))

module.exports = mongoose;