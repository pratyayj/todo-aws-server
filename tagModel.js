var mongoose = require('mongoose');
// Setup schema
const Schema = mongoose.Schema;
var tagModel = new Schema({
    tag: {
        tagName: String,
        required: true
    }
}, { collection: 'tags-collection'});
// Export Contact model
var Tags = module.exports = mongoose.model('tag', tagModel);
module.exports.get = function (callback, limit) {
    Tags.find(callback).limit(limit);
}