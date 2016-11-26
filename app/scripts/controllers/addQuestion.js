'use strict';

/**
 * @ngdoc function
 * @name angularjsSkypeBotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsSkypeBotApp
 */
angular.module('angularjsSkypeBotApp')
  .controller('AddQuestionCtrl', function ( $http, QuestionService) {

    var that =this;
    function QuestionE (content) {
      this.question = content;
    }


    that.createQuestion = function(question){
      that.questionTest = new QuestionE(question.question);
      QuestionService.createQuestion( that.questionTest);
    };



  });
