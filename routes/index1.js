var express = require('express');
var router = express.Router();
var Maintext = require('../models/maintext').maintext;

Maintext.findOne({'url': 'index'}, function(err, text){
	if(!text){
		text ={
			name: 'text1',
			body: '404NotFond'
		}
	}
	   res.render('index', { text: text });
});


module.exports = router;
