var express = require('express');
var fs = require('fs');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var router = require('./controllers/publicArt_controller.js');
var fileUpload = require('express-fileupload');
var app = express();
var session = require('express-session');
var passport = require('passport');

var expstate = require('express-state');
expstate.extend(app);

app.use(express.static(process.cwd() + '/public'));

app.set('port', 5000);

app.use(session({secret: 'some secret value, changeme'}));  

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

var artAction = require("./models/publicArt.js");

app.use(fileUpload());

app.use('/', router);

app.listen(app.get('port'), function(){
    console.log('running on 5000')
});