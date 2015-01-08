/*================================================
Ref.
http://www.met.ie
http://leafletjs.com/reference.html
================================================ */

'use strict';

/*================================================
Module - for Controllers
================================================ */
angular.module('myApp.controllers', [])


/*================================================
Controller
================================================ */
.controller('MainCtrl', function ($scope, $http, socket, stationsService) {


	/* ================================================
	Declare Variables
	================================================ */
	$scope.dataAy = []; //weather data
	var stationsGeoJson = {}; //Geo JSON weather station data
	var map; //Leaflet map
	var initialWeatherDataGot = false;

	/**
	 * get GeoJSON weather station data from service
	 */
	try {
		stationsGeoJson = stationsService.getStations();
	} 
	catch (error) {
		console.error(error);
	}


	/**
	 * Leaflet marker Popup for each feature that has a popupContent property
	 */
	function onEachFeature(feature, layer) {
	    if (feature.properties && feature.properties.popupContent) {
	        layer.bindPopup(feature.properties.popupContent);
	    }
	}


	/**
	 * Set the Boundaries of the Map 
	 */
	var southWest   = new L.LatLng(51.3941, -11.0742);
	var northEast   = new L.LatLng(55.1515, -5.358);
	var bounds      = new L.LatLngBounds(southWest, northEast);

	/**
	 * Map center 
	 */
	var latlng      = new L.LatLng(53.4333, -7.95); //Athlone


    /*
     * Create the map object. Initialize the map and set its view
     */
	map = new L.map('map', { 
		center: latlng, 
		zoom: 7, 
		maxBounds: bounds,
		zoomControl: false
    });
	
	/*
	 * Instantiates a tile layer object given a URL template
	 * {s} means one of the available subdomains 
	 * {z} — zoom level, {x} and {y} — tile coordinates.
	 */
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);	



	/**
	 * Add Weather Stations to map
	 * onEachFeature adds marker popups
	 */
	L.geoJson(stationsGeoJson, {
	    onEachFeature: onEachFeature
	}).addTo(map);


	/*
   	 * Get the date/time of the current weather report 
   	 * source www.met.ie site
   	 */
	socket.on('reportDate', function(dateData) {
		$scope.reportDate = dateData;
	})

	/*
   	 * Get weather station data from Node server
   	 */
	socket.on('weatherData', function(data) {
		if(initialWeatherDataGot == false) {
			$scope.dataAy=data;
			initialWeatherDataGot = true;
		}

		/**
		 * Copy the new values array index by index 
		 * I did this for UX - to reduce screen flickering 
		 */
		else {
			for(var i=0; i < data.length; i++) {
				$scope.dataAy[i] = data[i];	
			}
		}

	})
});