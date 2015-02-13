exports.index = function(req, res){
	config = require('../config');
	scripts = config.get('scripts');
	scripts.push('javascripts/guitars.js');
	styles = config.get('styles');
	styles[2] = 'stylesheets/style.css';
	res.render('guitars',{
	styles: styles,
	scripts: scripts
	});
}