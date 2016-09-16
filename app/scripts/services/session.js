// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities: 
// get, set, and destroy for users' data in the session storage

/*
 * In this service the user data is defined for the current session. Within
 * angular current session is until the page is refreshed. When the page is
 * refreshed the user is reinitialized through $window.sessionStorage at the
 * app.js file.
 */

 (function(){
	'use strict';
	angular.module('mainApp').service('SessionService', function($window) {
		this.set = function(username) {
			$window.sessionStorage.SessionMessage = username;
		};
		this.get = function() {
			return $window.sessionStorage.SessionMessage;
		};
		this.destroy = function() {
			$window.sessionStorage.SessionMessage = null;
		};
		// return this;+
	});

	console.log("SessionService initialized");
 })();
