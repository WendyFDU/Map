
var itemListModule = angular.module('itemlist.controllers', ['ionic','ionic.rating']);
var sortT = "score";
itemListModule.controller('ItemListCtrl',function($scope,$state,$ionicHistory,$http,$ionicPopover){


  $http({
    method: 'POST',
    url: "http://localhost:8080/server/scene/list/type",
    params: {"scenetype":1},
    headers: {
      'Content-Type': 'application/json',
      'Accept' : 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
      'Access-Control-Allow-Max-Age' : '100'
    }
  }).success(function (response) {
    $scope.itemList = new Array(3);
    for(var i = 0;i<3;i++){
      $scope.itemList[i] = {
        id:response[i].sceneId,
        name:response[i].sceneName,
        score:response[i].sceneScore,
        star:response[i].sceneFavor,
        come:response[i].sceneVisited,
        wish:response[i].sceneWish,
        show:response[i].sceneScore,
        sortType :"score"
      }
    }
    console.log("scene response:"+response[0].sceneName);
  })
    .error(function (error) {
      console.log(error);
    })

  $scope.backeToMap = function () {
    $ionicHistory.goBack();
    };
  $scope.jumpToSceneDetail = function (IdOfScene,NameOfScene) {
    console.log("id before jump"+IdOfScene+" name of scene:"+NameOfScene);

    $state.go("sceneDetail",{IdOfScene:IdOfScene});

  };
  $scope.searchScene = function(searchSceneName,$event){
    console.log(searchSceneName);
    openPopover($event);

  }


  $scope.popover = $ionicPopover.fromTemplateUrl('result-popover.html', {
    scope: $scope
  });

  // .fromTemplateUrl() 方法
  $ionicPopover.fromTemplateUrl('result-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function($event,searchSceneName) {
    $scope.popover.show($event);
    console.log(searchSceneName);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  // 清除浮动框
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // 在隐藏浮动框后执行
  $scope.$on('popover.hidden', function() {
    // 执行代码
  });
  // 移除浮动框后执行
  $scope.$on('popover.removed', function() {
    // 执行代码
  });






})
.controller("TypeController",function($scope,$http){

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
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/scene/list/type",
        params: {"scenetype":1},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {

        for(var i = 0;i<3;i++){
          $scope.itemList[i] = {
            id:response[i].sceneId,
            name:response[i].sceneName,
            score:response[i].sceneScore,
            star:response[i].sceneFavor,
            come:response[i].sceneVisited,
            wish:response[i].sceneWish,
            show:response[i].sceneScore,
            sortType :"score"
          }
        }
        console.log("scene response:"+response[0].sceneName);
        console.log("111:"+" "+$scope.itemList[2].sortType+" "+sortT);
        $scope.itemList = JsonSort($scope.itemList,sortT);
      })
        .error(function (error) {
          console.log(error);
        })



    }
    if(setTab==2){
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/scene/list/type",
        params: {"scenetype":2},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {
        for(var i = 0;i<3;i++){
          $scope.itemList[i] = {
            id:response[i].sceneId,
            name:response[i].sceneName,
            score:response[i].sceneScore,
            star:response[i].sceneFavor,
            come:response[i].sceneVisited,
            wish:response[i].sceneWish,
            //show:response[i].sceneScore,
            //sortType :"score"
          }
        }
        console.log("scene response:"+response[0].sceneName);
        $scope.itemList = JsonSort($scope.itemList,sortT);
        console.log("149:"+$scope.itemList[2].name+" "+$scope.itemList[2].sortType+" "+sortT);
      })
        .error(function (error) {
          console.log(error);
        })


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

  .controller("SceneDetailCtrl",function($rootScope,$scope,$state,$stateParams,$ionicHistory,$ionicActionSheet,$ionicPopover,$http,$timeout){
    $scope.sceneId = $stateParams.IdOfScene;
    console.log("detail scene id:"+$scope.sceneId);


    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid":$scope.sceneId},
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
        'Access-Control-Allow-Max-Age' : '100'
      }
    }).success(function (response) {
      console.log( JSON.stringify(response));
      $scope.sceneName = response.scene.sceneName;
      $scope.amountPeopleScore = response.scene.sceneScoreall;
      //$scope.po = [response.scene.sceneX,response.scene.sceneY];
      $scope.po = [116.404, 39.915];
      $scope.score = response.scene.sceneScore;
      $scope.scoreRange=[response.scene.sceneScore1,response.scene.sceneScore2,response.scene.sceneScore3,response.scene.sceneScore4,response.scene.sceneScore5];
      $scope.sceneComment = response.commentlist;
      $scope.sceneIntro = response.scene.sceneIntro;
      var score = $scope.score;
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
      $scope.starArray = $scope.range($scope.starNum);
      //console.log(" $scope.starNum:"+ $scope.starNum+ " score:"+score);
      $scope.starOutlineArray = $scope.range(5-$scope.starNum);

      var map = new BMap.Map("detailmap");
      console.log("map:"+map);
      map.centerAndZoom(new BMap.Point($scope.po[0],$scope.po[1]), 11);

    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      })

    $scope.range = function(n) {
      return new Array(n);
    };


    //var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
    //  '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
    //  '地址：北京市海淀区上地十街10号<br/>电话：(010)59928888<br/>简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。' +
    //  '</div>';
    //var searchInfoWindow = null;
    //searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    //  title  : "百度大厦",      // 标题
    //  width  : 290,             // 宽度
    //  height : 105,              // 高度
    //  panel  : "panel",         // 检索结果面板
    //  enableAutoPan : true,     // 自动平移
    //  searchTypes   :[
    //    BMAPLIB_TAB_SEARCH,   // 周边检索
    //    BMAPLIB_TAB_TO_HERE,  // 到这里去
    //    BMAPLIB_TAB_FROM_HERE // 从这里出发
    //  ]
    //});
    //var poi = new BMap.Point(116.307852,40.058031);
    //var marker = new BMap.Marker(poi); // 创建marker对象
    //marker.enableDragging(); // marker可拖拽
    //marker.addEventListener("click", function(e){
    //  searchInfoWindow.open(marker);
    //})
    //map.addOverlay(marker);


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
      console.log("allscoe usrid:"+$rootScope.userId+" scene id:"+$scope.sceneId);
      if($scope.starState=="ion-ios-star-outline"){
        $scope.starState="ion-ios-star";
        add("favor");
      }
      else{
        $scope.starState="ion-ios-star-outline"
        console.log("remove from star")
      }

    };
    $scope.addIntoWish = function(){
      if($scope.wishState=="ion-ios-heart-outline"){
        $scope.wishState="ion-ios-heart";
        console.log("add Into wishlist");
        add("wish")
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
        add("visited");
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

    $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
      scope: $scope
    });

    // .fromTemplateUrl() 方法
    $ionicPopover.fromTemplateUrl('my-popover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    // 清除浮动框
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    // 在隐藏浮动框后执行
    $scope.$on('popover.hidden', function() {
      // 执行代码
    });
    // 移除浮动框后执行
    $scope.$on('popover.removed', function() {
      // 执行代码
    });
    // set the rate and max variables
    $scope.rating = {};
    $scope.rating.rate = 1;
    $scope.rating.max = 5;
    $scope.submitScore = function(commentInput){
      console.log("score:"+$scope.rating.rate+" comment:"+commentInput);
    }




    function add(type){
      console.log(type+"usr 3"+" scene 4");
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/user/"+type,
        params: {"userid":3,"sceneid":4},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {
        console.log("add favor response:"+response);
      })
        .error(function (error) {
          console.log(error);
        })
    }

  })
  //.controller('RatingDemoCtrl', function ($scope) {
  //  $scope.rate = 3;
  //  $scope.max = 5;
  //  $scope.isReadonly = false;
  //
  //  $scope.hoveringOver = function(value) {
  //    $scope.overStar = value;
  //    $scope.percent = 100 * (value / $scope.max);
  //  };

    //$scope.ratingStates = [
    //  {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    //  {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    //  {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    //  {stateOn: 'glyphicon-heart'},
    //  {stateOff: 'glyphicon-off'}
    //];
  //})
  .controller("SceneDetailProfileCtrl",function($scope,$state,$stateParams,$ionicHistory,$ionicActionSheet,$http, $ionicPopup,$timeout){
    $scope.status = "";
    $scope.sceneId = $stateParams.IdOfScene;

    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid":$stateParams.IdOfScene},
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
        'Access-Control-Allow-Max-Age' : '100'
      }
    }).success(function (response) {
      console.log( JSON.stringify(response));
      $scope.sceneName = response.scene.sceneName;
      $scope.basicinfo = response.scene.sceneIntro;
      $scope.detailinfo =  response.scene.sceneDetail;
      $scope.pictures = response.picture;

    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      })



    $scope.back= function () {
      $ionicHistory.goBack();
      //$state.go("mainmap");
    };

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
    $scope.goToQuestionnaire = function(){
      $state.go("questionnaire");
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


  })
  .controller("QuestionnaireCtrl",function($scope,$state,$stateParams,$ionicHistory) {
    $scope.back = function () {
      $ionicHistory.goBack();
    };

  })

