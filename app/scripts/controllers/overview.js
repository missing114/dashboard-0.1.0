(function() {
    'use strict';
    angular.module('dashboard')
        .controller('OverviewController', OverviewController);

    OverviewController.$inject = ['$scope', 'getProfileService', 'SessionService'];

    function OverviewController($scope, getProfileService, SessionService) {
        getProfileService.getProfile().get({}, function(response) {
        	 $scope.profiles = response.profiles; 
        	for (var i in response.profiles) {
        			console.log(response.profiles[i].username);
        			console.log(SessionService.get().username);
          	if (response.profiles[i].username == SessionService.get().username) {
          		console.log(response.profiles[i]);
          		console.log("response");
            	$scope.username = response.profiles[i].fullname;
                $scope.nickname = response.profiles[i].nickname;
                $scope.profile_image = response.profiles[i].profileImage;
            }
          }
    	});


    }
})();

// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information
