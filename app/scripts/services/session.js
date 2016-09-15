'use strict';
// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities: 
// get, set, and destroy for users' data in the session storage

angular.module('dashboard').service('SessionService', function($window) {

	this.set = function(user) {
        $window.sessionStorage.username = user;
	};
	this.get = function() {
		return $window.sessionStorage.username
	};
	this.destroy = function() {
		$window.sessionStorage.clear();
	};
	this.isloged = function() {
		return Boolean($window.sessionStorage.username != undefined);
	}
});