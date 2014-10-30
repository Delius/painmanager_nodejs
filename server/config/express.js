var express = require('express'),
    stylus = require ('stylus'),
    morgan = require('morgan'),
    logger = require('morgan'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    bodyParser = require('body-parser');



module.exports = function (app,config) {
    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

    //----------------//
    // configuration  //
    //----------------//
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');
    app.use(morgan('dev'));
    app.use(logger('dev'));

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(session({secret: 'keyboard cat',
                    saveUninitialized: true,
                    resave: true}
    ));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));
    app.use(express.static(config.rootPath + '/public'));


}