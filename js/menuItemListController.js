
angular.module('menuitemlist.controllers', [])
  .controller('MenuItemListCtrl',function($scope,$state,$ionicHistory){
  $scope.menuItemList = new Array(3);
  for (i=0;i<3;i++)
  {
    $scope.menuItemList[i] = {
      name:"1933老场坊",
    }
  }

  $scope.backeToMap = function () {
    $ionicHistory.goBack();
    //$state.go("mainmap");
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



