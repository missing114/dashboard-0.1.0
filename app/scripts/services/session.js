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
	angular.module('dashboard').service('SessionService', function($window) {
		this.set = function(username) {
			$window.sessionStorage.username = username;
		};
		this.get = function() {
			return $window.sessionStorage.username;
		};
		this.destroy = function() {
			$window.sessionStorage.clear();
		};
		// return this;+
	});

	console.log("SessionService initialized");
 })();
