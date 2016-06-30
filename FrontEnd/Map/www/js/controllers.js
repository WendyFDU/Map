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

      if (loginForm.$valid) {
        $http({
          method: 'POST',
          url: "http://localhost:8080/server/user/login",
          params: {"username" : $scope.login.username,"userpassword" : $scope.login.password},
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Max-Age' : '100'
          }
        }).success(function (response) {
          if(response==""){
            console.log("no this user exit");
            var pop2 = $ionicPopup.alert({
              title: '  ',
              template: '用户不存在'
            });
            return;
          }
          console.log("response"+response);
          console.log(response.id+response.userName+response.password);
          sessionStorage.setItem('user', JSON.stringify(response));
          $rootScope.isLogin = true;
          $rootScope.userId = response.id;
          if (window.localStorage) {
            console.log("localStorage ", "login");
            localStorage.setItem("isLogin", "login");
            localStorage.setItem("userId", response.id);
            localStorage.setItem("username", response.userName);
          } else {
            console.log("cookie");
            Cookie.write("isLogin", "login");
            Cookie.write("userId", response.id);
            Cookie.write("username", response.userName);
          }
          $state.go('mainmap');
        })
          .error(function (error) {
            console.log(error);
            $state.reload('login');
          })
      } else {
        var pop2 = $ionicPopup.alert({
          title: '  ',
          template: '请输入格式正确的用户名及密码'
        });
      }

    }
  })
;
