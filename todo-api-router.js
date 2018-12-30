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

router.route('/allTodos')
.get((req, res) => {
    Todo.find({}, (err, todos) => {
        res.json(todos)
    })  
})

router.route('/retrieve/:todoId')
.get((req, res) => {
    Todo.findById(req.params.todoId, (err, todos) => {
        res.json(todos)
    })  
})

router.route('/edit/:todoId')
.put(todoController.edit)

router.route('/createTodo')
.post(todoController.create)

router.route('/delete/:todoId')
.delete(todoController.delete)

// Using the controller to process the HTTP requests
router.route('/displayAll')
.get(todoController.index)

// Export API routes
module.exports = router;