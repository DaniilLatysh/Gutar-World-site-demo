exports.index = function(req, res){
	config = require('../config');
	scripts = config.get('scripts');
	scripts[0]='https://maps.googleapis.com/maps/api/js?v=3.exp';
	scripts[1]='javascripts/location.js';
	styles = config.get('styles');
	styles[1] = 'stylesheets/style.css';
	res.render('location',{
	styles: styles,
	scripts: scripts
	});
}