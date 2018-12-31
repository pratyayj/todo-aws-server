// Initialize express router
let router = require('express').Router();
// Importing in the todo Model
let Tag = require('./tagModel');
// Import todo controller
var tagController = require('./tagController');

// Using the controller to process the create Tag
router.route('/createTag')
.post(tagController.create)

// Using the controller to process display tags request
router.route('/displayAllTags')
.get(tagController.displayAll)

module.exports = router;