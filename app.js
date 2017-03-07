const express = require('express');

const app = express();

const nunjucks = require('nunjucks');

// var locals = {
// 	title : 'Magical People', 
// 	people : [
// 		{name : 'Gandalf'},
// 		{name : 'Frodo'},
// 		{name : 'Hermione'}
// 	]
// };

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true});

// nunjucks.render('index.html', locals, function(err, output) {
// 	console.log(output);
// });

// nunjucks.configur('views', )

app.get('/is-anybody-in-there', function(req, res, next) {
	console.log(req.method, '/is-anybody-in-there');
	next();
})

app.post('/modernism', function(req, res, next){
	console.log(req.method, '/modernism');
	next()
})

app.get('/', function(req, res, next) {


	res.statusCode = 200;

	console.log(res.statusCode);

	next();
	// console.log(res.status());
	// res.send('Welcome!');
});

app.use(function(req,res,next){
    console.log('Request type:', req.method)
	res.render( 'index', {title: 'Hall of Fame', people: people} );
})


// app.set('port', 3000); 
app.listen(3000, function () {
	console.log('Express started on http://localhost:' + 3000);
});