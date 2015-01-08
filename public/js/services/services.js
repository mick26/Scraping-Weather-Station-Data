'use strict';

/*================================================
Module - for Services
================================================ */
angular.module('myApp.services', [])


/*
 * Make the socket instance - BT Fords Socket.io module
 */
.factory('socket', function (socketFactory) {
	return socketFactory();
})
