/*================================================
Service

Purpose: Stores the coordintes and info about the weather stations in Geo JSON format

Usage: has 1 function which is used by the controller to get the Geo JSON data
================================================ */


'use strict';

/*================================================
Module - for Services
================================================ */
angular.module('myApp.stations', [])


/**
 * Service
 */
.service('stationsService', function () {

	this.getStations = function () {

    	return (

    		{
				"type": "FeatureCollection",

			    "features": [
			    	{
			    		"type": "Feature",
			            "geometry": {
			                "coordinates": [-8.785556, 53.289167],
			                "type": "Point"
			            },
			            "properties": {
			            	"popupContent":"Athenry"
			            }
			        },

			        {
			        	"type": "Feature",
			            "geometry": {
			                "coordinates": [-7.309722, 54.051389],
			                "type": "Point"
			            },
			            "properties": {
			            	"popupContent":"Ballyhaise"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-10.006944, 54.2275],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Belmullet"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-6.915278, 52.861111],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Carlow Oakpark"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-6.438889, 53.305556],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Casement Aerodrome"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-8.9925, 53.710833],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Claremorris"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-8.486111, 51.847222],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Cork Airport"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-6.240833, 53.427778],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Dublin Airport"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-6.240833, 53.515833],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Dunsany"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-8.263889, 52.163889],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Fermoy Moorepark"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-8.243056, 54.493889],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Finner"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-8.008611, 53.053056],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Gurteen Agri College"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-6.496667, 52.297778],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Johnstown Castle"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-8.817778, 53.91],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Knock Airport"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-9.900833, 53.325833],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Mace Head"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-7.338889, 55.372222],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Malin Head"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-8.455556, 54.175],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Markee"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-7.980833, 53.726944],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Mount Dillon"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-7.362222, 53.537222],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Mullingar"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-9.572222, 53.922222],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Newport"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-6.333333, 53.363889],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Phoenix Park"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-8.244444, 51.793056],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Roches Point"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-8.918889, 52.691944],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Shannon Airport"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-9.427778, 51.476389],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Sherkin Island"
			            }        
			        },

			        {
			            "type": "Feature",
			            "geometry": {
			                "coordinates": [-10.244444, 51.939722],
			                "type": "Point"
			            },
			            "properties": {
			                "popupContent":"Valentia"
			            }        
			        }        
			    ]
			}

    	) 
    }
});
