(function() {
    'use strict';
    // SESSION SERVICE
    // Description: Define the sessionService that has 3 functionalities: 
    // get, set, and destroy for users' data in the session storage

    angular.module('dashboard').service('SessionService', SessionService);

    function SessionService($window) {
        this.set = function(user) {
            $window.localStorage.username = user;
        };
        this.get = function() {
            return $window.localStorage.username;
        };
        this.destroy = function() {
            $window.localStorage.clear();
        };
    };
})();