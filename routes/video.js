exports.index = function(req, res){
	config = require('../config');
	scripts = config.get('scripts');
	scripts.push('javascripts/video.js');
	styles = config.get('styles');
	styles.push('stylesheets/style.css');
	res.render('video',{
	styles: styles,
	scripts: scripts
	});
}