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



// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

app.use(fileUpload());

app.post("/search", function(req, res){
    // console.log(req.body.type);
    var search = req.body.type;
    artAction.search(search, function(search){
        var artTableList = {
            art:search
        };
        // console.log('this is router' + search);
        // res.send(artTableList);
        app.expose({
            artTableList
        }, 'ART');
        res.redirect('indexsearch.html');
        console.log(app.locals.state.ART.artTableList);
    });
})

app.get("/searchindex", function(req,res){
    res.send(app.locals.state.ART.artTableList);
});

app.use('/', router);



app.listen(app.get('port'), function(){
    console.log('running on 5000')
});