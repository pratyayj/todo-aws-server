// FileName: index.js

// Import express
let express = require('express')
// routes for API
let todoApiRoutes = require("./todo-api-router.js")
// Import Body-parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
//
let pretty = require('express-prettify');

// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Connecting to mLab mongoDB
mongoose.connect('mongodb://pratyayj:defaultAdmin1@ds111913.mlab.com:11913/flutter_todolist');
var db = mongoose.connection;

// Set up body parser to read body of HTML requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Use prettify for JSON
app.use(pretty({query: 'pretty'}))

app.set('json spaces', 2);

// For /api based HTML requests use the routing
app.use('/api', todoApiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});