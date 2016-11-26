'use strict';
angular.module('angularjsSkypeBotApp').factory('QuestionService', ['$http', '$q', function($http, $q){

  var REST_SERVICE_URI = 'http://192.168.173.233:8080/questions';


  function fetchAllQuestions() {
    var deferred = $q.defer();
    $http.get(REST_SERVICE_URI)
      .then(
        function (response) {
          deferred.resolve(response.data);
        },
        function(errResponse){
          console.error('Error while fetching Questions');
          deferred.reject(errResponse);
        }
      );
    return deferred.promise;
  }

  function createQuestion(question) {
    var deferred = $q.defer();
    $http.post(REST_SERVICE_URI, question)
      .then(
        function (response) {
          deferred.resolve(response.data);
        },
        function(errResponse){
          console.error('Error while creating Question');
          deferred.reject(errResponse);
        }
      );
    return deferred.promise;
  }


  function updateQuestion(question, id) {
    var deferred = $q.defer();
    $http.put(REST_SERVICE_URI+id, question)
      .then(
        function (response) {
          deferred.resolve(response.data);
        },
        function(errResponse){
          console.error('Error while updating Question');
          deferred.reject(errResponse);
        }
      );
    return deferred.promise;
  }

  function deleteQuestion(id) {
    var deferred = $q.defer();
    $http.delete(REST_SERVICE_URI+'/'+id)
      .then(
        function (response) {
          deferred.resolve(response.data);
        },
        function(errResponse){
          console.error('Error while deleting Question');
          deferred.reject(errResponse);
        }
      );
    return deferred.promise;
  }

  var factory = {
    fetchAllQuestions: fetchAllQuestions,
    createQuestion: createQuestion,
    updateQuestion:updateQuestion,
    deleteQuestion:deleteQuestion
  };

  return factory;

}]);


