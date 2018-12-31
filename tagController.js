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

exports.displayAll = function (req, res) {
    Tag.get(function (err, tags) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Todos retrieved successfully",
            data: tags
        });
    });
};