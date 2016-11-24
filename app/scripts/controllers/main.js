'use strict';

/**
 * @ngdoc function
 * @name angularjsSkypeBotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsSkypeBotApp
 */
angular.module('angularjsSkypeBotApp')
  .controller('MainCtrl', function ( $http, SpringDataRestAdapter) {
    var that = this;
    this.questions = '';
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var httpPromise = $http.get('./testData/questionsTest.json');
    SpringDataRestAdapter.process(httpPromise).then(function (processedResponse) {
      that.questions = processedResponse._embeddedItems;
      console.log( that.questions);
    });

  });
