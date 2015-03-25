'use strict';

/**
 * @ngdoc overview
 * @name frangularApp
 * @description
 * # frangularApp
 *
 * Main module of the application.
 */
angular
  .module('frangularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ButtonsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
