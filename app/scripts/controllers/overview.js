// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information
(function() {
"use strict";

angular.module('dashboard')
.controller('OverviewController', OverviewController);
console.log("OverviewController is initialized");
/**
 * Handles showing user information on the page
 */
OverviewController.$inject = ['$scope', 'ProfileService'];
function OverviewController($scope, ProfileService) {
	$scope.username = '';
  $scope.usernickname = '';
  $scope.userimg = '';

	var res = ProfileService.getProfile();
  res.then(function(response) {
   	console.log(response);
	  $scope.username = response.username;
  	$scope.usernickname = response.nickname;
   	$scope.userimg = response.profileImage;
  }).then(function() {
  	$("#overview-profileImage").css("background-image", 'url(' + $scope.userimg + ')');
	});
};

})();