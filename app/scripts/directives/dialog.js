(function() {
    'use strict';
    // DIALOG DIRECTIVE
    // Description: Define 2 directives in the app: addDialog and editDialog. 
    // First one is for the "Add" button and the second one is for the "Edit" button

    angular.module('dashboard')
        .directive('addDialog', addDialog)
        .directive('editDialog', editDialog)
        .directive('loading', ['$http', loading]);

    function addDialog() {
        return {
            templateUrl: 'templates/addDialog.html'
        };
    }

    function editDialog() {
        return {
            templateUrl: 'templates/editDialog.html'
        };
    }

    function loading($http) {
        return {
            restrict: 'A',
            link: function(scope, elm, attrs) {
                scope.isLoading = function() {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function(v) {
                    if (v) {
                        elm.show();
                    } else {
                        elm.hide();
                    }
                });
            }
        };
    }

})();
