// Import contact model
Todo = require('./todoModel');

// To connect to the MongoDB
var mongodb = require('mongodb').MongoClient;
var mongodbUrl = "mongodb://pratyayj:defaultAdmin1@ds111913.mlab.com:11913/flutter_todolist";

// Handle display all Todo
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

exports.sort = function(req, res) {
    mongodb.connect(mongodbUrl, function (err, client) {
        var db = client.db('flutter_todolist');

        db.collection('todos-collection').find({ tag: { $in: [req.params.name]}}).toArray(function(err, result) {
            console.log(result);
            res.json({
                message: result
            });
        });
    });
};