// FileName: index.js

// express-handlebars
let handlebars = require('express-handlebars');
// Import express
let express = require('express');
// routes for API
let todoApiRoutes = require("./todo-api-router.js");
let tagApiRoutes = require("./tag-api-router.js");
// Import Body-parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
//
let pretty = require('express-prettify');

// Initialize the app
let app = express();
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL

// Connecting to mLab mongoDB
mongoose.connect('mongodb://pratyayj:defaultAdmin1@ds111913.mlab.com:11913/flutter_todolist');
var db = mongoose.connection;

// Set up body parser to read body of HTML requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname +'/public'));

// Use prettify for JSON
app.use(pretty({query: 'pretty'}))

app.set('json spaces', 2);

app.use(function(req, res, next){
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

var message = require('./lib/message.js');
app.get('/', (req, res) => 
    res.render('home', {message: message.getRandomMessage()})
);
// For /api based HTML requests use the routing
app.use('/api', todoApiRoutes);
app.use('/api', tagApiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});