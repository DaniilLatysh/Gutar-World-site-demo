exports.index = function(req, res){
	config = require('../config');
	scripts = config.get('scripts');
	scripts.push('javascripts/dragendrop.js');
	styles = config.get('styles');
	styles.push('stylesheets/dragendrop.css');
	res.render('dragendrop',{
	styles: styles,
	scripts: scripts
	});
}