var auth = require('./auth'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(app){

    app.get('/partials/*', function(req, res){
        //console.log(req.params[0]);
        res.render('../../public/app/' + req.params[0]);
    });
    app.get('/partials/*',function(req,res){
        res.render('../../public/app/'+req.params[0]);
    });

    app.post('/login',auth.authenticate);
    app.post('/logout',function(req,res){
        req.logout();
        res.end();
    });

    app.get('*',function(req,res ){
        res.render('index',{
            bootstrappedUser : req.user
        });
    });
}


//var auth = require('./auth');
//
////var passport = require('passport');
//    //mongoose = require('mongoose');
//
//
//module.exports = function(app) {
//
//
//    app.get('/partials/*', function(req, res){
//        //console.log(req.params[0]);
//        res.render('../../public/app/' + req.params[0]);
//    });
//
//    app.post('/login', auth.authenticate);
//
//
//    app.get('*', function(req, res) {
//        res.render('index');
//    });
//}