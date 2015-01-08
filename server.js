/*=========================================================
Michael Cullen
server.js
2015

Web scraping - Irish Weather Station Data
Working - (Tá se ag obair)

Ref.
https://github.com/request/request
CheerioJS - JQuery manipulation of the DOM at the back end
============================================================*/

'use strict';

/* ========================================================== 
External Modules/Packages Required
============================================================ */
var http = require('http');
var express = require('express');
var app = express(); 				//Create a new application with Express
var httpServ = http.Server(app);
var io = require('socket.io')(httpServ);
var colours = require('colors');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var request = require('request');
var cheerio = require('cheerio');


/* ========================================================== 
Variables
============================================================ */
var POLL_INTERVAL = 2000; //milli seconds 

/* ========================================================== 
Port the server will listen on
============================================================ */
app.set('port', process.env.PORT || 3000);

/* ==========================================================
serve the static index.html from the public folder
============================================================ */
app.use(express.static(__dirname + '/public'));


//development only
if (app.get('env') === 'development') {
    app.use(errorHandler());
    app.use(logger('dev')); //log every request to the console in dev
};

//production only
if (app.get('env') === 'production') {
};



/* ==========================================================
Periodically 
- scrape met Eireann site for weather station data
- convert data to Javascript Object
- Send data to client via Socket.io
============================================================ */
setInterval(function() {

	request('http://www.met.ie/latest/reports.asp', function (error, response, html) {
		if(error || response.statusCode != 200) 
			return;

		var $ = cheerio.load(html);
		var reportDate = [];
		var DATA = [];


		/**
		* Each loop
		*/
	 	$('table.maincontainer09 table table tr').each(function(index, element) {

			var $tds = $(this).find('td');

			/**
			* Get the report date
			*/
			if(index == 0) {
				reportDate.push({
	                reportDate: $tds.eq(0).text().toLowerCase().replace('\n',"").trim()
				});
			}

			/**
			* Each weather station
			*/
			if(index >= 3 && index < 28) {

	            DATA.push({
	                location:     $tds.eq(0).text().toLowerCase().replace('\n',"").trim(),
	                windDirection:  $tds.eq(1).text().toLowerCase().replace('\n',"").trim(),
	                windSpeed:   $tds.eq(2).text().toLowerCase().replace('\n',"").trim(),
	                weather:  $tds.eq(3).text().toLowerCase().replace('\n',"").trim(),
	                temp: $tds.eq(4).text().toLowerCase().replace('\n',"").trim(),
	                humidity: $tds.eq(5).text().toLowerCase().replace('\n',"").trim(),
	                rain: $tds.eq(6).text().toLowerCase().replace('\n',"").trim(),
	                pressure: $tds.eq(7).text().toLowerCase().replace('\n',"").trim()
	            });
	        };


			/**
			* Get info about the readings
			*/
	        // if(index >= 28) {
	        //     DATA.push({
	        //         info: $tds.eq(0).text().toLowerCase().replace('\n',"").trim()
	        //     });
	        // };


	        /**
			 * Send the Object via Socket.io
			 * Socket.io serialises data to JSON automatically
			 */
			io.sockets.emit('reportDate', reportDate);

	        /**
			 * Send the Object via Socket.io
			 * Socket.io serialises data to JSON automatically
			 */
			io.sockets.emit('weatherData', DATA);

	 	});

		//console.log(DATA);
	});
	
	POLL_INTERVAL = 10000; //milli seconds (600sec=10min)

}, POLL_INTERVAL);


/* ========================================================== 
Start server listening on a port
============================================================ */
httpServ.listen(app.get('port'), function(req, res) {
    console.log('Express server listening on port ' .green + app.get('port') );
});

