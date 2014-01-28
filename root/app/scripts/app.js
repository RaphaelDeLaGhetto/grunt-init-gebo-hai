'use strict';

angular.module('geboBlogHaiApp', ['ngResource', 'ngRoute', 'ui.bootstrap',
                                  'gebo-client-token', 'gebo-client-token'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
