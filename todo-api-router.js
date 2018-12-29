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
.put((req, res) => {
    Todo.findById(req.params.todoId, (err, todo) => {
        todo.task = req.body.task;
        todo.save()
        res.json(todo)
    })
})

router.route('/createTodo')
.post((req, res) => {
    let todo = new Todo(req.body);
    todo.save()
    res.status(201).send(todo)
})

router.route('/delete/:todoId')
.delete((req, res) => {
    Todo.remove({
        _id: req.params.todoId
      }, function(err, todo) {
        if (err)
          res.status(404).send(err);
        res.json({ message: 'todo successfully deleted' });
      });
})

// Using the controller to process the HTTP requests
router.route('/display')
.get(todoController.index)

// Export API routes
module.exports = router;