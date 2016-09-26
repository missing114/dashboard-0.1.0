(function() {
    'use strict'
    angular.module('dashboard').service('LoginService', LoginService)

    function LoginService($window) {
        this.isloged = function() {
            return Boolean($window.localStorage.username != undefined);
        }
    }
})();
