'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */


var app = angular.module('dashboard', ['ui.router', 'ngResource','ui.bootstrap','ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: "templates/login.html"
        })
        .state('root', {
            url: '/root',
            templateUrl: "templates/root.html"
        })
        .state('root.overview', {
            url: '/overview',
            templateUrl: "templates/overview.html"
        })
        .state('root.producer', {
            url: '/producer',
            templateUrl: "templates/producer.html"
        })
        .state('root.work', {
            url: '/work',
            templateUrl: "templates/work.html"
        })
        .state('root.contact', {
            url: '/contact',
            templateUrl: "templates/contact.html"
        })
        .state('error', {
            url: '/error',
            templateUrl: "templates/404.html"
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