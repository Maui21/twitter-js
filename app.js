const express = require('express');

const app = express();

const nJucks = require('nunjucks');

app.set('port', 3000); 

//copy and pasted from setup
// app.use(function (req, res, next) {
//     // do your logging here
//     console.log('Request Type:', req.method);
//     // call `next`, or else your app will be a black hole — receiving requests but never properly responding
//     next();
// });


// app.get('/', function(req, res, next) {

// 	res.send('Welcome!');
// });


// app.listen(app.get('port'), function () {
// 	console.log('Express started on http://localhost:' + app.get('port'));
// });