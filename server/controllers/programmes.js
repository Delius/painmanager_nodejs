var Programme = require('mongoose').model('Programme');

exports.getProgrammes = function(req, res) {
    Programme.find({}).exec(function(err, collection) {
        res.send(collection);
    });
};

exports.getProgrammeById = function(req, res) {
    Programme.findOne({_id:req.params.id}).exec(function(err, programme) {
        res.send(programme);
    });
};