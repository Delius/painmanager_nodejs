var express=require('express'),
    mongoose = require('mongoose');

var env=process.env.NODE_ENV=process.env.NODE_ENV||'development';

var app=express();

var config=require('./server/config/config')[env];

require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port'+config.port+'---');



app.get('/partials/*', function(req, res){
    //console.log(req.params[0]);
    res.render('../../public/app/' + req.params[0]);
});

app.get('*', function(req, res) {
    res.render('index');
});

