// server.js
// load the things we need
var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
/*
app.get('/', function(req, res) {
  var drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 },
    { name: 'LSD', drunkness: 55 },
  ];

  var tagline = "Blah blah blah";


  res.render('pages/index', {
    drinks: drinks,
    tagline: tagline
  });
});
*/

app.get('/', function(req, res) {
    res.render('pages/AV');
// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// app.listen(3000); Heroku won't do this
// console.log('3000 is the magic port');
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
