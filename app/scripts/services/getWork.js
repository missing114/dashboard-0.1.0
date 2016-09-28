(function() {
    angular.module('dashboard')
        .service('getWorkService', getWorkService);

    getWorkService.$inject = ['$http'];

    function getWorkService($http) {
        var service = this;


        service.getworks = function() {
            return $http({
                method: 'GET',
                url: '/api/work'
            });
        };

        service.addWork = function(add_title, add_author, add_like, add_comment) {
            return {
                title: add_title,
                author: add_author,
                like: add_like,
                comment: add_comment
            }
        };
    }
})();