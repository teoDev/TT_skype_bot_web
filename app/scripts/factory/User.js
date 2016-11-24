'use strict';
angular.module('angularjsSkypeBotApp').factory('User', ['$resource', function ($resource) {
  //$resource() function returns an object of resource class.
  return $resource(
    './testData/',
    {},//parameters
    {
      update: {
        method: 'PUT' // To send the HTTP Put request when calling this custom update method.
      },
      get: {
        method: 'GET', cache: true // To cache the GET request fired using 'get' method.
      }
    },
    {
      stripTrailingSlashes: false
    }
  );
}]);/**
 * Created by Karol on 2016-11-24.
 */
