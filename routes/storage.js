exports.index = function(req, res){
var less = require('less');
	config = require('../config');
	scripts = config.get('scripts');
	scripts.push('javascripts/storage.js');
	styles = config.get('styles');
	styles.push('stylesheets/storage.css');
res.render('storage',{
	styles: styles,
	scripts: scripts
});

less.render('stylesheets/', function (e, output) {
  console.log(output.css);
});
}