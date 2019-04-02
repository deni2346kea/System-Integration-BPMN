'use strict';


// for routing
var express = require("express");
var app = express();
const soap = require('soap');


app.use(express.static(__dirname + '/main_page/public'));

app.get("/" , function(req, res){
	res.sendFile( __dirname + "/main_page/index.html" );
});

app.get("/soap/:city", (req, res) => {
  const city = req.params.city;
  console.log(city);
  var url = 'http://127.0.0.1:7000/locationsServer?wsdl';

  soap.createClient(url, function(err, client) {
           client.findCoordinates({
               arg0 : city
           }, function(err, result)
           {
              console.log(result);
              res.json(result);
           });
  });
});

// listen on port 80 or any other if needed
app.listen( 3030, function(){
	console.log("SERVER RUNNING on port 3030");
});// for routing
