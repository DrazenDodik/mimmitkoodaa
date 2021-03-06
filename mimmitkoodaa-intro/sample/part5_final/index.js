// lets require express, so we can use it here
var express = require('express');

// create a new instance of express
var app = express();
var path = require('path'); 

// require the body-parser so we can easily read data that is passed from our form
var bodyParser = require('body-parser');

// tell express to use bodyparser and JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// tell express to server our static files from the public folder
app.use(express.static('public'));
// tell express that we'll use ejs as our view engine
app.set('view engine', 'ejs');

const EventRouter = require('./routes/eventRouter');
app.use('/events', EventRouter);

// update the root request to send the index.html file back as our home page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

// tell express that we will use port 3000 for this webserver
app.listen(3000, function () {
  console.log('Express is ready and listetning at http://localhost:3000!');
});