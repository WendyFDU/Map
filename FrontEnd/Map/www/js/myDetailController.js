var myDetailModule = angular.module('myDetail.controllers', ['ionic']);

myDetailModule.controller('MyDetailCtrl', function ($scope, $state, $ionicHistory, $ionicActionSheet) {

  $scope.showRegister = function () {
    $state.go('register');
  };
  $scope.showLogin = function () {
    $state.go('login');
  };
  $scope.showFootprint = function () {
    $state.go('myFootprint');
  };
  $scope.showWish = function () {
    $state.go('myWish');
  };
  $scope.showCollection = function () {
    $state.go('myCollection');
  };
  $scope.share = function () {
    $state.go('myShare');
  };
  $scope.showSharePanel = function () {
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      titleText: "分享到",
      buttons: [
        {text: "QQ"},
        {text: "微信"},
        {text: "微博"},
        {text: "豆瓣"}
      ],
      buttonClicked: function (index) {
        return true;
      },
      cancelText: "取消",
      cancel: function () {
        // add cancel code..
      }
      //destructiveText: "删除",
      //destructiveButtonClicked: function () {
      //}
    });
  };
  $scope.showAbout = function () {
    $state.go('myAbout');
  };

  $scope.backToMap = function () {
    $ionicHistory.goBack();
  };
});

myDetailModule.controller('MyShareCtrl', function ($scope, $state, $ionicHistory) {
  $scope.back = function () {
    $ionicHistory.goBack();
  };
  $scope.showMainMap = function () {
    $state.go('mainmap');
  };
});

myDetailModule.controller('MyAboutCtrl', function ($scope, $state, $ionicHistory) {
  $scope.back = function () {
    $ionicHistory.goBack();
  };
  $scope.showMainMap = function () {
    $state.go('mainmap');
  };
});
