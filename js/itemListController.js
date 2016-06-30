
var itemListModule = angular.module('itemlist.controllers', ['ionic']);
var sortT = "score";
itemListModule.controller('ItemListCtrl',function($scope,$state,$ionicHistory){

  //
  //$http({
  //  method: 'POST',
  //  url: "http://localhost:8080/server/user",
  //  params: {"sceneType" : "上海近代公园"},
  //  headers: {
  //    'Content-Type': 'application/json',
  //    'Accept' : 'application/json',
  //    'Access-Control-Allow-Origin': '*',
  //    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
  //    'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
  //    'Access-Control-Allow-Max-Age' : '100'
  //  }
  //}).success(function (response) {
  //  console.log(response);
  //  console.log(response.id+response.name+response.password);
  //  sessionStorage.setItem('user', JSON.stringify(response));
  //  $rootScope.isLogin = true;
  //  if (window.localStorage) {
  //    console.log("localStorage ", "login");
  //    localStorage.setItem("isLogin", "login");
  //    localStorage.setItem("userId", response.id);
  //    localStorage.setItem("username", response.name);
  //  } else {
  //    console.log("cookie");
  //    Cookie.write("isLogin", "login");
  //    Cookie.write("userId", response.user.id);
  //    Cookie.write("username", response.user.name);
  //  }
  //  //$state.go('tab.current');
  //}).error(function (error) {
  //    console.log(error);
  //    $state.reload('itemList');
  //  })

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
    sortType :"score"
  }
  $scope.itemList[1] = {
    id : 1,
    name:"人民公园",
    score:"8",
    star:"10",
    come:"20",
    wish:"60",
    show:"8",
    sortType :"score"
  }
  $scope.itemList[2] = {
    id : 2,
    name:"新天地绿岛",
    score:"7",
    star:"40",
    come:"30",
    wish:"40",
    show:"7",
    sortType :"score"
  }

  $scope.backeToMap = function () {
    $ionicHistory.goBack();
    };
  $scope.jumpToSceneDetail = function (IdOfScene,NameOfScene) {
    console.log("id before jump"+IdOfScene+" name of scene:"+NameOfScene);

    $state.go("sceneDetail",{IdOfScene:IdOfScene});

  };

})
.controller("TypeController",function($scope){

  this.tab = 1;
  function JsonSort(json,key){
    //console.log(json);
    var jl=json.length;
    for(var j=1;j < jl;j++){
      var temp = json[j],
        val  = temp[key],
        i    = j-1;
      while(i >=0 && json[i][key]<val){
        json[i+1] = json[i];
        i = i-1;
      }
      json[i+1] = temp;

    }
    for( j = 0;j<jl;j++){
      json[j]["show"] = json[j][key];
      json[j]["sortType"] = key;
    }

    return json;

  }
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
        sortType :"score"
      }
      $scope.itemList[1] = {
        id : 1,
        name:"人民公园",
        score:"8",
        star:"10",
        come:"20",
        wish:"60",
        show:"8",
        sortType :"score"
      }
      $scope.itemList[2] = {
        id : 2,
        name:"新天地绿岛",
        score:"7",
        star:"40",
        come:"30",
        wish:"40",
        show:"7",
        sortType :"score"
      }
      console.log("148:"+" "+$scope.itemList[2].sortType+" "+sortT);
      $scope.itemList = JsonSort($scope.itemList,sortT);
    }
    if(setTab==2){
      $scope.itemList[0] = {
        id : 3,
        name:"1933老场坊",
        score:"9.5",
        star:"60",
        come:"90",
        wish:"10",
        show:"9.5",
        sortType :"score"
      }
      $scope.itemList[1] = {
        id : 4,
        name:"高雄驳二",
        score:"8",
        star:"10",
        come:"20",
        wish:"60",
        show:"8",
        sortType :"score"
      }
      $scope.itemList[2] = {
        id : 5,
        name:"松山文创",
        score:"6",
        star:"40",
        come:"30",
        wish:"40",
        show:"6",
        sortType :"score"
      }
      //console.log("181:"+$scope.itemList[2].show+" "+$scope.itemList[2].sortType+" "+sortT);
      $scope.itemList = JsonSort($scope.itemList,sortT);
      console.log("183:"+$scope.itemList[2].show+" "+$scope.itemList[2].sortType+" "+sortT);

    }
  }
  this.isSelectTab = function(checkTab){
    return this.tab === checkTab;

  };
    this.tab = 1;
    this.selectSortTab = function(setTab){
      this.tab = setTab;
      if(setTab==1){
        var length = $scope.itemList.length;
        sortT= "score";
        $scope.itemList = JsonSort($scope.itemList,sortT);
      }
      if(setTab==2){
        sortT = "star";
        $scope.showItemList = JsonSort($scope.itemList,sortT);
        console.log("sortT:"+sortT);
      }
      if(setTab==3){
        sortT= "come";
        $scope.showItemList = JsonSort($scope.itemList,sortT);

      }
      if(setTab==4){
        sortT= "wish";
        $scope.showItemList = JsonSort($scope.itemList,sortT);
      }
    }

    this.isSelectSortTab = function(checkTab){
      return this.tab === checkTab
    }
})
  //.controller("RankController",function($scope){
  ////console.log("test yu:"+$scope.sortType);
  //this.tab = 1;
  //  function JsonSort(json,key){
  //    //console.log(json);
  //    var jl=json.length;
  //    for(var j=1;j < jl;j++){
  //      var temp = json[j],
  //        val  = temp[key],
  //        i    = j-1;
  //      while(i >=0 && json[i][key]<val){
  //        json[i+1] = json[i];
  //        i = i-1;
  //      }
  //      json[i+1] = temp;
  //    }
  //    for( j = 0;j<jl;j++){
  //      json[j]["show"] = json[j][key];
  //      json[j]["sortType"] = key;
  //    }
  //    return json;
  //  }
  //this.selectSortTab = function(setTab){
  //  this.tab = setTab;
  //  if(setTab==1){
  //    var length = $scope.itemList.length;
  //    console.log("test here length:"+length);
  //    $scope.sortType = "评分";
  //    console.log("test yu:"+$scope.sortType);
  //    $scope.itemList = JsonSort($scope.itemList,'score');
  //  }
  //  if(setTab==2){
  //    $scope.showItemList = JsonSort($scope.itemList,'star');
  //    $scope.sortType = "收藏";
  //    console.log("test yu:"+$scope.sortType);
  //  }
  //  if(setTab==3){
  //    $scope.showItemList = JsonSort($scope.itemList,'come');
  //    $scope.sortType = "足迹";
  //    console.log("test yu:"+$scope.sortType);
  //  }
  //  if(setTab==4){
  //    $scope.showItemList = JsonSort($scope.itemList,'wish');
  //    $scope.sortType = "心愿";
  //    console.log("test yu:"+$scope.sortType);
  //  }
  //}
  //
  //this.isSelectSortTab = function(checkTab){
  //  return this.tab === checkTab
  //}
