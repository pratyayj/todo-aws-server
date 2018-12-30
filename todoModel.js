var mongoose = require('mongoose');
// Setup schema
const Schema = mongoose.Schema;
var todoModel = new Schema({
    taskName: {
        type: String,
        required: true
    },
    tag: {
        type: Array,
        required: false
    }
}, { collection: 'todos-collection'});
// Export Contact model
var Todo = module.exports = mongoose.model('todo', todoModel);
module.exports.get = function (callback, limit) {
    Todo.find(callback).limit(limit);
}