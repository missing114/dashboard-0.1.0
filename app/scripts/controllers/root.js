'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in

angular.module("dashboard")
.controller('RootController', function($scope, $state, SessionService){
	$scope.username = SessionService.get();
	$scope.logout = function() {
		SessionService.destroy();
		$state.go('login');
	};
});