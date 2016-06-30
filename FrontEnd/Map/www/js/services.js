angular.module('starter.services', [])

  .factory('services', ['$resource', '$http', function($resource, $http) {
    return new services($resource, $http);
  }]);

function services(resource, http) {

  var actions = {
    'get':{
      method:'GET',
    },
    'query':{
      method:'GET',
      isArray:true
    },
    'save':{
      method:'POST',
      isArray:true,
    },
    'update':{
      method:'PUT',
      isArray:true,
    },
    'remove':{
      method:'DELETE',
      isArray:true
    }
  };


  this.queryTrainsList = function(scope) {
    scope.resetError();

    var TrainResource = resource('trains/queryTrainsList', {}, actions);
    TrainResource.query({}, function(data) {
      scope.trains = data;
    }, function(error) {
      scope.setError('无法查询火车列表');
    });

  };

  this.saveTrain = function(train, scope) {
    scope.resetError();

    var TrainResource = resource('trains/saveTrain', {}, actions);
    TrainResource.save(train, function(data) {
      scope.gotoTrainsView();
    }, function(error) {
      scope.setError('无法添加新的火车');
    });

  };




};
