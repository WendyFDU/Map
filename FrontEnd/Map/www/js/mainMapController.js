var mapMadule = angular.module('mainmap.controllers', []);

//.controller('hhhCtrl', function($scope) {})
mapMadule.controller('MainMapCtrl', function ($scope, $state) {

  console.log("here in show map");

  var map = new BMap.Map("allmap");
  console.log("map:" + map);
  map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

  //$scope.$watch('searchInput', function() {
  //  console.log($scope.searchInput);
  //});
  $scope.search = function (searchInput) {
    console.log("searchInput:" + searchInput);
  }
  $scope.showMenuItemList = function () {

    $state.go('menuItemList');
  };

  $scope.showItemList = function () {

    $state.go('itemList');
  };
  $scope.checkTypeList = [{
    id: 0,
    name: "上海近代公园",
    checked: true
  }, {
    id: 1,
    name: "上海工业遗址",
    checked: true

  }, {
    id: 2,
    name: "上海特色街道",
    checked: true

  }
  ];

  /*----------------------------------------------------------------------------------------------------------------*/
  $scope.showNearby = function () {
    $state.go('nearby');
  };

  $scope.showSearchHistory = function () {
    $state.go('searchHistory');
  };

  $scope.showRoutePlanning = function () {
    $state.go('routePlanning');
  };

  $scope.showMyDetail = function () {
    $state.go('myDetail');
  };
  /*------------------------------------------------------------------------------------------*/
  $scope.clickTheCheckbox = function (id) {
    console.log(id + " " + $scope.checkTypeList[id].checked);
  }


});
//
//angular.module('education.courseCtrl', [])
//  .controller('courseCtrl.courseCtrl', function ($scope, $state,educationService) {
//
//    $scope.searchSong = function () {
//      var singername = document.getElementById("searchSongInput").value;
//      console.log("sing"+singername);
//      //$state.go("education.searchSong({singername:'"+singername+"'})");
//      $state.go("education.searchSong",{singername:singername});
//    };
//    console.log("tttttt");
//    $scope.searchAlbum = function () {
//      console.log("here in");
//      var singernameAlbum = document.getElementById("searchAlbumInput").value;
//      console.log("album"+singernameAlbum);
//      //$state.go("education.searchSong({singername:'"+singername+"'})");
//      $state.go("education.searchAlbum",{singernameAlbum:singernameAlbum});
//    }
//  });



