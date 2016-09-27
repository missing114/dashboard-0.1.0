(function() {
    'use strict';
    // ROOT CONTROLLER
    // Description: Define the following functionalities:
    // Make service calls to retrieve user's informationto display on the header
    // Make service calls to log the user out of the app
    // Populate the current date that the user log in

    angular.module("dashboard")
        .controller('RootController', function($scope, $state, SessionService, getUserService) {
            $scope.today = new Date();
            // $scope.username = SessionService.get();
            getUserService.getuser().then(function(response) {
                $scope.username = response.data.name;
            });
            $scope.logout = function() {
                SessionService.destroy();
                $state.go('login');
            };
        });
})();
