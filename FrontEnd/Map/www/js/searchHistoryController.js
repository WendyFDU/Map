var searchHistoryModule = angular.module('searchHistory.controllers', ['ionic']);

searchHistoryModule.controller('SearchHistoryCtrl',function($scope,$state,$ionicHistory){
  $scope.itemListLength  = 3;
  $scope.itemList = new Array($scope.itemListLength);


  $scope.itemList[0] = {
    id : 0,
    name:"世纪公园",
    score:"9",
    star:"60",
    come:"90",
    wish:"10",
    show:"9",
    sortType :"评分"
  }
  $scope.itemList[1] = {
    id : 1,
    name:"人民公园",
    score:"8",
    star:"10",
    come:"20",
    wish:"60",
    show:"8",
    sortType :"评分"
  }
  $scope.itemList[2] = {
    id : 2,
    name:"新天地绿岛",
    score:"7",
    star:"40",
    come:"30",
    wish:"40",
    show:"7",
    sortType :"评分"
  }

  $scope.backToMap = function () {
    $ionicHistory.goBack();
  };
  $scope.jumpToSceneDetail = function (IdOfScene,NameOfScene) {
    console.log("id before jump"+IdOfScene+" name of scene:"+NameOfScene);

    $state.go("sceneDetail",{IdOfScene:IdOfScene});

  };
});

searchHistoryModule.controller("RankController",function($scope){
  console.log("test yu:"+$scope.sortType);

  this.tab = 1;
  function JsonSort(json,key){
    //console.log(json);
    for(var j=1,jl=json.length;j < jl;j++){
      var temp = json[j],
        val  = temp[key],
        i    = j-1;
      while(i >=0 && json[i][key]<val){
        json[i+1] = json[i];
        i = i-1;
      }
      json[i+1] = temp;

    }
    //console.log(json);
    return json;
  }


  this.selectTab = function(setTab){
    this.tab = setTab;
    if(setTab==1){
      var length = $scope.itemList.length;
      console.log("test here length:"+length);

      $scope.itemList = JsonSort($scope.itemList,'score');

      var i ;
      for(i =0;i<$scope.itemList.length;i++){
        $scope.itemList[i].show = $scope.itemList[i].score;
        $scope.itemList[i].sortType = "评分";
      }

    }
    if(setTab==2){
      $scope.showItemList = JsonSort($scope.itemList,'star');
      //$scope.sortType = "收藏";
      console.log("test yu:"+$scope.sortType);


      for( i =0;i<$scope.itemList.length;i++){
        $scope.itemList[i].show = $scope.itemList[i].star;
        $scope.itemList[i].sortType = "收藏";

      }

    }
    if(setTab==3){
      $scope.showItemList = JsonSort($scope.itemList,'come');
      $scope.sortType = "足迹";

      for( i =0;i<$scope.itemList.length;i++){
        $scope.itemList[i].show = $scope.itemList[i].come;
        $scope.itemList[i].sortType = "足迹";

      }

      //for (i=0;i<3;i++)
      //{
      //  $scope.itemList[i] = {
      //    name:"sh上海工业",
      //    judge:"足迹",
      //    score:"60",
      //  }
      //}
    }
    if(setTab==4){
      $scope.showItemList = JsonSort($scope.itemList,'wish');
      $scope.sortType = "心愿";
      for( i =0;i<$scope.itemList.length;i++){
        $scope.itemList[i].show = $scope.itemList[i].wish;
        $scope.itemList[i].sortType = "心愿";

      }


      //for (i=0;i<3;i++)
      //{
      //  $scope.itemList[i] = {
      //    name:"sh上海工业",
      //    judge:"心愿",
      //    score:"60",
      //  }
      //}
    }

  }

  this.isSelectTab = function(checkTab){
    return this.tab === checkTab
  }
});
