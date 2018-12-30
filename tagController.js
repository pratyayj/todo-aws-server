// Import contact model
Tag = require('./tagModel');

exports.create = function (req, res) {
    let tag = new Tag(req.body);
    tag.save()
    res.status(201).json({
        message: 'New tag created!',
        data: tag
    });
};