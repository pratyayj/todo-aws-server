// Import contact model
Todo = require('./todoModel');

// Handle index actions
exports.displayAll = function (req, res) {
    Todo.get(function (err, todos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Todos retrieved successfully",
            data: todos
        });
    });
};

exports.create = function (req, res) {
    let todo = new Todo(req.body);
    todo.save()
    res.status(201).json({
        message: 'New todo created!',
        data: todo
    });
};

/*
// Handle view contact info
exports.view = function (req, res) {
    Todo.findById(req.params.todoId, function (err, todo) {
        if (err)
            res.send(err);
        res.json({
            message: 'Todo details as follows...',
            data: todo
        });
    });
};

router.retrieve = function (req, res) {
    Todo.get((req, res) => {
    Todo.findById(req.params.todoId, (err, todos) => {
        res.json(todos)
    });  
});
};
*/

exports.retrieveSingle = function(req, res) {
    Todo.findById(req.params.todoId, (err, todos) => {
        res.json(todos)
    }) 
}

exports.edit = function(req, res) {
    Todo.findById(req.params.todoId, (err, todo) => {
        todo.taskName = req.body.taskName;
        todo.tag = req.body.tag;
        todo.save()
        res.status(200).json({
            message: 'Todo edited successfully',
            data: todo
        })
    });
};

exports.delete = function(req, res) {
    Todo.remove({
        _id: req.params.todoId
      }, function(err, todo) {
        if (err)
          res.status(404).send(err);
        res.json({ message: 'todo successfully deleted' });
      });
};