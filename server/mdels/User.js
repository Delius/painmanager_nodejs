var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    hashed_pwd: String,
    roles: [String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch){
        return encrypt.hashPwd(this.salt, passwordToMatch)=== this.hashed_pwd;
    }
}

var User =  mongoose.model('User', userSchema);


function createDefaultUsers(){
    User.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            var salt, hash;

            salt = encrypt.createSalt();
            hash = hashPwd(salt, 'ismc2222');
            User.create({firstName:'Pawel', lastName:'Jakubowski', username:'ismc2222',salt:salt,hashed_pwd:hash,roles:['admin']});

            salt = encrypt.createSalt();
            hash = hashPwd(salt, 'palomino');
            User.create({firstName:'Ewa', lastName:'Palomino', username:'palomino',salt:salt,hashed_pwd:hash,roles:[]});

            salt = encrypt.createSalt();
            hash = hashPwd(salt, 'frank');
            User.create({firstName:'Frank', lastName:'Knight', username:'frank',salt:salt,hashed_pwd:hash});
        }
    })
};

exports.createDefaultUsers = createDefaultUsers;