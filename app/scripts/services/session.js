// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities: 
// get, set, and destroy for users' data in the session storage

/*
 * In this service the user data is defined for the current session. Within
 * angular current session is until the page is refreshed. When the page is
 * refreshed the user is reinitialized through $window.sessionStorage at the
 * login.js file.
 */

 (function(){
	'use strict';
	angular.module('mainApp').service('SessionService', function($rootScope) {
		this.set = function(username) {
			this.username = username;
		};
		this.get = function() {
			return this.username
		};
		this.destroy = function() {
			this.username = null;
		};
		return this;
	});

	console.log("SessionService initialized");
 })();
