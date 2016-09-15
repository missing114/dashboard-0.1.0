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

angular.module('mainApp', ['ui.router']).config(routeConfig);
console.log("module mainApp initialized");

/* Configures the routes and views */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('mainApp', {
      absract: true,
      templateUrl: 'index.html'
    })
    .state('mainApp.login', {
      url: '/login',
      // absract: true,
      templateUrl: 'templates/login.html'
    })
    .state('mainApp.overview', {
      url: '/overview',
      templateUrl: 'templates/overview.html'
    })
    .state('mainApp.work', {
      url: '/work',
      templateUrl: 'templates/work.html',
      controller: 'WorkController',
      controllerAs: 'WorkCtrl',
      // resolve: {
      //   workDisplays: ['WorkService', function (WorkService) {
      //     return WorkService.getDisplays();
      //   }]
      // }
    })
    // .state('main.producer', {
    //   url: '/producer',
    //   templateUrl: 'templates/producer.html',
    //   controller: 'ProducerController',
    //   controllerAs: 'ProCtrl',
    //   resolve: {
    //     p: ['$stateParams','MenuService', function ($stateParams, MenuService) {
    //       return MenuService.getMenuItems($stateParams.category);
    //     }]
    //   }
    // });
}
})();

// var loginApp = angular.module('loginApp', ['ui.router', 'ui.bootstrap'])
// /*Constants regarding user login defined here*/
// .constant('USER_ROLES', {
//     all : '*',
//     admin : 'admin',
//     editor : 'editor',
//     guest : 'guest'
// }).constant('AUTH_EVENTS', {
//     loginSuccess : 'auth-login-success',
//     loginFailed : 'auth-login-failed',
//     logoutSuccess : 'auth-logout-success',
//     sessionTimeout : 'auth-session-timeout',
//     notAuthenticated : 'auth-not-authenticated',
//     notAuthorized : 'auth-not-authorized'
// })

/* Adding the auth interceptor here, to check every $http request*/
// .config(function ($httpProvider) {
//   $httpProvider.interceptors.push([
//     '$injector',
//     function ($injector) {
//       return $injector.get('AuthInterceptor');
//     }
//   ]);
// })

