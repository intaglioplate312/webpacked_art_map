var connection = require("./connection.js");

var orm = {
  insertRow: function(artPiece) {
    var queryString = "insert into art set ?";
    connection.query(queryString, {path: artPiece.filePath, description: artPiece.description, type: artPiece.type, address: artPiece.address, lat: artPiece.lat, long: artPiece.long, artist: artPiece.artist, title: artPiece.title});
  },
  selectAll: function(displayTable, cb){
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [displayTable], function(err, result){
      if (err){throw err;
      }
      cb(result);
    });
  },
//   selectAll: function(displayTable, cb){
    var userSearch = displayTable.search
feature/About_routing
    // var queryString = "SELECT * FROM art WHERE type LIKE " + userSearch;
//     var queryString = "SELECT * FROM art";

    //var queryString = "SELECT * FROM art WHERE type LIKE " + userSearch;

    connection.query(queryString, function(err, result){
      if (err){throw err;
      }
      console.log(userSearch);
      cb(result);
    });
  }

  // searchType: function(artPiece){
  //   var query = 'SELECT * FROM art WHERE ?';
  //   connection.query(query, {type: artPiece.type}, function(err, res){
  //       if (err){throw err;}
  //       }

  //     }

};

module.exports = orm;
