const express = require('express');

const app = express();

const nunjucks = require('nunjucks');

var locals = {
	title : 'Magical People', 
	people : [
		{name : 'Gandalf'},
		{name : 'Frodo'},
		{name : 'Hermione'}
	]
};


nunjucks.configure('views', {noCache: true});

nunjucks.render('index.html', locals, function(err, output) {
	console.log(output);
});

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
    res.send('you got something!')
})


// app.set('port', 3000); 
app.listen(3000, function () {
	console.log('Express started on http://localhost:' + 3000);
});