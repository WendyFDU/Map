angular.module('starter.controllers', [])


//  .controller('MainMapCtrl',function($scope){
//    $scope.openItemList = function () {
//     console.log("here in open list");
//    }
//
//})
.controller('LoginCtrl', function($scope, $rootScope, $state, $ionicPopup, $http) {
  $scope.login = {};
  $scope.signIn = function (loginForm) {

    var username = $scope.login.username;
    var password = $scope.login.password;

    //if (loginForm.$valid) {
    //  $http({
    //    method: 'POST',
    //    url: "http://localhost:8080/server/user",
    //    params: {"username" : $scope.login.username,"password" : $scope.login.password},
    //    headers: {
    //      'Content-Type': 'application/json',
    //      'Accept' : 'application/json',
    //      'Access-Control-Allow-Origin': '*',
    //      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    //      'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
    //      'Access-Control-Allow-Max-Age' : '100'
    //    }
    //  }).success(function (response) {
    //    console.log(response);
    //      console.log(response.id+response.name+response.password);
    //      sessionStorage.setItem('user', JSON.stringify(response));
    //      $rootScope.isLogin = true;
    //      if (window.localStorage) {
    //        console.log("localStorage ", "login");
    //        localStorage.setItem("isLogin", "login");
    //        localStorage.setItem("userId", response.id);
    //        localStorage.setItem("username", response.name);
    //      } else {
    //        console.log("cookie");
    //        Cookie.write("isLogin", "login");
    //        Cookie.write("userId", response.user.id);
    //        Cookie.write("username", response.user.name);
    //      }
          $state.go('mainmap');
          //$state.go('tab.current');
    //    })
    //    .error(function (error) {
    //      console.log(error);
    //      $state.reload('login');
    //    })
    //} else {
    //  var pop2 = $ionicPopup.alert({
    //    title: '  ',
    //    template: '请输入格式正确的用户名及密码'
    //  });
    //}

  }
})
;
