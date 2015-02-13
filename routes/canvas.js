exports.index = function(req, res){
	config = require('../config');
	scripts = config.get('scripts');
	scripts.push('javascripts/canvas.js');
	styles = config.get('styles');
	styles.push('stylesheets/canvas.css');
	res.render('canvas',{
	styles: styles,
	scripts: scripts
	});
}