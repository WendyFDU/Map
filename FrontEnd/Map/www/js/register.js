var registerModule = angular.module('register.controllers', ['ionic']);

registerModule.controller('RegisterCtrl',function($scope,$state,$ionicHistory) {
  $scope.back = function () {
    $ionicHistory.goBack();
  };
});
