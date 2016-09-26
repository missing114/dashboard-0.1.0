(function(){
	'use strict';
	// GETPROFILE SERVICE
// Description: Define the profileService that has 1 functionality: getProfile

	angular.module('dashboard').service('getProfileService', getProfileService)

	getProfileService.$inject = ['$resource'];
    function getProfileService($resource) {
    	var service = this;

    	service.getProfile = function() {
    		console.log("run");
    		return $resource('api/profile');
    	}
    }
})();
