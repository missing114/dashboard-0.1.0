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

var app = angular.module('dashboard', ['ui.router']).config(
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
    });

    $urlRouterProvider.otherwise('/login');
});

app.run(function($rootScope, $state, LoginService) {
   $rootScope.$on('$stateChangeStart',
       function(event, toState) {
           console.log(LoginService.islogged(), toState.name);
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