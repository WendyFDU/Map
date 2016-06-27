
var itemListModule = angular.module('itemlist.controllers', ['ionic']);

itemListModule.controller('ItemListCtrl',function($scope,$state,$ionicHistory){
  $scope.itemList = new Array(3);
  $scope.itemListLength  = 3;

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

  $scope.backeToMap = function () {
    $ionicHistory.goBack();
    //$state.go("mainmap");
    };
  $scope.jumpToSceneDetail = function (IdOfScene,NameOfScene) {
    console.log("id before jump"+IdOfScene+" name of scene:"+NameOfScene);

    $state.go("sceneDetail",{IdOfScene:IdOfScene});

  };

});
itemListModule.controller("TypeController",function($scope){
  this.tab = 1;

  this.selectTab = function(setTab){
    this.tab = setTab;
    if(setTab==1){
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
    }
    if(setTab==2){
      $scope.itemList[0] = {
        id : 0,
        name:"1933老场坊",
        score:"9.5",
        star:"60",
        come:"90",
        wish:"10",
        show:"9.5",
        sortType :"评分"
      }
      $scope.itemList[1] = {
        id : 1,
        name:"高雄驳二",
        score:"8",
        star:"10",
        come:"20",
        wish:"60",
        show:"8",
        sortType :"评分"
      }
      $scope.itemList[2] = {
        id : 2,
        name:"松山文创",
        score:"6",
        star:"40",
        come:"30",
        wish:"40",
        show:"6",
        sortType :"评分"
      }
    }

  }

  this.isSelectTab = function(checkTab){
    return this.tab === checkTab
  }
});
itemListModule.controller("RankController",function($scope){
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
})
  .controller("SceneDetailCtrl",function($scope,$state,$stateParams,$ionicHistory){
    console.log("name"+$stateParams.NameOfScene);
    $scope.sceneId = $stateParams.IdOfScene;
    $scope.sceneName = $stateParams.NameOfScene;
    $scope.back= function () {
      $ionicHistory.goBack();
      //$state.go("mainmap");
    };
    $scope.showDetailProfile= function () {

      $state.go("sceneDetailProfile",{IdOfScene:$scope.sceneId});
    };
    $scope.evaluation = function(){
      console.log("go to evaluation:"+$scope.sceneId);
      $state.go("sceneEvaluation",{IdOfScene:$scope.sceneId});
    }


  })
  .controller("SceneDetailProfileCtrl",function($scope,$stateParams,$ionicHistory,$ionicActionSheet, $ionicPopup,$timeout){
    $scope.status = "";
    $scope.back= function () {
      $ionicHistory.goBack();
      //$state.go("mainmap");
    };
    $scope.basicinfo="我是基本信息我是基本信息我是基本信息";
    $scope.detailinfo="我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息";
    console.log("id"+$stateParams.IdOfScene);
    $scope.sceneId = $stateParams.IdOfScene;
    $scope.addIntoWishlist= function () {
      console.log("here left to back end add wishlist");

    };

    $scope.showSharePanel = function() {

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
        },
        //destructiveText: "删除",
        //destructiveButtonClicked: function () {
        //}
      });
    }
//
//    $scope.showReportPrompt = function() {
//      $scope.data = {}
//      $ionicPopup.show({template: "<input type=’password’ ng-model=’data.wifi’>",
//      title: "Wi-Fi",
//      subTitle: "8",
//      scope: $scope,
//        buttons: [
//        { text: "cancel"},
//    {
//      text: "save", type: "button-positive", onTap: function(e) {
//      return $scope.data.wifi;
//    }
//  }
//]
//})
//.then(function(res) {
//  $scope.status = ["Wi-Fi密码到手了",":",res].join("");
//});
//};

//
//    $scope.showAlert = function() {
//      $ionicPopup.alert({
//        title: "不要吃果冻",
//      template: "它们可能是用旧的皮鞋帮做的！"
//    })
//    .then(function(res) {
//      $scope.status = "感谢上帝，你没吃鞋帮！";
//    });
//  };

    //$scope.back= function () {
    //  $ionicHistory.goBack();
    //  //$state.go("mainmap");
    //};


  })
  .controller("SceneEvaluationCtrl",function($scope,$state,$stateParams,$ionicHistory){
    $scope.back= function () {
      $ionicHistory.goBack();
      //$state.go("mainmap");
    };
    $scope.sceneId = $stateParams.IdOfScene;
    $scope.activityTypes=[{
      color:"1",
      name:"运动(跑步骑行球类)"
    },{
      color:"2",
      name:"健身"

    },{
      color:"3",
      name:"交往活动"
    },{
      color:"4",
      name:"观赏"
    }];
    $scope.placeTypeClick = function(){
      $scope.activityTypes=[{
        color:"1",
        name:"亲近自然"
      },{
        color:"2",
        name:"锻炼健身"

      },{
        color:"3",
        name:"聚会交友哦"
      },{
        color:"4",
        name:"美的体验"
      },{
        color:"4",
        name:"观察学习"
      }];
    };
    $scope.activityTypeClick = function(){
      $scope.activityTypes=[{
        color:"1",
        name:"运动(跑步骑行球类)"
      },{
        color:"2",
        name:"健身"

      },{
        color:"3",
        name:"交往活动"
      },{
        color:"4",
        name:"观赏"
      }];
    };
    $scope.goToEvaluate = function(){
      console.log("goto evaluation function");
      $scope.sceneId = $stateParams.IdOfScene;
      $state.go("sceneGoEvaluate",{IdOfScene:$scope.sceneId});
    }


  })
  .controller("SceneGoEvaluateCtrl",function($scope,$state,$stateParams,$ionicHistory) {
    $scope.back = function () {
      $ionicHistory.goBack();
    };
    $scope.dragAType = function(typeId){
      console.log("typeId:"+typeId);

      //console.log("typeId:"+typeId)
    };
    $scope.releaseAType = function(typeId){
      console.log("releasetypeId:"+typeId);

      //console.log("typeId:"+typeId)
    };


    $scope.sceneId = $stateParams.IdOfScene;
    $scope.activityTypes=[{
      id:1,

      color:"1",
      name:"运动(跑步骑行球类)"
    },{
      id:2,
      color:"2",
      name:"健身"

    },{
      id:3,
      color:"3",
      name:"交往活动"
    },{
      id:4,
      color:"4",
      name:"观赏"
    }];
    $scope.placeTypeClick = function(){
      $scope.activityTypes=[{
        id:1,
        color:"1",
        name:"亲近自然"
      },{
        id:2,
        color:"2",
        name:"锻炼健身"

      },{
        id:3,
        color:"3",
        name:"聚会交友"
      },{
        id:4,
        color:"4",
        name:"美的体验"
      },{
        id:5,
        color:"5",
        name:"观察学习"
      }];
    };
    $scope.activityTypeClick = function(){
      $scope.activityTypes=[];

      $scope.activityTypes=[{
        id:1,
        color:"1",
        name:"运动(跑步骑行球类)"
      },{
        id:2,
        color:"2",
        name:"健身"

      },{
        id:3,
        color:"3",
        name:"交往活动"
      },{
        id:4,
        color:"4",
        name:"观赏"
      }];
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



