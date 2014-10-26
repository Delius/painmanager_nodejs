var express = require('express'),
    stylus = require('stylus'),
    mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
    return stylus(str).set('filename', path);
}
//----------------//
// configuration  //
//----------------//

//Development
//---------------

if ('development' === env) {
    // configure stuff here
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'jade');
    app.use(morgan('dev'));
    mongoose.connect('mongodb://localhost/painmanager');
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(stylus.middleware(
        {
            src: __dirname + '/public',
            compile: compile
        }
    ));
    app.use(express.static(__dirname + '/public'));

//Production
//--------------

} else {
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'jade');
    app.use(morgan('short'));
    mongoose.connect('mongodb://pawel:painmanager@ds049150.mongolab.com:49150/painmanager');
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(stylus.middleware(
        {
            src: __dirname + '/public',
            compile: compile
        }
    ));
    app.use(express.static(__dirname + '/public'));
};

//--------------------------------------------------//

//Mongo db


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
    console.log('painmanager db opened');
});
var messageShema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageShema);
Message.findOne().exec(function(err, messageDoc){
    mongoMessage = messageDoc.message;
});

//--------------------------------------------------//

app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});


app.get('*', function(req, res){
    res.render('index', {
        mongoMessage: mongoMessage
    });
});

var port = process.env.PORT ||3030;
app.listen(port);
console.log('Listenng on port' + port + '...');