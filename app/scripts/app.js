// 'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */

(function() {
'use strict';

var app = angular.module('dashboard', ['ui.router', 'ngResource', 'ui.bootstrap']).config(
function routeConfig ($stateProvider, $urlRouterProvider) {
  // Routes
    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: "LoginController"
    })
    .state('root', {
      url: '/root',
      templateUrl: 'templates/root.html'
    })
    .state('root.overview', {
      url: '/overview',
      templateUrl: 'templates/overview.html'
    })
    .state('root.work', {
      url: '/work',
      templateUrl: 'templates/work.html',
      controller: 'WorkController',
    })
    .state('root.producer', {
      url: '/producer',
      templateUrl: 'templates/producer.html',
    })
    .state('root.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html',
    });

    $urlRouterProvider.otherwise('/login');
});

app.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.run(function($rootScope, $state, LoginService) {
   $rootScope.$on('$stateChangeStart',
       function(event, toState, toParams, fromState, fromParams) {
           console.log(fromState.name, toState.name, LoginService.islogged());
           if (!LoginService.islogged() && toState.name != 'login') {
              event.preventDefault();
              $state.go('login');
           } else if (LoginService.islogged() && toState.name == 'login') {
              event.preventDefault();
              $state.go('root.work');
           }
       });
});

})();