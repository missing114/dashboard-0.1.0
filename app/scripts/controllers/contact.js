// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form
(function() {
"use strict";

angular.module('dashboard')
.controller('ContactController', ContactController);
console.log("ContactController is initialized");

ContactController.$inject = ['$scope', 'ContactService'];
function ContactController($scope, ContactService) {
	$scope.firstname = '';
  	$scope.lastname = '';
  	$scope.email = '';
  	$scope.phone = '';
  	$scope.locations = [];
  	$scope.location = '';
  	$scope.categories = [];
  	$scope.category = '';
 //  	$scope.infoTab = null;
 //  	$scope.queryTab = null;
	// $scope.confTab = null;

	ContactService.getLocation().then(function(response) {
		$scope.locations = response;
		// console.log($scope.locations);
	});

	ContactService.getCategory().then(function(response) {
		$scope.categories = response;
		// console.log($scope.locations);
	});

	$scope.tabSwitch = function(toTab) {
	}


};

})();
