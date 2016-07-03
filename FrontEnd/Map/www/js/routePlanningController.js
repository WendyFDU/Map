var routePlanningModule = angular.module('routePlanning.controllers', ['ionic']);

routePlanningModule.controller('RoutePlanningCtrl', function ($scope, $state, $ionicHistory,$http) {

  $scope.po = [121.55862, 31.237994];
  var map = new BMap.Map("route-planning-map");
  map.centerAndZoom(new BMap.Point($scope.po[0], $scope.po[1]), 11);
  var allmarker=new Array(3);
  for (var i=0;i< 3;i++) {
    allmarker[i] = new Array();
  }
  var ifNear=new Array(3);
  for (var i=0;i< 3;i++) {
    ifNear[i] = new Array();
  }

  /*for(var i=0;i<2;i++){
   var num=0;
   for(var j=0;j<ifNear[i].length;j++){
   if(ifNear[i][j]){
   alongItemMakerList[i][num]=allmarker[i][j].id;
   num++;
   alongItemMakerList[i]=num;
   }
   }
   }*/

  // 沿途的景观
  var sceneTypeNumI = 0; // 景观类型下标
  var alongSceneNumI = 0; // 附近景观下标
  var alongItemMakerList = new Array(sceneTypeNum+1); //附近景观列表，每种类型一个数组
  for (var i=1;i<= sceneTypeNum;i++) {
    alongItemMakerList[i] = new Array();
  }
  var alongItemListLength = new Array(sceneTypeNum+1); // 附近景观个数

  $http({
    method: 'POST',
    url: "http://localhost:8080/server/scene/list/type",
    params: {"scenetype": 1},
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
      'Access-Control-Allow-Max-Age': '100'
    }
  }).success(function (response) {
    console.log(response);
    sceneTypeNumI = 1; // 景观类型下标
    console.log(sceneNum[sceneTypeNumI]); //sceneNum[sceneTypeNumI]为该类型的景观个数
    alongSceneNumI = 0;
    for (var i = 0; i < sceneNum[sceneTypeNumI]; i++) { // 遍历每个景观
      /*if (1) { // 检查是否为沿途
       alongItemMakerList[sceneTypeNumI][alongSceneNumI] = {
       id: response[i].sceneId,
       name: response[i].sceneName,
       score: response[i].sceneScore,
       star: response[i].sceneFavor,
       come: response[i].sceneVisited,
       wish: response[i].sceneWish,
       show: response[i].sceneScore,
       sortType: "评分"
       }
       alongSceneNumI++;
       console.log("scene response:" + response[i].sceneName);
       }
       alongItemListLength[sceneTypeNumI] = alongSceneNumI;*/
      allmarker[sceneTypeNumI][i]={
        id: response[i].sceneId,
        lng:response[i].sceneX,
        lat:response[i].sceneY
      }
    }
    alongItemListLength[1]=sceneNum[sceneTypeNumI];
  }).error(function (error) {
    console.log(error);
  });
  $http({
    method: 'POST',
    url: "http://localhost:8080/server/scene/list/type",
    params: {"scenetype": 2},
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
      'Access-Control-Allow-Max-Age': '100'
    }
  }).success(function (response) {
    console.log(response);
    sceneTypeNumI = 2; // 景观类型下标
    console.log(sceneNum[sceneTypeNumI]); //sceneNum[sceneTypeNumI]为该类型的景观个数
    alongSceneNumI = 0;
    for (var i = 0; i < sceneNum[sceneTypeNumI]; i++) { // 遍历每个景观
      /*if (1) { // 检查是否为沿途
       alongItemMakerList[sceneTypeNumI][alongSceneNumI] = {
       id: response[i].sceneId,
       name: response[i].sceneName,
       score: response[i].sceneScore,
       star: response[i].sceneFavor,
       come: response[i].sceneVisited,
       wish: response[i].sceneWish,
       show: response[i].sceneScore,
       sortType: "评分"
       }
       alongSceneNumI++;
       console.log("scene response:" + response[i].sceneName);
       }
       alongItemListLength[sceneTypeNumI] = alongSceneNumI;*/
      allmarker[sceneTypeNumI][i]={
        id: response[i].sceneId,
        lng:response[i].sceneX,
        lat:response[i].sceneY
      }
    }
    alongItemListLength[2]=sceneNum[sceneTypeNumI];
  }).error(function (error) {
    console.log(error);
  });

  // 沿途滚动条里的item
  // $scope.itemList = new Array();
  // var alongItemNumI = 0;

  $scope.$watch('departureInput', function () {
    console.log($scope.departureInput);
  });
  $scope.$watch('destinationInput', function () {
    console.log($scope.destinationInput);
  });

  function isNear(var1,var2) {
    for(var i=0;i<allmarker[1].length;i++){
      var lng0=allmarker[1][i].lng;
      var lat0=allmarker[1][i].lat;
      var id0=allmarker[1][i].id;
      if((Math.abs(lng0-var1)+Math.abs(lat0-var2))<0.2){
        //console.log(1+" "+id0);
        ifNear[1][id0]=true;
      }
    }
    for(var i=0;i<allmarker[2].length;i++){
      var lng1=allmarker[2][i].lng;
      var lat1=allmarker[2][i].lat;
      var id1=allmarker[2][i].id;
      if((Math.abs(lng1-var1)+Math.abs(lat1-var2))<0.2){
        //console.log(2+" "+id1);
        ifNear[2][id1]=true;
      }
    }
  }

  $scope.planning = function (departureInput, destinationInput) {
    console.log("route:" + departureInput + " " + destinationInput);
    //var myP1 = new BMap.Point(116.301934,39.977552);
    //var myP2 = new BMap.Point(116.508328,39.919141);
    var ooptions = {
      onSearchComplete: function(){
        map.clearOverlays();
        var pts = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组
        //var p1= new BMap.Point(pts[0].lng,pts[0].lat);
        //var p2= new BMap.Point(pts[pts.length-1].lng,pts[pts.length-1].lat);
        var polyline = new BMap.Polyline(pts);
        map.addOverlay(polyline);
        var marker1 = new BMap.Marker(pts[0]);
        //创建2个label(用marker方法就是marker)
        var marker2 = new BMap.Marker(pts[pts.length-1]);
        var label1 = new BMap.Label("起点",{offset:new BMap.Size(20,-10)});
        var label2 = new BMap.Label("终点",{offset:new BMap.Size(20,-10)});
        /*marker1.setLabel(label1);
         marker2.setLabel(label2);
         map.addOverlay(marker1);
         map.addOverlay(marker2);*/
        for(var i=0;i<pts.length;i++){
          isNear(pts[i].lng,pts[i].lat);
        }
        for(var i=0;i<sceneTypeNum+1;i++){
          alongItemMakerList[i] = new Array();
        }
        for(i=1;i<3;i++){
          var num=0;
          for(var j=1;j<ifNear[i].length;j++){
            if(ifNear[i][j]){
              alongItemMakerList[i][num]=j;
              //console.log(i+" "+j);
              num++;
              alongItemListLength[i]=num;
            }
          }
        }
        /*for(var i=1;i<3;i++){
         for(var j=0;j<alongItemMakerList[i].length;j++){
         if(alongItemMakerList[i][j]){
         console.log("true"+j);
         }
         else{
         console.log("false");
         }
         console.log("---------------------------");
         }
         }*/
        // console.log("hhh"+alongItemListLength[1]+" "+alongItemListLength[2]);
        //  setTimeout(function(){
        //  map.setViewport([pts[0],pts[pts.length-1]]);          //调整到最佳视野
        //  },1000);
        marker1.setLabel(label1);
        marker2.setLabel(label2);
        map.addOverlay(marker1);
        map.addOverlay(marker2);
      }
    };
    var driving = new BMap.DrivingRoute(map,ooptions);    //创建驾车实例
    driving.search(departureInput, destinationInput);                 //第一个驾车搜索
  };
  $scope.tradeInput = function () {
    console.log("trade");
    var t = $scope.departureInput;
    $scope.departureInput = $scope.destinationInput;
    $scope.destinationInput = t;
  };

  // 选择图层
  $scope.checkTypeList = [{
    id: 1,
    name: "上海近代公园",
    checked: false
  }, {
    id: 2,
    name: "上海工业遗址",
    checked: false
  }];
  $scope.clickTheCheckbox = function (id) {
    var markerNum = "marker" + id;
    var point;
    var arr = new Array(alongItemListLength[id]); // 显示的定位点个数
    for (var i = 0; i < alongItemListLength[id]; i++) {
      arr[i] = new Array(3); // 坐标
    }
    if ($scope.checkTypeList[id - 1].checked == true) {
      console.log("add point:" + id);

      $http({
        method: 'POST',
        url: "http://localhost:8080/server/scene/list/type",
        params: {"scenetype": id},
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age': '100'
        }
      }).success(function (response) {
        console.log(response);
        console.log("in main get scene x y:" + JSON.stringify(response));
        console.log(alongItemListLength[id]);
        console.log("hhh"+sceneNum[id]+" "+alongItemListLength[id]);
        if(sceneNum[id]!=alongItemListLength[id]){
          //本地marker方法
          for (var i = 0; i < alongItemListLength[id]; i++) {
            console.log(i);
            console.log("id"+alongItemMakerList[id][i]);
            var real=0;
            for (var j = 0; j < sceneNum[id]; j++) {
              if(response[j].sceneId==alongItemMakerList[id][i]){
                real=j;
              }
            }
            console.log(i+" "+real);
            arr[i] = [
              response[real].sceneX,
              response[real].sceneY,
              response[real].sceneId
            ]
          }
        }
        else {
          for (var i = 0; i < alongItemListLength[id]; i++) {
            console.log(i);
            arr[i] = [
              response[i].sceneX,
              response[i].sceneY,
              response[i].sceneId
            ]
          }
        }
        var marker = new Array(sceneTypeNum + 1);
        for (i = 1; i <= sceneTypeNum; i++) {
          marker[i] = new Array(sceneNum[id]);
        }
        var str = new Array(sceneTypeNum + 1);
        for (i = 1; i <= sceneTypeNum; i++) {
          str[i] = new Array(sceneNum[id]);
        }
        for (i = 0; i < alongItemListLength[id]; i++) {
          if (arr[i][0] != -1.0 && arr[i][1] != -1) {
            console.log("add point" + arr[i][2] + ":" + arr[i][0] + " " + arr[i][1]);
            point = new BMap.Point(arr[i][0], arr[i][1]);
            var myIcon;
            if (id == 1) {
              myIcon = new BMap.Icon("img/marker1.jpg", new BMap.Size(32, 32));
            }
            else if (id == 2) {
              myIcon = new BMap.Icon("img/marker2.jpg", new BMap.Size(32, 32));
            }
            marker[id][i] = new BMap.Marker(point, {icon: myIcon});
            map.addOverlay(marker[id][i]);
            str[id][i] = "marker" + id + " " + arr[i][2];
            console.log(str[id][i]);
            marker[id][i].setTitle(str[id][i]);
            marker[id][i].addEventListener("mouseup", getTitleId);
            function getTitleId() {
              console.log("点击事件");
              var thisTitle = this.getTitle();       //获取marker的标题
              var sceneId = getStrId(thisTitle);
              if (preId == -1) {
                console.log("判定1");
                $('.planning-result-card').show();
                preId = sceneId;
              } else if (sceneId == preId) {
                console.log("判定2");
                $('.planning-result-card').hide();
                preId = -1;
              } else {
                console.log("判定3");
                preId = sceneId;
              }
              $http({
                method: 'POST',
                url: "http://localhost:8080/server/scene/detail",
                params: {"sceneid": sceneId},
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                  'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
                  'Access-Control-Allow-Max-Age': '100'
                }
              }).success(function (response) {
                console.log(JSON.stringify(response));
                $scope.selectedPoint = {
                  id: response.scene.sceneId,
                  name: response.scene.sceneName,
                  score: response.scene.sceneScore,
                  star: response.scene.sceneFavor,
                  come: response.scene.sceneVisited,
                  wish: response.sceneWish,
                  show: response.scene.sceneScore,
                  sortType: "score",
                  img: response.picture.picUrl
                }
              })
                .error(function (error) {
                  console.log(error);
                  $state.reload('login');
                });

            }
          }
        }
      })
        .error(function (error) {
          console.log(error);
        })
    }
    else {
      var allOverlay = map.getOverlays();
      console.log(allOverlay.length);
      for (i = 1; i < allOverlay.length; i++) {
        console.log(allOverlay[i]);
        var strName = new String();
        strName = allOverlay[i].getTitle();
        console.log(i + "allOverlay " + strName + " " + getStrMarker(strName));
        if (getStrMarker(allOverlay[i].getTitle()) == markerNum) {
          map.removeOverlay(allOverlay[i]);
        }
      }
    }
  };

  //进入景观详细页面
  $scope.jumpToSceneDetail = function (IdOfScene) {
    console.log("id before jump" + IdOfScene);
    $state.go("sceneDetail", {IdOfScene: IdOfScene});

  };

  $scope.backToMap = function () {
    $ionicHistory.goBack();
  };
});