//})
  .controller("SceneDetailCtrl",function($scope,$state,$stateParams,$ionicHistory,$ionicActionSheet){
    console.log("name"+$stateParams.NameOfScene);
    $scope.sceneId = $stateParams.IdOfScene;
    $scope.sceneName = $stateParams.NameOfScene;

    //$scope.getSceneDetail = function(sceneId){
    //    return position = [116.404, 39.915];
    //}
    $scope.po = [116.404, 39.915];
    $scope.score = 6.1;
    $scope.amountPeopleScore = 6376;
    $scope.scoreRange=[322,2421,24,544,11];
    $scope.sceneComment = ["其实还不错其实还不错其实还不错其实还不错其实还不错","还可以","停车不方便"];
    var score = 6.1;
    if(0<=score&&score<=2){
      $scope.starNum = 1;
    }
    else if(2<score&&score<=5){
      $scope.starNum = 2;
    }
    else if(5<score&&score<=7){
      $scope.starNum = 3;
    }
    else if(7<score&&score<=8){
      $scope.starNum = 4;
    }
    else if(8<score&&score<=10){
      $scope.starNum = 5;
    }
    //console.log(" $scope.starNum:"+ $scope.starNum+ " score:"+score);


    $scope.range = function(n) {
      return new Array(n);
    };
    $scope.starArray = $scope.range($scope.starNum);
    //console.log(" $scope.starNum:"+ $scope.starNum+ " score:"+score);


    $scope.starOutlineArray = $scope.range(5-$scope.starNum);

    var map = new BMap.Map("detailmap");
    console.log("map:"+map);
    map.centerAndZoom(new BMap.Point($scope.po[0],$scope.po[1]), 11);

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
      '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
      '地址：北京市海淀区上地十街10号<br/>电话：(010)59928888<br/>简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。' +
      '</div>';
    var searchInfoWindow = null;
    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
      title  : "百度大厦",      // 标题
      width  : 290,             // 宽度
      height : 105,              // 高度
      panel  : "panel",         // 检索结果面板
      enableAutoPan : true,     // 自动平移
      searchTypes   :[
        BMAPLIB_TAB_SEARCH,   // 周边检索
        BMAPLIB_TAB_TO_HERE,  // 到这里去
        BMAPLIB_TAB_FROM_HERE // 从这里出发
      ]
    });
    var poi = new BMap.Point(116.307852,40.058031);
    var marker = new BMap.Marker(poi); // 创建marker对象
    marker.enableDragging(); // marker可拖拽
    marker.addEventListener("click", function(e){
      searchInfoWindow.open(marker);
    })
    map.addOverlay(marker);


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
    };
    $scope.goScene=function(){
      //left to yingzhou~~~
    };
    $scope.starState="ion-ios-star-outline";
    $scope.wishState = "ion-ios-heart-outline";
    $scope.comeState = "ion-ios-plus-outline";
    $scope.addIntoStar = function(){
      if($scope.starState=="ion-ios-star-outline"){
        $scope.starState="ion-ios-star";
        console.log("add Into Star");
      }
      else{
        $scope.starState="ion-ios-star-outline"
        console.log("remove from star")
      }

    };
    $scope.addIntoWish = function(){
      if($scope.wishState=="ion-ios-heart-outline"){
        $scope.wishState="ion-ios-heart";
        console.log("add Into heart");
      }
      else{
        $scope.wishState="ion-ios-heart-outline"
        console.log("remove from heart")
      }
    };
    $scope.addIntoCome = function(){
      if($scope.comeState=="ion-ios-plus-outline"){
        $scope.comeState="ion-ios-plus";
        console.log("add into come");
      }
      else{
        $scope.comeState="ion-ios-plus-outline";
        console.log("remove from come");
      }
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


  })
  .controller("SceneDetailProfileCtrl",function($scope,$state,$stateParams,$ionicHistory,$ionicActionSheet, $ionicPopup,$timeout){
    $scope.status = "";





    $scope.back= function () {
      $ionicHistory.goBack();
      //$state.go("mainmap");
    };
    $scope.basicinfo="我是基本信息我是基本信息我是基本信息";
    $scope.detailinfo="我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息";
    console.log("id"+$stateParams.IdOfScene);
    $scope.sceneId = $stateParams.IdOfScene;

    $scope.starState="ion-ios-star-outline";
    $scope.addIntoStar = function(){
      if($scope.starState=="ion-ios-star-outline"){
        $scope.starState="ion-ios-star";
        console.log("add Into Star");
      }
      else{
        $scope.starState="ion-ios-star-outline"
        console.log("remove from star")
      }
    }
    $scope.addIntoWishlist= function () {
      console.log("here left to back end add wishlist");

    };
    $scope.addIntoCome = function () {
      console.log("here left to back end add come");
      $state.go("sceneEvaluation",{IdOfScene:$scope.sceneId});
    }

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


    $scope.po = [116.404, 39.915];
    var map = new BMap.Map("evaluationmap");
    console.log("map:"+map);
    map.centerAndZoom(new BMap.Point($scope.po[0],$scope.po[1]), 11);


    $scope.activityTypes=[{
      color:"cornsilk",
      name:"运动(跑步骑行球类)"
    },{
      color:"#ef473a",
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
    $scope.giveSuggestionClick = function(){
      $scope.activityTypes=[];

      $scope.activityTypes=[{
        id:1,
        color:"1",
        name:"增加硬质空间"
      },{
        id:2,
        color:"2",
        name:"增加绿色空间"

      },{
        id:3,
        color:"3",
        name:"改善到达公共交通"
      },{
        id:4,
        color:"4",
        name:"改进园内步行系统"
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
    $scope.po = [116.404, 39.915];
    var map = new BMap.Map("goevaluatemap");
    console.log("map:"+map);
    map.centerAndZoom(new BMap.Point($scope.po[0],$scope.po[1]), 11);


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
    $scope.giveSuggestionClick = function(){
      $scope.activityTypes=[];

      $scope.activityTypes=[{
        id:1,
        color:"1",
        name:"增加硬质空间"
      },{
        id:2,
        color:"2",
        name:"增加绿色空间"

      },{
        id:3,
        color:"3",
        name:"改善到达公共交通"
      },{
        id:4,
        color:"4",
        name:"改进园内步行系统"
      }];
    };


  });

