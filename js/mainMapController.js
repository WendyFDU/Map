
var mapMadule = angular.module('mainmap.controllers', []);

  //.controller('hhhCtrl', function($scope) {})
  mapMadule.controller('MainMapCtrl',function ($scope,$state){

    console.log("here in show map");
    $scope.showMenuItemList = function () {

      $state.go('menuItemList');
    };

    $scope.showItemList = function () {

      $state.go('itemList');
    };



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



