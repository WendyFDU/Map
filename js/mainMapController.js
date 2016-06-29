
var mapMadule = angular.module('mainmap.controllers', []);

  //.controller('hhhCtrl', function($scope) {})
  mapMadule.controller('MainMapCtrl',function ($scope,$state){

    console.log("here in show map");

    var map = new BMap.Map("allmap");
    console.log("map:"+map);
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

    $scope.$watch('searchInput', function() {
      console.log($scope.searchInput);
    });
    $scope.$watch('searchParam', function () {    // 使用过滤器过滤数据
      $scope.modelList = $filter('filter')($scope.modelList, 'searchParam');});

    //$scope.searchInput="";

    $scope.search = function(){
      //console.log($scope.searchInput);
    }
    $scope.showMenuItemList = function () {

      $state.go('menuItemList');
    };

    $scope.showItemList = function () {

      $state.go('itemList');
    };
    $scope.checkTypeList=[{
      name:"上海近代公园",
      checked:true
    },{
      name:"上海工业遗址",
      checked:true

    },{
      name:"上海特色街道",
      checked:true

    }
      ];
    //if($scope.checkTypeList[0].checked==false){
    //  console.log("here change in false")
    //}
    //console.log("checked:"+$scope.checkTypeList[2].checked);

    //
    //
    //if($scope.checkType.park==true){
    //  console.log("park");
    //}
    //if($scope.industry==true){
    //  console.log("industry");
    //}



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



