(function() {
'use strict';

	angular.module('dashboard')
	.service('getUserService', getUserService) ;

	getUserService.$inject = ['$http','$window'];
	function getUserService($http , $window) {
		var service = this;

		service.getuser = function(){
			var promise;
			var parameter = {'user': $window.localStorage.username};
			promise =  $http({ method: 'GET', url: '/api/getuser', params: parameter});
        	return promise;
        }


		
	}
})();

// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality: 
// making service calls to retrieve the logged-in users' information