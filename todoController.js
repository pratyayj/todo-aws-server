// Import contact model
Todo = require('./todoModel');

// Handle index actions
exports.index = function (req, res) {
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

// Handle create contact actions
exports.new = function (req, res) {
    var todo = new Todo();
    todo.name = req.body.task ? req.body.task : task.name;
// save the contact and check for errors
    todo.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New todo created!',
            data: todo
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

// Handle update contact info
exports.update = function (req, res) {
Todo.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
todo.name = req.body.task ? req.body.task : contact.task;

// save the contact and check for errors
        todo.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                todo: contact
            });
        });
    });
};

exports.edit = function(req, res) {
    Todo.findById(req.params.todoId, (err, todo) => {
        todo.taskName = req.body.taskName;
        todo.tag = req.body.tag;
        todo.save()
        res.json(todo)
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