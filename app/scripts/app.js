'use strict';

/**
 * @ngdoc overview
 * @name angularjsSkypeBotApp
 * @description
 * # angularjsSkypeBotApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsSkypeBotApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'spring-data-rest',
    'ngTagsInput'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
