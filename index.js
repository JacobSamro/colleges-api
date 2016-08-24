var express = require('express');
var csv = require('csv');
var app = express();
const fs = require("fs");

var colleges; 


fs.readFile('db/database.csv', (err, data) => {
  
  console.log("[cAPi] : File read !");


  csv.parse(data, function(err, data){
colleges = data;

    csv.transform(data, function(data){
      return data.map(function(value){return value.toUpperCase()});
    }, function(err, data){
      csv.stringify(data, function(err, data){
        	console.log("[cAPi] : CSV Parsed & Loaded !");

      });
    });
  });

});
   


app.get('/colleges/total', function (req, res) {

	var str = {
		total : colleges.length
	};

	res.send(JSON.stringify(str));

})


app.post('/colleges/search', function (req, res) {

	var keyword = req.headers.keyword.toLowerCase();
	var result = [];

	for(var i = 0 ; i < colleges.length ; i++){

		if(colleges[i][2].toLowerCase().indexOf(keyword)>=0){				
				result.push(colleges[i]);
		}
	}

	res.send(JSON.stringify(result));

})


var server = app.listen(8081, function () {

  var host = "127.0.0.1"
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})