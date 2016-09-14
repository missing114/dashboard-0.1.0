'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged 

(function () {
"use strict";

angular.module('admin')
.service('AuthRedirectorService', AuthRedirectorService);


AuthRedirectorService.$inject = ['$state', 'CurrentUserService'];
function AuthRedirectorService($state, CurrentUserService) {
  var service = this;

  /**
   * Processes the logic when a state begins. We ensure that
   * the user is authenticated before letting them proceed
   * to the next page.
   */
  service.onStateChangeStart = function(event, toState, toParams, fromState, fromParams) {
    // Only redirect if going to any admin state,
    // unless going directly to login
    if (toState.name.indexOf('admin.') === 0 &&
        toState.name != 'admin.login' &&
        !CurrentUserService.isAuthenticated()) {
      event.preventDefault();
      $state.go('admin.login', {
        'toState': toState,
        'toParams': toParams
      });
    }
  };

}


})();

(function() {
"use strict";

angular.module('admin')
.service('CurrentUserService', CurrentUserService);

/**
 * Used to store and track information about the currently logged in user.
 * This is intended to be injected any time we need some user metadata
 * or to find out if the user is authenticated.
 **/
function CurrentUserService() {
  var service = this;
  var _username = '';
  var _accessToken = '';

  /**
   * Load the current user with username and token
   */
  service.saveToken = function(username, token) {
    _username = username;
    _accessToken = token;
  };


  service.getUsername = function() {
    return _username;
  };


  service.getAccessToken = function() {
    return _accessToken;
  };


  service.isAuthenticated = function() {
    return _accessToken !== '';
  };

}


})();

(function() {
"use strict";

angular.module('admin')
.service('LoginService', LoginService);

LoginService.$inject = ['$http', 'ApiPath'];
function LoginService($http, ApiPath) {
  var service = this;

  /** Retrieves an access token using a username and password */
  service.getAccessToken = function(username, password) {
    var params = {
      'username': username,
      'password': password,
      'grant_type': 'password'
    };

    return $http.post(ApiPath + '/token', params).then(function(response) {
      return response.data.access_token;
    });
  };


  /** Make request to revoke current token */
  service.logout = function (tokenValue) {
    var params = {
      token_type_hint: 'access_token',
      token: tokenValue
    };

    return $http.post(ApiPath + '/revoke', params);
  };

}


})();

(function() {
"use strict";

angular.module('admin', ['ui.router', 'common', 'ngFileUpload'])
.run(run);

run.$inject = ['$rootScope', 'AuthRedirectorService']
function run($rootScope, AuthRedirectorService) {
  // Apply auth rules when state changes
  $rootScope.$on('$stateChangeStart', AuthRedirectorService.onStateChangeStart);
}


})();

(function () {
"use strict";

angular.module('admin')
.config(config);

config.$inject = ['$stateProvider', '$httpProvider'];
function config($stateProvider, $httpProvider) {
  $httpProvider.interceptors.push('authHttpInterceptor');
  $httpProvider.defaults.headers.common.Accept = 'application/json';

  $stateProvider

    // Contains base state that all admin states inherit
    .state('admin', {
      url: '/admin',
      abstract: true,
      templateUrl: 'src/admin/admin.html'
    })
    // Contains state that all authenticated states inherit
    .state('admin.auth', {
      url: '',
      templateUrl: 'src/admin/admin-auth/admin-auth.html',
      controller: 'AdminAuthController',
      controllerAs: 'adminAuth'
    })
    .state('admin.login', {
      url: '/login',
      templateUrl: 'src/admin/login/login.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl',
      // These are params that this state expects to be populated
      // Allows us to pass via $state.go(path, params)
      params: {
        toParams: null,
        toState: null
      }
    })
    .state('admin.auth.category', {
      url: '/category/{categoryId}',
      templateUrl: 'src/admin/category/category-items.html',
      controller: 'CategoryItemsController',
      controllerAs: 'categoryItemsCtrl',
      resolve: {
        category: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getCategory($stateParams.categoryId);
        }],
        menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.categoryId);
        }]
      }
    })

    .state('admin.auth.category.menuitem', {
      url: "/menuitem/{menuItemId}",
      templateUrl: "src/admin/menu-item/menu-item-edit.html",
      controller: 'MenuItemEditController',
      controllerAs: 'menuItemEditCtrl',
      resolve: {
        menuItem: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItem($stateParams.menuItemId);
        }]
      }
    });;
}

})();

(function () {
"use strict";

angular.module('admin')
.factory('authHttpInterceptor', AuthHttpInterceptor);


AuthHttpInterceptor.$inject = ['CurrentUserService'];
function AuthHttpInterceptor(CurrentUserService) {
  return {
    request: function (config) {
      if (CurrentUserService.isAuthenticated()) {
        config.headers.Authorization =
          "Bearer " + CurrentUserService.getAccessToken();
      }

      return config;
    }
  };
}

})();
