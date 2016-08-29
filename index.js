var express = require('express');
var csv = require('csv');
var app = express();
const fs = require("fs");

const PORT = process.env.PORT || 3000;


var colleges; 


fs.readFile('db/database.csv', (err, data) => {
  

console.log("[cAPi] : File read !");

	csv.parse(data, function(err, data){

	colleges = data;

	console.log("[cAPi] : CSV Loaded !");
    
  });

});
   
app.get('/',function(req,res){

	res.send("Colleges API : SriGuru Institute of Technology, Coimbatore");

});

app.post('/colleges/total', function (req, res) {

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

			colleges[i][2] = colleges[i][2].replace(/\:[^>]*\)/ig,"");
			colleges[i][2] = colleges[i][2].replace(/(\(Id)/ig,"");

			colleges[i][1] = colleges[i][1].replace(/\:[^>]*\)/ig,"");
			colleges[i][1] = colleges[i][1].replace(/(\(Id)/ig,"");

			result.push(colleges[i]);
		}
	}

	res.send(JSON.stringify(result));

})

app.post('/colleges/state', function (req, res) {

	var state = req.headers.state.toLowerCase();
	var offset = req.headers.offset;
	console.log(offset);
	var result = [];	
	

	for(var i = 0 ; i < colleges.length; i++){

		if(colleges[i][4].toLowerCase().indexOf(state)>=0){		

			colleges[i][2] = colleges[i][2].replace(/\:[^>]*\)/ig,"");
			colleges[i][2] = colleges[i][2].replace(/(\(Id)/ig,"");

			colleges[i][1] = colleges[i][1].replace(/\:[^>]*\)/ig,"");
			colleges[i][1] = colleges[i][1].replace(/(\(Id)/ig,"");		

			result.push(colleges[i]);				
		}
	}

	var limitResult = [];
	var count = 0;

	var limit = Number(offset) + 10;

	for(i = offset ; i < limit ; i++){

		limitResult.push(result[i]);

	}

	res.send(JSON.stringify(limitResult));

})


app.post('/colleges/district', function (req, res) {

	var district = req.headers.district.toLowerCase();
	var offset = req.headers.offset;
	console.log(offset);
	var result = [];	
	

	for(var i = 0 ; i < colleges.length; i++){

		if(colleges[i][5].toLowerCase().indexOf(district)>=0){	

			colleges[i][2] = colleges[i][2].replace(/\:[^>]*\)/ig,"");
			colleges[i][2] = colleges[i][2].replace(/(\(Id)/ig,"");

			colleges[i][1] = colleges[i][1].replace(/\:[^>]*\)/ig,"");
			colleges[i][1] = colleges[i][1].replace(/(\(Id)/ig,"");
						
			result.push(colleges[i]);				
		}
	}

	var limitResult = [];
	var count = 0;

	if(offset == -1){

		res.send(JSON.stringify(result));

	}else{
		var limit = Number(offset) + 10;

		for(i = offset ; i < limit ; i++){

			limitResult.push(result[i]);
			
		}

		res.send(JSON.stringify(limitResult));
	}

	

	

})

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

app.post('/allstates', function (req, res) {

	var result = [];		

	for(var i = 1 ; i < colleges.length; i++){

		if(result.indexOf(colleges[i][4]) < 0 ){

				result.push(colleges[i][4]);

		}else{
			
		}
		
	}	

	res.send(JSON.stringify(result));

})


app.post('/districts', function (req, res) {

	var state = req.headers.state.toLowerCase();
	var result = [];

	for(var i = 0 ; i < colleges.length ; i++){

		if(colleges[i][4].toLowerCase().indexOf(state)>=0){		

			if(result.indexOf(colleges[i][5])< 0){

				result.push(colleges[i][5]);

			}		

			

		}
	}

	res.send(JSON.stringify(result));

})

app.listen(PORT, function () {  

  console.log("Example app listening at " + PORT);

})