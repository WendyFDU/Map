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
    var length = response.length;
    $scope.itemList = new Array(length);
    for(var i = 0;i<length;i++){
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
    $scope.itemList = JsonSort($scope.itemList,sortT);

    console.log("scene response:"+response[0].sceneName);
  })
    .error(function (error) {
      console.log(error);
    })

  $scope.backeToMap = function () {
    $ionicHistory.goBack();
    };
  $scope.jumpToSceneDetail = function (IdOfScene) {
    console.log("id before jump"+IdOfScene);
    $scope.popover.hide();

    $state.go("sceneDetail",{IdOfScene:IdOfScene});


  };
  $scope.clickReco = function($event){
    //if($scope.allItemList==null){
    //
    //}
    $scope.allItemList = new Array();
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
      console.log(JSON.stringify(response));
      for(var i = 0;i<response.length;i++){
        $scope.allItemList[i] = {
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
    })
      .error(function (error) {
        console.log(error);
      })
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
      console.log(JSON.stringify(response));

      for(var i = 0;i<response.length;i++){
        $scope.allItemList.push({
            id:response[i].sceneId,
            name:response[i].sceneName,
            score:response[i].sceneScore,
            star:response[i].sceneFavor,
            come:response[i].sceneVisited,
            wish:response[i].sceneWish,
            show:response[i].sceneScore,
            sortType :"score"
          }

        );
      }
      console.log("all:"+$scope.allItemList);

      //console.log(searchSceneName);
      var searchSceneName="";
      $scope.title = "推荐结果";
      //$scope.allItemList = JsonSort($scope.allItemList,"score");

      $scope.popover.show($event);

      console.log("120id:"+$scope.allItemList);
      $scope.recoArray = new Array();
      for(var i = 0;i<3;i++){
        console.log("reco"+$scope.allItemList[i]);
        $scope.recoArray[i]= {
          "id":$scope.allItemList[i].id,
          "name":$scope.allItemList[i].name,
        }
      }
      $scope.allItemList = $scope.recoArray;
      $scope.popover.show($event);
    })
      .error(function (error) {
        console.log(error);
      })



  };
  $scope.searchScene = function(searchSceneName,$event){
    $scope.title = "搜索结果";
    $scope.allItemList = new Array();
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

      for(var i = 0;i<response.length;i++){
        $scope.allItemList[i] = {
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

      /*----------------------搜索历史-----------------------------*/
      //console.log($(".sceneSearchId")[0].html());
      //$scope.$watch('sceneSearchId', function () {
        //console.log($scope.sceneSearchId);
      //});
      // $scope.$watch('searchResultGetId', function(newValue, oldValue) {
      //   // console.log(newValue+ '===' +oldValue);
      //   console.log($scope.searchResultGetId);
      // });
      // var searchedId = $('.search-result-getId').html();
      // console.log(searchedId);
      // var flag = 0; // 0：不重复
      // for (var k=0; k<searchHistoryNumI; k++) {
      //   if (searchHistoryListId[k] == response[i].sceneId) {
      //     flag = 1;
      //   }
      // }
      // if (flag == 0) {
      //   if (searchHistoryNumI < 10) {
      //     searchHistoryListId[searchHistoryNumI] = response[i].sceneId;
      //     searchHistoryNumI++;
      //   } else {
      //     for (j=0; j<searchHistoryNum; j++) {
      //       searchHistoryListId[j] = searchHistoryListId[j+1];
      //     }
      //     searchHistoryListId[searchHistoryNum-1] = response[i].sceneId;
      //   }
      // }
      //
      // console.log(searchHistoryListId);

      /*--------------------------------------------------------------------*/
    })
      .error(function (error) {
        console.log(error);
      })
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
      for(var i = 0;i<response.length;i++){
        $scope.allItemList.push({
            id:response[i].sceneId,
            name:response[i].sceneName,
            score:response[i].sceneScore,
            star:response[i].sceneFavor,
            come:response[i].sceneVisited,
            wish:response[i].sceneWish,
            show:response[i].sceneScore,
            sortType :"score"
          }

        );
      }
    })
      .error(function (error) {
        console.log(error);
      })

    console.log(searchSceneName);
    //console.log("name:"+$scope.allItemList[0].name);

    $scope.popover.show($event);

    //$scope.openPopover($event);


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
      if(key=="score"){
        json[j]["sortType"] = "评分";
      }
      if(key=="star"){
        json[j]["sortType"] = "收藏";

      }
      if(key=="wish"){
        json[j]["sortType"] = "心愿";

      }
      if(key=="come"){
        json[j]["sortType"] = "足迹";

      }
    }

    return json;

  }





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
      if(key=="score"){
        json[j]["sortType"] = "评分";
      }
      if(key=="star"){
        json[j]["sortType"] = "收藏";

      }
      if(key=="wish"){
        json[j]["sortType"] = "心愿";

      }
      if(key=="come"){
        json[j]["sortType"] = "足迹";

      }


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
        var length = response.length;
        //$scope.itemList = new Array(length);
        for(var i = 0;i<length;i++){
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
        console.log("length:"+length+" itemlist:"+$scope.itemList.length);
        if(length<$scope.itemList.length){
          $scope.itemList.splice(length,$scope.itemList.length-length);
          //
          //for(var i=length;i<$scope.itemList.length;i++){
          //}

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
        var length = response.length;
        //$scope.itemList = new Array(length);
        for(var i = 0;i<length;i++){
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

  .controller("SceneDetailCtrl",function($rootScope,$scope,$state,$stateParams,$ionicHistory,$ionicActionSheet,$ionicPopover,$http,dialogsManager,$timeout){
    $scope.sceneId = $stateParams.IdOfScene;
    console.log("detail scene id:"+$scope.sceneId);


    var map;
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
      $scope.po = [response.scene.sceneX,response.scene.sceneY];
      //$scope.po = [116.404, 39.915];
      $scope.score = response.scene.sceneScore;
      $scope.scoreRange=[response.scene.sceneScore1,response.scene.sceneScore2,response.scene.sceneScore3,response.scene.sceneScore4,response.scene.sceneScore5];
      $scope.sceneComment = response.commentlist;
      $scope.sceneIntro = response.scene.sceneIntro;
      var score = $scope.score;
      if(0<=score&&score<=1){
        $scope.starNum = 1;
      }
      else if(1<score&&score<=2){
        $scope.starNum = 2;
      }
      else if(2<score&&score<=3){
        $scope.starNum = 3;
      }
      else if(3<score&&score<=4){
        $scope.starNum = 4;
      }
      else if(4<score&&score<=5){
        $scope.starNum = 5;
      }
      $scope.starArray = $scope.range($scope.starNum);
      //console.log(" $scope.starNum:"+ $scope.starNum+ " score:"+score);
      $scope.starOutlineArray = $scope.range(5-$scope.starNum);

      map = new BMap.Map("detailmap");
      console.log("map:"+map+" "+$scope.po[0]+","+$scope.po[1]);
      var point = new BMap.Point($scope.po[0],$scope.po[1]);
      map.centerAndZoom(point, 15);
      console.log("map2:"+map+" "+$scope.po[0]+","+$scope.po[1]);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
      var circle = new BMap.Circle(point,500,{strokeStyle:"dashed",strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
      map.addOverlay(circle);
      console.log("map3:"+circle+" "+$scope.po[0]+","+$scope.po[1]);


    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      })

    $scope.range = function(n) {
      return new Array(n);
    };



    $scope.back= function () {
      $ionicHistory.goBack();

    };
    $scope.showMenuItemList = function(){
      $state.go('itemList');
    };
    $scope.contract = false;
    $scope.contractInfo = function(){
      if($scope.contract==true){
        $scope.contract = false;
      }else{
        $scope.contract = true;
      }
    }
    $scope.showDetailProfile= function () {

      //$state.go("sceneDetailProfile",{IdOfScene:$scope.sceneId});
      $state.go('sceneDetailProfile',{args:{IdOfScene:$scope.sceneId,NameOfScene:$scope.sceneName,sceneX:$scope.po[0],sceneY:$scope.po[1]}});

    };
    $scope.evaluation = function(){
      console.log("go to evaluation:"+$scope.sceneId);
      //$state.go("sceneEvaluation",{IdOfScene:$scope.sceneId});
      console.log("jump to evauate:"+$scope.sceneName);
      $state.go('sceneEvaluation',{args:{IdOfScene:$scope.sceneId,NameOfScene:$scope.sceneName,sceneX:$scope.po[0],sceneY:$scope.po[1]}});
    };


    $scope.goScene=function(){
      //left to yingzhou~~~
      var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
        '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
        '地址：北京市海淀区上地十街10号<br/>电话：(010)59928888<br/>简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。' +
        '</div>';
      //var searchInfoWindow = new BMapLib.SearchInfoWindow(map, "信息框1内容", {
      //  title: "信息框1", //标题
      //  panel : "panel", //检索结果面板
      //  enableAutoPan : true, //自动平移
      //  searchTypes :[
      //    BMAPLIB_TAB_FROM_HERE, //从这里出发
      //    BMAPLIB_TAB_SEARCH   //周边检索
      //  ]
      //});
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
      var poi = new BMap.Point($scope.po[0],$scope.po[1]);
      var marker = new BMap.Marker(poi); // 创建marker对象
      marker.enableDragging(); // marker可拖拽
      searchInfoWindow.open(marker);
      //marker.addEventListener("click", function(e){
      //  searchInfoWindow.open(marker);
      //})
      map.addOverlay(marker);
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
        remove("favor");

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
        remove("wish");
      }
    };
    $scope.addIntoCome = function(){
      if($scope.comeState=="ion-ios-plus-outline"){
        $scope.comeState="ion-ios-plus";
        console.log("add into come");
        add("visit");
      }
      else{
        $scope.comeState="ion-ios-plus-outline";
        console.log("remove from come");
        remove("visit");


      }
    };



    //$scope.onFileSelect = function($files) {    //$files: an array of files selected, each file has name, size, and type.
    //  for (var i = 0; i < $files.length; i++) {
    //    var file = $files[i];
    //    $scope.upload = $upload.upload({
    //      url: 'server/upload/url', //upload.php script, node.js route, or servlet url
    //      //method: 'POST' or 'PUT',
    //      //headers: {'header-key': 'header-value'},
    //      //withCredentials: true,
    //      data: {myObj: $scope.myModelObj},
    //      file: file, // or list of files ($files) for html5 only
    //      //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
    //      // customize file formData name ('Content-Disposition'), server side file variable name.
    //      //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
    //      // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
    //      //formDataAppender: function(formData, key, val){}
    //    }).
    //      progress(function(evt) {
    //        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
    //    }).success(function(data, status, headers, config) {
    //      // file is uploaded successfully
    //      console.log(data);
    //    })
    //      .error(function (error) {
    //        console.log(error);
    //      })
    //    //.then(success, error, progress);
    //    // access or attach event listeners to the underlying XMLHttpRequest.
    //    //.xhr(function(xhr){xhr.upload.addEventListener(...)})
    //  }    /* alternative way of uploading, send the file binary with the file's content-type.       Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.        It could also be used to monitor the progress of a normal http post/put request with large data*/
    //  // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
    //};


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
      if(commentInput==undefined){
        commentInput = "";
      }
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/comment/newone",
        params: {"userid":$rootScope.userId,"sceneid":$scope.sceneId,"score":$scope.rating.rate,"content":commentInput,"commenttype":1},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {
        $scope.popover.hide();
        dialogsManager.showMessage("添加评论成功");


      })
        .error(function (error) {
          console.log(error);
        })
    }




    function add(type){
      console.log(type+"usr 3"+" scene 4");
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/"+type+"/new",
        params: {"userid":$rootScope.userId,"sceneid":$scope.sceneId},
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
        var messagee="";
        if(type=="visit"){
          message = "已加入足迹";
        }
        if(type=="wish"){
          message="已加入心愿单";
        }
        if(type=="favor"){
          message="已加入收藏";
        }
        dialogsManager.showMessage(message);

      })
        .error(function (error) {
          console.log(error);
        })
    }
    function remove(type){
      $http({
        method: 'DELETE',
        url: "http://localhost:8080/server/"+type+"/deleting",
        params: {"userid":$rootScope.userId,"sceneid":$scope.sceneId},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {
        var messagee="";
        if(type=="visit"){
          message = "已取消足迹";
        }
        if(type=="wish"){
          message="已从心愿单中移除";
        }
        if(type=="favor"){
          message="已取消收藏";
        }
        dialogsManager.showMessage(message);
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






  .controller("SceneDetailProfileCtrl",function($rootScope,$scope,$state,$stateParams,$ionicHistory,$ionicActionSheet,$http,dialogsManager,$ionicPopover){
    $scope.status = "";
    $scope.sceneId = $stateParams.args.IdOfScene;
    var pox = $stateParams.args.sceneX;
    var poy= $stateParams.args.sceneY;

    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid":$stateParams.args.IdOfScene},
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
      $scope.picUrl = response.picture.picUrl;

    })
      .error(function (error) {
        console.log(error);
        //$state.reload('login');
      })




    $scope.back= function () {
      $ionicHistory.goBack();
      //$state.go("mainmap");
    };
    $scope.showMenuItemList = function(){
      $state.go('itemList');
    };
    $scope.allPic = function(){
      $state.go('allPic',{args:{IdOfScene:$scope.sceneId,NameOfScene:$scope.sceneName}});
    }

    $scope.starState="ion-ios-star-outline";
    $scope.addIntoStar = function(){
      if($scope.starState=="ion-ios-star-outline"){
        $scope.starState="ion-ios-star";
        console.log("add Into Star");
        $http({
          method: 'POST',
          url: "http://localhost:8080/server/favor/new",
          params: {"userid":$rootScope.userId,"sceneid":$scope.sceneId},
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Max-Age' : '100'
          }
        }).success(function (response) {
          dialogsManager.showMessage("添加到收藏成功");

        })
          .error(function (error) {
            console.log(error);
          })
      }
      else{
        $http({
          method: 'DELETE',
          url: "http://localhost:8080/server/favor/deleting",
          params: {"userid":$rootScope.userId,"sceneid":$scope.sceneId},
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Max-Age' : '100'
          }
        }).success(function (response) {
          dialogsManager.showMessage("已取消收藏");
          $scope.starState="ion-ios-star-outline"

        })
          .error(function (error) {
            console.log(error);
          })
        console.log("remove from star")
      }
    }
    $scope.addIntoWishlist= function () {
      console.log("add wishlist");
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/wish/new",
        params: {"userid":$rootScope.userId,"sceneid":$scope.sceneId},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {
        dialogsManager.showMessage("添加到心愿单成功");
      })
        .error(function (error) {
          console.log(error);
        })

    };
    $scope.addIntoCome = function () {
      console.log("add come");
      //$state.go("sceneEvaluation",{IdOfScene:$scope.sceneId});
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/visit/new",
        params: {"userid":$rootScope.userId,"sceneid":$scope.sceneId},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {
        $state.go('sceneEvaluation',{args:{IdOfScene:$scope.sceneId,sceneX:pox,sceneY:poy}});
      })
        .error(function (error) {
          console.log(error);
        })


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

    $scope.popover = $ionicPopover.fromTemplateUrl('bug-popover.html', {
      scope: $scope
    });

    $scope.clickBug = function($event){
      $scope.popover.show($event);

    }
    $scope.submitBug = function(bugContent){
      dialogsManager.showMessage("报错提交成功");
      $scope.popover.hide();
    }

    // .fromTemplateUrl() 方法
    $ionicPopover.fromTemplateUrl('bug-popover.html', {
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

  })
  .controller("AllPicCtrl",function($scope,$stateParams,$http,$state,$ionicHistory){
    $scope.back= function () {
      $ionicHistory.goBack();
      //$state.go("mainmap");
    };
    $scope.showMenuItemList = function(){
      $state.go('itemList');
    };
    $scope.sceneId = $stateParams.args.IdOfScene;
    $scope.sceneName = $stateParams.args.NameOfScene;
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/picture",
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
      console.log(JSON.stringify(response));
      var len =response.length;
      $scope.pics = new Array(len);
      for(var i = 0;i<len;i++){
        $scope.pics[i] = response[i].picUrl;
      }

    })
      .error(function (error) {
        console.log(error);
      })



  })
  .controller("SceneEvaluationCtrl",function($scope,$state,$stateParams,$ionicHistory,$http){
    $scope.back= function () {
      $ionicHistory.goBack();
      //$state.go("mainmap");
    };
    $scope.showMenuItemList = function(){
      $state.go('itemList');
    };
    $scope.sceneId = $stateParams.args.IdOfScene;
    $scope.sceneName = $stateParams.args.NameOfScene;


    var pox = $stateParams.args.sceneX;
    var poy = $stateParams.args.sceneY;
    console.log("poxy:"+pox+" "+poy);

    var map = new BMap.Map("evaluationmap");
    console.log("map:"+map);
    var point = new BMap.Point(pox,poy);
    map.centerAndZoom(point, 15);

    var marker = new BMap.Marker(point);
    //var myIcon = new BMap.Icon("img/marker1.jpg", new BMap.Size(32,32));
    //var tag = new BMap.Marker(new BMap.Point(pox-0.001,poy-0.001),{icon:myIcon});
    marker.disableDragging();
    //tag.setLabel(new BMap.Label("10",{offset:new BMap.Size(20,-10)}));
    //map.addOverlay(tag);


    map.addOverlay(marker);
    var circle = new BMap.Circle(point,500,{strokeStyle:"dashed",strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
    map.addOverlay(circle);



    $http({
      method: 'POST',
      url: "http://localhost:8080/server/tag/type",
      params: {"tagtype":1,"sceneid":$scope.sceneId},
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
        'Access-Control-Allow-Max-Age' : '100'
      }
    }).success(function (response) {
      var length = response.length;
      //$scope.showTag = new Array[length];
      for(var i = 0;i<length;i++){
        var randomx = Math.random()*4;
        var randomy = Math.random()*4;
        var r2 = Math.random();
        if(r2<0.5){
          randomx = randomx*-1;
        }
        r2 = Math.random();
        if(r2<0.5){
          randomy = randomy*-1;
        }

        var myIcon = new BMap.Icon("img/tag"+response[i].tagbtId+".png", new BMap.Size(20,20));
        var tag = new BMap.Marker(new BMap.Point(pox+randomx*0.001,poy+randomy*0.001),{icon:myIcon});
        tag.disableDragging();
        tag.setLabel(new BMap.Label(response[i].tagTimes,{offset:new BMap.Size(20,-10)}));
        map.addOverlay(tag);
        map.addOverlay(marker);
      }
      console.log(JSON.stringify(response));


    })
      .error(function (error) {
        console.log(error);
      })







    $scope.activityTypes=[{
      id:1,
      icon:"img/tag1.png",
      name:"运动(跑步骑行球类)"
    },{
      id:2,
      icon:"img/tag2.png",
      name:"健身"

    },{
      id:3,
      icon:"img/tag3.png",
      name:"交往活动"
    },{
      id:4,
      icon:"img/tag4.png",
      name:"观赏"
    }];
    $scope.placeTypeClick = function(){
      $scope.activityTypes=[{
        id:5,
        icon:"img/tag5.png",
        name:"亲近自然"
      },{
        id:6,
        icon:"img/tag6.png",
        name:"锻炼健身"

      },{
        id:7,
        icon:"img/tag7.png",
        name:"聚会交友哦"
      },{
        id:8,
        icon:"img/tag8.png",
        name:"美的体验"
      },{
        id:9,
        icon:"img/tag9.png",
        name:"观察学习"
      }];
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/tag/type",
        params: {"tagtype":2,"sceneid":$scope.sceneId},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {
        var length = response.length;
        map.clearOverlays();
        map.addOverlay(marker);
        map.addOverlay(circle);

        //$scope.showTag = new Array[length];
        for(var i = 0;i<length;i++){
          var randomx = Math.random()*4;
          var randomy = Math.random()*4;
          var r2 = Math.random();
          if(r2<0.5){
            randomx = randomx*-1;
          }
          r2 = Math.random();
          if(r2<0.5){
            randomy = randomy*-1;
          }

          var myIcon = new BMap.Icon("img/tag"+response[i].tagbtId+".png", new BMap.Size(20,20));
          var tag = new BMap.Marker(new BMap.Point(pox+randomx*0.001,poy+randomy*0.001),{icon:myIcon});
          tag.disableDragging();
          tag.setLabel(new BMap.Label(response[i].tagTimes,{offset:new BMap.Size(20,-10)}));
          map.addOverlay(tag);
          map.addOverlay(marker);
        }
        console.log(JSON.stringify(response));


      })
        .error(function (error) {
          console.log(error);
        })
    };
    $scope.activityTypeClick = function(){
      $scope.activityTypes=[{
        id:1,
        icon:"img/tag1.png",
        name:"运动(跑步骑行球类)"
      },{
        id:2,
        icon:"img/tag2.png",
        name:"健身"

      },{
        id:3,
        icon:"img/tag3.png",
        name:"交往活动"
      },{
        id:4,
        icon:"img/tag4.png",
        name:"观赏"
      }];
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/tag/type",
        params: {"tagtype":1,"sceneid":$scope.sceneId},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {
        map.clearOverlays();
        map.addOverlay(marker);
        map.addOverlay(circle);

        var length = response.length;
        //$scope.showTag = new Array[length];
        for(var i = 0;i<length;i++){
          var randomx = Math.random()*4;
          var randomy = Math.random()*4;
          var r2 = Math.random();
          if(r2<0.5){
            randomx = randomx*-1;
          }
          r2 = Math.random();
          if(r2<0.5){
            randomy = randomy*-1;
          }

          var myIcon = new BMap.Icon("img/tag"+response[i].tagbtId+".png", new BMap.Size(20,20));
          var tag = new BMap.Marker(new BMap.Point(pox+randomx*0.001,poy+randomy*0.001),{icon:myIcon});
          tag.disableDragging();
          tag.setLabel(new BMap.Label(response[i].tagTimes,{offset:new BMap.Size(20,-10)}));
          map.addOverlay(tag);
          map.addOverlay(marker);
        }
        console.log(JSON.stringify(response));


      })
        .error(function (error) {
          console.log(error);
        })
    };
    $scope.giveSuggestionClick = function(){
      $scope.activityTypes=[];

      $scope.activityTypes=[{
        id:10,
        icon:"img/tag10.png",
        name:"增加硬质空间"
      },{
        id:11,
        icon:"img/tag11.png",
        name:"增加绿色空间"

      },{
        id:12,
        icon:"img/tag12.png",
        name:"改善到达公共交通"
      },{
        id:13,
        icon:"img/tag13.png",
        name:"改进园内步行系统"
      }];
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/tag/type",
        params: {"tagtype":3,"sceneid":$scope.sceneId},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {
        map.clearOverlays();
        map.addOverlay(marker);
        map.addOverlay(circle);

        var length = response.length;
        //$scope.showTag = new Array[length];
        for(var i = 0;i<length;i++){
          var randomx = Math.random()*4;
          var randomy = Math.random()*4;
          var r2 = Math.random();
          if(r2<0.5){
            randomx = randomx*-1;
          }
          r2 = Math.random();
          if(r2<0.5){
            randomy = randomy*-1;
          }

          var myIcon = new BMap.Icon("img/tag"+response[i].tagbtId+".png", new BMap.Size(20,20));
          var tag = new BMap.Marker(new BMap.Point(pox+randomx*0.001,poy+randomy*0.001),{icon:myIcon});
          tag.disableDragging();
          tag.setLabel(new BMap.Label(response[i].tagTimes,{offset:new BMap.Size(20,-10)}));
          map.addOverlay(tag);
          map.addOverlay(marker);
        }
        console.log(JSON.stringify(response));


      })
        .error(function (error) {
          console.log(error);
        })
    };
    $scope.imgicon = "img/tag1.png";
    $scope.goToEvaluate = function(){
      $state.go('sceneGoEvaluate',{args:{IdOfScene:$scope.sceneId,NameOfScene:$scope.sceneName,sceneX:pox,sceneY:poy}});
    }
    $scope.goToQuestionnaire = function(){
      $state.go("questionnaire");
    }


  })

  .controller("SceneGoEvaluateCtrl",function($scope,$state,$stateParams,$ionicHistory,$http,dialogsManager,$ionicPopover) {
    $scope.back = function () {
      $ionicHistory.goBack();
    };
    $scope.showMenuItemList = function(){
      $state.go('itemList');
    };
    $scope.sceneId = $stateParams.args.IdOfScene;
    console.log("876 id:"+$scope.sceneId);
    var pox= $stateParams.args.sceneX;
    var poy= $stateParams.args.sceneY;
    $scope.sceneName = $stateParams.args.NameOfScene;
    //$scope.po = [116.404, 39.915];
    var map = new BMap.Map("goevaluatemap");
    console.log("map:"+map);
    var point = new BMap.Point(pox,poy);
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    var circle = new BMap.Circle(point,500,{strokeStyle:"dashed",strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
    map.addOverlay(circle);




    $scope.dragAType = function(typeId){
      console.log("typeId:"+typeId);

      //console.log("typeId:"+typeId)
    };
    $scope.releaseAType = function(tagId,tagName,tagType){
      console.log("releasetypeId:"+tagId);
      //var marker = new BMap.Marker(point,);
      var imgPath = "img/tag"+tagId+".png";
      var myIcon = new BMap.Icon(imgPath, new BMap.Size(20,20));
      var randomx = Math.random()*4;
      var randomy = Math.random()*4;
      var r2 = Math.random();
      if(r2<0.5){
        randomx = randomx*-1;
      }
      r2 = Math.random();
      if(r2<0.5){
        randomy = randomy*-1;
      }
      var tag = new BMap.Marker(new BMap.Point(pox+0.001*randomx,poy+0.001*randomy),{icon:myIcon});
      map.addOverlay(tag);

      console.log("go evalu sceneid:"+$stateParams.args.IdOfScene);

      $http({
        method: 'POST',
        url: "http://localhost:8080/server/tag/new",
        params: {"tagtype":tagType,"tagid":tagId,"tagcontent":tagName,"sceneid":$stateParams.args.IdOfScene},
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age' : '100'
        }
      }).success(function (response) {
        dialogsManager.showMessage("添加标签成功");

      })
        .error(function (error) {
          console.log(error);
        })



      //console.log("typeId:"+typeId)
    };
    $scope.sceneId = $stateParams.IdOfScene;
    $scope.activityTypes=[{
      id:1,
      tagType:1,
      icon:"img/tag1.png",
      name:"运动(跑步骑行球类)"
    },{
      id:2,
      tagType:1,
      icon:"img/tag2.png",
      name:"健身"

    },{
      id:3,
      tagType:1,
      icon:"img/tag3.png",
      name:"交往活动"
    },{
      id:4,
      tagType:1,
      icon:"img/tag4.png",
      name:"观赏"
    }];
    $scope.placeTypeClick = function(){
      $scope.activityTypes=[{
        id:5,
        tagType:2,
        icon:"img/tag5.png",
        name:"亲近自然"
      },{
        id:6,
        tagType:2,
        icon:"img/tag6.png",
        name:"锻炼健身"

      },{
        id:7,
        tagType:2,
        icon:"img/tag7.png",
        name:"聚会交友哦"
      },{
        id:8,
        tagType:2,
        icon:"img/tag8.png",
        name:"美的体验"
      },{
        id:9,
        tagType:2,
        icon:"img/tag9.png",
        name:"观察学习"
      }];

    };
    $scope.activityTypeClick = function(){
      $scope.activityTypes=[];

      $scope.activityTypes=[{
        id:1,
        tagType:1,
        icon:"img/tag1.png",
        name:"运动(跑步骑行球类)"
      },{
        id:2,
        tagType:1,
        icon:"img/tag2.png",
        name:"健身"

      },{
        id:3,
        tagType:1,
        icon:"img/tag3.png",
        name:"交往活动"
      },{
        id:4,
        tagType:1,
        icon:"img/tag4.png",
        name:"观赏"
      }];
    };
    $scope.giveSuggestionClick = function(){
      $scope.activityTypes=[];

      $scope.activityTypes=[{
        id:10,
        tagType:3,
        icon:"img/tag10.png",
        name:"增加硬质空间"
      },{
        id:11,
        tagType:3,
        icon:"img/tag11.png",
        name:"增加绿色"

      },{
        id:12,
        tagType:3,
        icon:"img/tag12.png",
        name:"改善交通"
      },{
        id:13,
        tagType:3,
        icon:"img/tag13.png",
        name:"改进步行系统"
      }];
      $scope.infraSuggestionInput=[{
        id:14,
        tagType:3,
        icon:"img/tag14.png",
        name:"增加设施"
      }];
      $scope.otherSuggestionInput=[{
        id:15,
        tagType:3,
        icon:"img/tag15.png",
        name:"其它"
      }];



    };
    $scope.infraList=["公共停车场","洗手间","母婴室","吸烟处"];
    $scope.showInfra = function($event){
      console.log("ssssss");
      $scope.popover.show($event);
    }
    $scope.addIntoInput = function(infra){
      console.log("infra:"+infra);
      $scope.popover.hide();
      $scope.infraSelect = infra;
    }
    $ionicPopover.fromTemplateUrl('infra-popover.html', {
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


  })
  .controller("QuestionnaireCtrl",function($scope,$state,$stateParams,$ionicHistory,dialogsManager) {
    $scope.back = function () {
      $ionicHistory.goBack();
    };
    $scope.submitQuestionnaire=function(){
      $ionicHistory.goBack();
      dialogsManager.showMessage("提交成功!");


    }

  })

