var app = require('../lib/app.js');
var express = require('express');
var app2 = express();

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
