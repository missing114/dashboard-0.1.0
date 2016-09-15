'use strict';
// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities: 
// get, set, and destroy for users' data in the session storage

/*
 * In this service the user data is defined for the current session. Within
 * angular current session is until the page is refreshed. When the page is
 * refreshed the user is reinitialized through $window.sessionStorage at the
 * login.js file.
 */
angular.module('mainApp').service('SessionService', function($rootScope) {
	this.set = function(user) {
		this.user = user;
	};
	this.get = function() {
		return this.user
	};
	this.destroy = function() {
		this.user = null;
	};
	return this;
});