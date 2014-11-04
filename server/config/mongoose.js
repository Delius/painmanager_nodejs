var mongoose = require('mongoose'),
    crypto = require('crypto');


module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('painmanager db opened');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String,
        salt: String,
        hashed_pwd:String
    });

    userSchema.methods = {
        authenticate: function(passwordToMatch){
            return hashPwd(this.salt, passwordToMatch)=== this.hashed_pwd;
        }
    }

    var User =  mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            var salt, hash;

            salt = createSalt();
            hash = hashPwd(salt, 'ismc2222');
            User.create({firstName:'Pawel', lastName:'Jakubowski', username:'ismc2222',salt:salt,hashed_pwd:hash});

            salt = createSalt();
            hash = hashPwd(salt, 'palomino');
            User.create({firstName:'Ewa', lastName:'Palomino', username:'palomino',salt:salt,hashed_pwd:hash});

            salt = createSalt();
            hash = hashPwd(salt, 'frank');
            User.create({firstName:'Frank', lastName:'Knight', username:'frank',salt:salt,hashed_pwd:hash});
        }
    })
}


function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt,pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}