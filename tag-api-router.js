// Initialize express router
let router = require('express').Router();
// Importing in the todo Model
let Tag = require('./tagModel');
// Import todo controller
var tagController = require('./tagController');

// Using the controller to process the create Todo requests
router.route('/createTag')
.post(tagController.create)

module.exports = router;