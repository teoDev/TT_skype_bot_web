'use strict';
angular.module('angularjsSkypeBotApp').filter('tagFilter', function () {
  return function (questions, tags) {
    var result = [];
    if (tags.length === 0){
      return questions;
    }

    angular.forEach(questions, function (question) {
      var correctQuestion = false;
      angular.forEach(question.tags, function (tagsInQuestion) {
        angular.forEach(tagsInQuestion, function (tagFromQuestion) {
          var neededTagsSize = tags.length;
          var correctTags = 0;
          angular.forEach(tags, function (tag) {
            if (tagFromQuestion === tag.name) {
              correctTags++;
            }
            if(correctTags === neededTagsSize){
              correctQuestion =true;
            }
          });
        });

      });
      if(correctQuestion===true) {result.push(question);}
    });

    return result;

  };
});/**
 * Created by Karol on 2016-11-24.
 */
