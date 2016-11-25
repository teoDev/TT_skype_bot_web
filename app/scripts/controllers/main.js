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
    that.questions = '';
    that.chosenTags= [
    ];

    that.tags =
    [
      { text: '4hP9X' },
      { text: 'wHJtl' },
      { text: 'xDrmI' },
      { text: 'LW5SB' }
    ];
    console.log(that.tags);
    //var httpPromise = $http.get('./testData/qTest.json');
    var questionPromise = $http.get('http://192.168.173.233:8080/questions');
    var tagPromise = $http.get('http://192.168.173.233:8080/tags');

    SpringDataRestAdapter.process(questionPromise).then(function (processedResponse) {
      that.questions = processedResponse._embeddedItems;

      angular.forEach(that.questions, function(q) {
        q.expanded = false;
        that.Question.loadTags(q);
      });

      });
    that.Question = {};
    that.Question.loadAnswers = function (question) {
      question.answers = question.answers? question.answers : [];
      angular.forEach(question._links.answers, function (answerLink) {
        var deferred = $http.get(answerLink);
        return SpringDataRestAdapter.process(deferred).then(function (data) {
          question.answers = data._embeddedItems;
        });
      });
    };

    that.Question.loadTags = function (question) {
      question.tags = question.tags? question.tags : [];
      angular.forEach(question._links.tags, function (tagLink) {
        var deferred = $http.get(tagLink);
        return SpringDataRestAdapter.process(deferred).then(function (data) {
          question.tags = data._embeddedItems;
        });
      });
    };


    that.Tag = {};
    that.Tag.loadTags = function () {
      SpringDataRestAdapter.process(tagPromise).then(function (processedResponse) {
        that.tags = processedResponse._embeddedItems;
        console.log(that.tags);
      });
    };

    that.Tag.loadTags();




  });
