const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank');
const routes = require('./routes');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/', routes);

//pseudocode for express.static
// express.static = function(str) {
// 	return function(req, res, next) {
// 		var fileToServe = fs.readFile(str + '/' + req.url)
// 		if(fileToServe) {
// 			res.sendFile(str + '/' + req.url)
// 		} else {
// 			next();
// 		}
// 	}
// }


//static send


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true});

// app.set('port', 3000); 
app.listen(3000, function () {
	console.log('Express started on http://localhost:' + 3000);
});