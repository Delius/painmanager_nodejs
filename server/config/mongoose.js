var mongoose = require('mongoose'),
    userModel = require('../mdels/User'),
    programmeModel = require('../mdels/Programme');


module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('painmanager db opened');
    });
    userModel.createDefaultUsers();
    programmeModel.createDefaultProgrammes();

}

//
//function createSalt() {
//    return crypto.randomBytes(128).toString('base64');
//}
//
//function hashPwd(salt,pwd) {
//    var hmac = crypto.createHmac('sha1', salt);
//    return hmac.update(pwd).digest('hex');
//}