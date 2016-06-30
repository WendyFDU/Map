angular.module('tab.controllers', [])
  .controller('MainMapCtrl',function ($scope,$state){

    console.log("here in show map");
    $scope.showItemList = function () {
      var mainScreen = document.getElementById("main-screen");

      console.log("here in call open list");
      console.log("here in open list");
      $state.go('itemList');
    };



  })

  .controller('ListCtrl', function($scope) {

    console.log("here in open list");
    $scope.itemList = new Array(3);
    for (i=0;i<3;i++)
    {
      $scope.itemList[i] = {
        name:"1933老场坊",
      }
    }


    $scope.showItemList = function () {
      var mainScreen = document.getElementById("main-screen");

      console.log("here in call open list");
      console.log("here in open list");
      $state.go('itemList');
    };
  })

  .controller('AccountCtrl', function($scope) {
    console.log("a");
    $scope.settings = {
      enableFriends: true
    };
  })
