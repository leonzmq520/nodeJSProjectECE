var app = require('../lib/app.js');
var express = require('express');
var app2 = express();
var app3 = express();
var path = require('path');
var routes = require('../routes/index.js');

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000);
// Put a friendly message on the terminal
console.log('Server Http running at http://127.0.0.1:8000/');

// Configure our EXPRESS server to respond with Hello World to all requests.
app2.get('/', function(req, res){
    res.send('Hello World\n');
});
//Listen on port 3000
app2.listen(3000);
//Put a friendly message on the terminal
console.log('Server Express running at http://127.0.0.1:3000/');

//view engine setup
    app3.set('views', path.join(__dirname, '../views'));
    app3.set('view engine', 'jade');

//get router module
    app3.use('/', routes);
    app3.listen(3333);
    console.log('Server Express/Jade running at http://127.0.0.1:3333/');

// catch 404 and forward to error handler
app3.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

