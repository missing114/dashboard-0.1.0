// PRODUCER CONTROLLER
// Description: Define the following functionalities:
// Creative manipulations for whatever stuff this section wants to do

(function() {
    'use strict';

	angular.module('dashboard').controller('ProducerController', ProducerController);
	ProducerController.$inject = ['$scope', 'getWorkService'];

	// controller for works
	function ProducerController($scope, getWorkService) {
	    // make service call to get data from server
	    getWorkService.getworks().then(function(response) { 
	        $scope.worksData = response.data.works;
	        for (var i=0; i<$scope.worksData.length; i++) {
		    	$scope.worksData[i]	= {
		    		'comments': $scope.worksData[i].comment.split(" ")[0], 
		    		'likes': $scope.worksData[i].like.split(" ")[0]
		    	}
		    }
		    // console.log($scope.worksData);
	    }, function(response) {
	        console.log("getWork error!");
	    });

	    $scope.updateWorkInfo = function() {
	    	
	    };

	};
})();