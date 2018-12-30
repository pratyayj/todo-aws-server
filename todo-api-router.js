// Filename: todo-api-routes.js
// Initialize express router
let router = require('express').Router();
// Importing in the todo Model
let Todo = require('./todoModel');
// Import todo controller
// Import contact controller
var todoController = require('./todoController');

// Default API response
router.route('/')
.get((req, res) => {
    res.status(200).json({
        message: 'Welcome to Flutter ToDo API crafted with love!',
     });
})  

// Using the controller to process the retrieve Todo requests
router.route('/retrieve/:todoId')
.get(todoController.retrieveSingle)

// Using the controller to process the edit Todo requests
router.route('/edit/:todoId')
.put(todoController.edit)

// Using the controller to process the create Todo requests
router.route('/createTodo')
.post(todoController.create)

// Using the controller to process delete Todo requests
router.route('/delete/:todoId')
.delete(todoController.delete)

// Using the controller to process the display all Todo requests
router.route('/displayAll')
.get(todoController.displayAll)

// Export API routes
module.exports = router;