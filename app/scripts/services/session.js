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
angular.module('loginApp').service('Session', function($rootScope, USER_ROLES) {

	this.create = function(user) {
		this.user = user;
		this.userRole = user.userRole;
	};
	this.get = function() {};
	this.set = function() {};
	this.destroy = function() {
		this.user = null;
		this.userRole = null;
	};
	return this;
});