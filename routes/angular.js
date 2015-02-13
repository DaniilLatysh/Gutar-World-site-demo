exports.index = function(req, res){
	config = require('../config');
	scripts = config.get('scripts');
	scripts[0] = 'javascripts/angular.min.js';
	scripts[1] = 'javascripts/controler.js';
	styles = config.get('styles');
	styles.push('stylesheets/style.css');
	res.render('angular');
}