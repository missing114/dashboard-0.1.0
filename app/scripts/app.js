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
    .state('mainApp.root', {
      url: '/root',
      templateUrl: 'templates/root.html'
    })
    .state('mainApp.root.overview', {
      url: '/overview',
      templateUrl: 'templates/overview.html'
    })
    .state('mainApp.root.work', {
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