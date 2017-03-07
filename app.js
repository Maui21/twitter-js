const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank');
const routes = require('./routes');


app.use('/', routes);


// var locals = {
// 	title : 'Magical People', 
// 	people : [
// 		{name : 'Gandalf'},
// 		{name : 'Frodo'},
// 		{name : 'Hermione'}
// 	]
// };

// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true});

// nunjucks.render('index.html', locals, function(err, output) {
// 	console.log(output);
// });

// nunjucks.configur('views', )



// app.set('port', 3000); 
app.listen(3000, function () {
	console.log('Express started on http://localhost:' + 3000);
});