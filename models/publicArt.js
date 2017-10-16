var orm = require("../config/orm.js");


var artAction = {
    add: function(artPiece) {
        orm.insertRow(artPiece);
    },
    all: function(cb){
        orm.selectAll("art", function(res){
            cb(res);
            }
        );
    },

    search: function(search, cb){
        console.log('our newest ' + search);
        // console.log('our cb' + cb);
        orm.searchAll(search, function(res){
            // console.log('this is publicArt' + res);
            cb(res);

        })
    }
};

module.exports = artAction;