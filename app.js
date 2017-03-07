const express = require('express');

const app = express();

const nJucks = require('nunjucks');

// app.set('port', 3000); 
app.listen(3000, function () {
	console.log('Express started on http://localhost:' + 3000);
});

app.use(function(req,res,next){
    console.log('Request type:', req.method)
    next();
})

app.get('/', function(req, res, next) {
	res.send('Welcome!');
});


