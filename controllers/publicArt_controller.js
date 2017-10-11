var express = require("express");
var detect = require('detect-file');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var fs = require('fs');
var artAction = require("../models/publicArt.js");
var router = express.Router();
var NodeGeocoder = require('node-geocoder');

var options = {
    provider: 'google',
    httpAdapter: 'https', 
    apiKey: '', 
    formatter: null
  };

var geocoder = NodeGeocoder(options);

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.send('Please login through google on the page before uploading');
}

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});
  
passport.use(new GoogleStrategy({
      clientID:     process.env.GOOGLECLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: "http://www.solvebycode.com:5000/auth/google/callback",
    },
    function(accessToken, refreshToken, profile, cb) {
      cb(null,profile);
    }
));

// route retrieves art details from db
router.get("/table", function(req,res){
    artAction.all(function(data){
        var artTableList = {
            art:data
        };
        res.send(artTableList);
    });
});

router.get("/", function(req,res){
        res.render("index");
});

router.get('/auth/google',
    passport.authenticate('google', { scope: ['email'] }));

router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/auth/google' }),
    function(req, res) {
        res.redirect(req.session.returnTo || '/');
        delete req.session.returnTo;
});

router.get("/about", function(req,res){
        res.render("about");
});

router.get("/search/:type", function(req, res){
    artAction.all(function(data){
        var artTableList = {
            art:data
        };
        res.send(artTableList);
    });
})
    
// add new artwork form route
router.post("/upload", function(req, res){
    var geoLat = '';
    var geoLong = '';
    var newArtDetails = {};
    var imgFilePath = '';
    let image = req.files.image;
    var isImgPresent = detect('./public/assets/img/' + image.name);
    
    // if file uploaded failed 
    if(!req.files){
        return res.status(400).send('No files were uploaded.');
    }

    // take form address input and geocode (get latitude, longitude)
    geocoder.geocode(req.body.address)
    // assign return latitude and longitude coordinates to variables
    .then(function(res) {
        geoLat = res[0].latitude;
        geoLong = res[0].longitude;
        // start the image upload and db calls
        imageUpload();
    })
    .catch(function(err) {
      console.log(err);
    });
    
    function imageUpload() {
        if (isImgPresent == null){
            if (image.mimetype !== 'image/png' && image.mimetype !== 'image/jpeg'){
                return res.send("You tried uploading a bad filetype.  Please upload PNG or JPEG files ONLY!")
            }
                imgFilePath = ('/assets/img/' + image.name);
                image.mv('./public/assets/img/' + image.name, function(err){
                    if (err){
                        return res.status(500).send(err);
                    }
                })
        } else {
             return res.send("file didn't upload because the same name exists on the server.  Please rename and try again.");
            
        }
        newArtObject();
        artAction.add(newArtDetails);
        res.redirect('/');
    }

    function newArtObject(){
        newArtDetails = {
            artist: req.body.artist,
            title: req.body.title,
            description: req.body.description,
            type: req.body.type,
            address: req.body.address,
            lat: geoLat,
            long: geoLong,
            filePath: imgFilePath
        }
    }   
});

module.exports = router;