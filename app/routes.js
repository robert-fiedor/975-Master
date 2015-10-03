var express = require('express');
var _ = require('underscore');


module.exports = function (app) {
    app.all('/*', function (req, res, next) {
        res.render('index.html')
    });
};


//var Nerd = require('./models/nerd');


//
//
//
//
//
//
//app.get('/api/nerds', function (req, res) {
//    // use mongoose to get all nerds in the database
//    Nerd.find(function (err, nerds) {
//
//        // if there is an error retrieving, send the error.
//        // nothing after res.send(err) will execute
//        if (err)
//            res.send(err);
//
//        res.json(nerds); // return all nerds in JSON format
//    });
//
////        res.json({d:1}); // return all nerds in JSON format
//
//
//});
//
//app.post('/api/nerds', function (req, res) {
//
//    var nerd = new Nerd();
//    nerd.address = {
//        name: 'bobitto',
//        address: 'sjsjksl',
//        city: 'warsaw',
//        state: 'ny',
//        date: Date.now(),
//        zip: 'ssss'
//    };
//    //nerd.address='jkl';
//
//    //console.log('req',req);
//
//
//    nerd.save(function (err) {
//        if (err)
//            res.send(err);
//
//        res.json({message: 'nerd created!'});
//    });
//
//});


//dont delete
//app.all('/*', function(req, res, next) {
//    // Just send the index.html for other files to support HTML5Mode
//    //res.sendfile('index.html', { root: __dirname });
//    res.render('index');
//
//});


//app.get('/przekier/:name', function(req, res){
//    res.render('index');
//});

//app.get('/', function (req, res) {
//    res.render('index');
//});