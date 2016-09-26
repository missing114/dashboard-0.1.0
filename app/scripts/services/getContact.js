
// GETCONTACT SERVICE
// Description: Define the contactService that has 2 functionalities: getLocation and getCategory (function() {
(function() {
    angular.module('dashboard')
        .service('getContactService', getContactService);

    getContactService.$inject = ['$http'];

    function getContactService($http) {
        var service = this;


        service.getlocation = function() {
            return $http({
                method: 'GET',
                url: '/api/location'
            });
        };

        service.getCategory = function() {
        	return $http({
                method: 'GET',
                url: '/api/category'
            });
        }
    }
})();
