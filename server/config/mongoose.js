var mongoose = require('mongoose'),
    userModel = require('../models/User');



module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('painmanager db opened');
    });
    userModel.createDefaultUsers();


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