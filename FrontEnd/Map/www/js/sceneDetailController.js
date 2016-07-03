//angular.module('itemlist.controllers', ['ionic','ionic.rating'])
//.controller("SceneDetailCtrl",function($rootScope,$scope,$state,$stateParams,$ionicHistory,$ionicActionSheet,$ionicPopover,$http,dialogsManager,$timeout){
//  $scope.sceneId = $stateParams.IdOfScene;
//  console.log("detail scene id:"+$scope.sceneId);
//
//
//  var map;
//  $http({
//    method: 'POST',
//    url: "http://localhost:8080/server/scene/detail",
//    params: {"sceneid":$scope.sceneId},
//    headers: {
//      'Content-Type': 'application/json',
//      'Accept' : 'application/json',
//      'Access-Control-Allow-Origin': '*',
//      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
//      'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
//      'Access-Control-Allow-Max-Age' : '100'
//    }
//  }).success(function (response) {
//    console.log( JSON.stringify(response));
//    $scope.sceneName = response.scene.sceneName;
//    $scope.amountPeopleScore = response.scene.sceneScoreall;
//    $scope.po = [response.scene.sceneX,response.scene.sceneY];
//    //$scope.po = [116.404, 39.915];
//    $scope.score = response.scene.sceneScore;
//    $scope.scoreRange=[response.scene.sceneScore1,response.scene.sceneScore2,response.scene.sceneScore3,response.scene.sceneScore4,response.scene.sceneScore5];
//    $scope.sceneComment = response.commentlist;
//    $scope.sceneIntro = response.scene.sceneIntro;
//    var score = $scope.score;
//    if(0<=score&&score<=2){
//      $scope.starNum = 1;
//    }
//    else if(2<score&&score<=5){
//      $scope.starNum = 2;
//    }
//    else if(5<score&&score<=7){
//      $scope.starNum = 3;
//    }
//    else if(7<score&&score<=8){
//      $scope.starNum = 4;
//    }
//    else if(8<score&&score<=10){
//      $scope.starNum = 5;
//    }
//    $scope.starArray = $scope.range($scope.starNum);
//    //console.log(" $scope.starNum:"+ $scope.starNum+ " score:"+score);
//    $scope.starOutlineArray = $scope.range(5-$scope.starNum);
//
//    map = new BMap.Map("detailmap");
//    console.log("map:"+map+" "+$scope.po[0]+","+$scope.po[1]);
//    var point = new BMap.Point($scope.po[0],$scope.po[1]);
//    map.centerAndZoom(point, 15);
//    console.log("map2:"+map+" "+$scope.po[0]+","+$scope.po[1]);
//    var marker = new BMap.Marker(point);
//    map.addOverlay(marker);
//    var circle = new BMap.Circle(point,500,{strokeStyle:"dashed",strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
//    map.addOverlay(circle);
//    console.log("map3:"+circle+" "+$scope.po[0]+","+$scope.po[1]);
//
//
//  })
//    .error(function (error) {
//      console.log(error);
//      $state.reload('login');
//    })
//
//  $scope.range = function(n) {
//    return new Array(n);
//  };
//
//
//
//
//
//  $scope.back= function () {
//    $ionicHistory.goBack();
//
//  };
//  $scope.showDetailProfile= function () {
//
//    //$state.go("sceneDetailProfile",{IdOfScene:$scope.sceneId});
//    $state.go('sceneDetailProfile',{args:{IdOfScene:$scope.sceneId,NameOfScene:$scope.sceneName,sceneX:$scope.po[0],sceneY:$scope.po[1]}});
//
//  };
//  $scope.evaluation = function(){
//    console.log("go to evaluation:"+$scope.sceneId);
//    //$state.go("sceneEvaluation",{IdOfScene:$scope.sceneId});
//    console.log("jump to evauate:"+$scope.sceneName);
//    $state.go('sceneEvaluation',{args:{IdOfScene:$scope.sceneId,NameOfScene:$scope.sceneName,sceneX:$scope.po[0],sceneY:$scope.po[1]}});
//  };
//
//  $scope.goScene=function(){
//    //left to yingzhou~~~
//    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
//      '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
//      '地址：北京市海淀区上地十街10号<br/>电话：(010)59928888<br/>简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。' +
//      '</div>';
//    //var searchInfoWindow = new BMapLib.SearchInfoWindow(map, "信息框1内容", {
//    //  title: "信息框1", //标题
//    //  panel : "panel", //检索结果面板
//    //  enableAutoPan : true, //自动平移
//    //  searchTypes :[
//    //    BMAPLIB_TAB_FROM_HERE, //从这里出发
//    //    BMAPLIB_TAB_SEARCH   //周边检索
//    //  ]
//    //});
//    var searchInfoWindow = null;
//    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
//      title  : "百度大厦",      // 标题
//      width  : 290,             // 宽度
//      height : 105,              // 高度
//      panel  : "panel",         // 检索结果面板
//      enableAutoPan : true,     // 自动平移
//      searchTypes   :[
//        BMAPLIB_TAB_SEARCH,   // 周边检索
//        BMAPLIB_TAB_TO_HERE,  // 到这里去
//        BMAPLIB_TAB_FROM_HERE // 从这里出发
//      ]
//    });
//    var poi = new BMap.Point($scope.po[0],$scope.po[1]);
//    var marker = new BMap.Marker(poi); // 创建marker对象
//    marker.enableDragging(); // marker可拖拽
//    searchInfoWindow.open(marker);
//    //marker.addEventListener("click", function(e){
//    //  searchInfoWindow.open(marker);
//    //})
//    map.addOverlay(marker);
//  };
//
//  $scope.starState="ion-ios-star-outline";
//  $scope.wishState = "ion-ios-heart-outline";
//  $scope.comeState = "ion-ios-plus-outline";
//  $scope.addIntoStar = function(){
//    console.log("allscoe usrid:"+$rootScope.userId+" scene id:"+$scope.sceneId);
//    if($scope.starState=="ion-ios-star-outline"){
//      $scope.starState="ion-ios-star";
//      add("favor");
//    }
//    else{
//      $scope.starState="ion-ios-star-outline"
//      console.log("remove from star")
//    }
//
//  };
//  $scope.addIntoWish = function(){
//    if($scope.wishState=="ion-ios-heart-outline"){
//      $scope.wishState="ion-ios-heart";
//      console.log("add Into wishlist");
//      add("wish")
//    }
//    else{
//      $scope.wishState="ion-ios-heart-outline"
//      console.log("remove from heart")
//    }
//  };
//  $scope.addIntoCome = function(){
//    if($scope.comeState=="ion-ios-plus-outline"){
//      $scope.comeState="ion-ios-plus";
//      console.log("add into come");
//      add("visit");
//    }
//    else{
//      $scope.comeState="ion-ios-plus-outline";
//      console.log("remove from come");
//    }
//  };
//
//
//
//  //$scope.onFileSelect = function($files) {    //$files: an array of files selected, each file has name, size, and type.
//  //  for (var i = 0; i < $files.length; i++) {
//  //    var file = $files[i];
//  //    $scope.upload = $upload.upload({
//  //      url: 'server/upload/url', //upload.php script, node.js route, or servlet url
//  //      //method: 'POST' or 'PUT',
//  //      //headers: {'header-key': 'header-value'},
//  //      //withCredentials: true,
//  //      data: {myObj: $scope.myModelObj},
//  //      file: file, // or list of files ($files) for html5 only
//  //      //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
//  //      // customize file formData name ('Content-Disposition'), server side file variable name.
//  //      //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
//  //      // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
//  //      //formDataAppender: function(formData, key, val){}
//  //    }).
//  //      progress(function(evt) {
//  //        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
//  //    }).success(function(data, status, headers, config) {
//  //      // file is uploaded successfully
//  //      console.log(data);
//  //    })
//  //      .error(function (error) {
//  //        console.log(error);
//  //      })
//  //    //.then(success, error, progress);
//  //    // access or attach event listeners to the underlying XMLHttpRequest.
//  //    //.xhr(function(xhr){xhr.upload.addEventListener(...)})
//  //  }    /* alternative way of uploading, send the file binary with the file's content-type.       Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.        It could also be used to monitor the progress of a normal http post/put request with large data*/
//  //  // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
//  //};
//
//
//  $scope.showSharePanel = function() {
//
//// Show the action sheet
//    var hideSheet = $ionicActionSheet.show({
//      titleText: "分享到",
//      buttons: [
//        {text: "QQ"},
//        {text: "微信"},
//        {text: "微博"},
//        {text: "豆瓣"}
//      ],
//      buttonClicked: function (index) {
//        return true;
//      },
//      cancelText: "取消",
//      cancel: function () {
//        // add cancel code..
//      },
//      //destructiveText: "删除",
//      //destructiveButtonClicked: function () {
//      //}
//    });
//  }
//
//  $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
//    scope: $scope
//  });
//
//  // .fromTemplateUrl() 方法
//  $ionicPopover.fromTemplateUrl('my-popover.html', {
//    scope: $scope
//  }).then(function(popover) {
//    $scope.popover = popover;
//  });
//
//  $scope.openPopover = function($event) {
//    $scope.popover.show($event);
//  };
//  $scope.closePopover = function() {
//    $scope.popover.hide();
//  };
//  // 清除浮动框
//  $scope.$on('$destroy', function() {
//    $scope.popover.remove();
//  });
//  // 在隐藏浮动框后执行
//  $scope.$on('popover.hidden', function() {
//    // 执行代码
//  });
//  // 移除浮动框后执行
//  $scope.$on('popover.removed', function() {
//    // 执行代码
//  });
//  // set the rate and max variables
//  $scope.rating = {};
//  $scope.rating.rate = 1;
//  $scope.rating.max = 5;
//  $scope.submitScore = function(commentInput){
//    console.log("score:"+$scope.rating.rate+" comment:"+commentInput);
//    $http({
//      method: 'POST',
//      url: "http://localhost:8080/server/comment/newone",
//      params: {"userid":$rootScope.userId,"sceneid":$scope.sceneId,"score":$scope.rating.rate,"content":commentInput,"commenttype":1},
//      headers: {
//        'Content-Type': 'application/json',
//        'Accept' : 'application/json',
//        'Access-Control-Allow-Origin': '*',
//        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
//        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
//        'Access-Control-Allow-Max-Age' : '100'
//      }
//    }).success(function (response) {
//      $scope.popover.hide();
//      dialogsManager.showMessage("添加评论成功");
//
//
//    })
//      .error(function (error) {
//        console.log(error);
//      })
//  }
//
//
//
//
//  function add(type){
//    console.log(type+"usr 3"+" scene 4");
//    $http({
//      method: 'POST',
//      url: "http://localhost:8080/server/"+type+"/new",
//      params: {"userid":$rootScope.userId,"sceneid":$scope.sceneId},
//      headers: {
//        'Content-Type': 'application/json',
//        'Accept' : 'application/json',
//        'Access-Control-Allow-Origin': '*',
//        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
//        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
//        'Access-Control-Allow-Max-Age' : '100'
//      }
//    }).success(function (response) {
//      console.log("add favor response:"+response);
//    })
//      .error(function (error) {
//        console.log(error);
//      })
//  }
//
//})
////.controller('RatingDemoCtrl', function ($scope) {
////  $scope.rate = 3;
////  $scope.max = 5;
////  $scope.isReadonly = false;
////
////  $scope.hoveringOver = function(value) {
////    $scope.overStar = value;
////    $scope.percent = 100 * (value / $scope.max);
////  };
//
////$scope.ratingStates = [
////  {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
////  {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
////  {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
////  {stateOn: 'glyphicon-heart'},
////  {stateOff: 'glyphicon-off'}
////];
////})
