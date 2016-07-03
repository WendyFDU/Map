
var mapMadule = angular.module('mainmap.controllers', []);

  //.controller('hhhCtrl', function($scope) {})
  mapMadule.controller('MainMapCtrl',function ($scope,$state,$ionicPopover,$http){

    console.log("here in show map");

    var map = new BMap.Map("allmap");
    console.log("map:"+map);
    map.centerAndZoom(new BMap.Point(121.55862,31.237994), 11);
    //var pt = new BMap.Point(116.404, 39.915);
    //var myIcon = new BMap.Icon("img/ionic.png", new BMap.Size(64,64));
    //var marker = new BMap.Marker(pt,{icon:myIcon});
    //map.addOverlay(marker);

    //$scope.$watch('searchInput', function() {
    //  console.log($scope.searchInput);
    //});
    $scope.allSceneArray  = new Array();
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
      var len = response.length;
      for(var i =0;i<len;i++){
        $scope.allSceneArray.push({
          "id":response[i].sceneId,
          "name":response[i].sceneName
        })
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
      var len = response.length;
      for(var i =0;i<len;i++){
        $scope.allSceneArray.push({
          "id":response[i].sceneId,
          "name":response[i].sceneName
        })
      }
    })
      .error(function (error) {
        console.log(error);
      })





    $scope.search = function(searchInput,$event){
      console.log("searchInput:"+searchInput);
        $scope.openPopover($event);


      //$http({
      //  method: 'POST',
      //  url: "http://localhost:8080/server/scene/searching",
      //  params: {"scenetype":0,"keyword":searchInput,"searchtype":0},
      //  headers: {
      //    'Content-Type': 'application/json',
      //    'Accept' : 'application/json',
      //    'Access-Control-Allow-Origin': '*',
      //    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      //    'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
      //    'Access-Control-Allow-Max-Age' : '100'
      //  }
      //}).success(function (response) {
      //  console.log("search response:"+JSON.stringify(response)+" "+response.length);
      //  $scope.searchResult = new Array(response.length);
      //  for(var i = 0;i<response.length;i++){
      //    $scope.searchResult[i]={
      //      sceneName :response[i].sceneName,
      //      sceneId: response[i].sceneId
      //      };
      //    //$scope.searchResult[i].sceneId= response[i].sceneId;
      //  }
      //
      //  $scope.openPopover($event);
      //
      //})
      //  .error(function (error) {
      //    console.log(error);
      //  })



    }
    $scope.showMenuItemList = function () {

      $state.go('itemList');
    };

    $scope.jumpToSceneDetail = function (IdOfScene) {
      console.log("id before jump"+IdOfScene);
      $scope.popover.hide();
      $state.go("sceneDetail",{IdOfScene:IdOfScene});

    };
    $scope.showItemList = function () {

      $state.go('itemList');
    };
    $scope.checkTypeList=[{
      id:1,
      name:"上海近代公园",
      checked:false
    },{
      id:2,
      name:"上海工业遗址",
      checked:false

    }
      ];

    //$scope.clickTheCheckbox = function(id){
    //  console.log(id+" "+$scope.checkTypeList[id].checked);
    //}

    $scope.popover = $ionicPopover.fromTemplateUrl('mainmap-result-popover.html', {
      scope: $scope
    });

    // .fromTemplateUrl() 方法
    $ionicPopover.fromTemplateUrl('mainmap-result-popover.html', {
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



    $scope.clickTheCheckbox = function(id){
      var str="marker"+id;
      var arr =new Array(3);
      for(var i=0;i<3;i++){
        arr[i]=new Array(2);
      }
      //console.log(id+" "+$scope.checkTypeList[id-1].checked);
      if($scope.checkTypeList[id-1].checked==true){
        console.log("add point:"+id);

        $http({
          method: 'POST',
          url: "http://localhost:8080/server/scene/list/type",
          params: {"scenetype":id},
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Max-Age' : '100'
          }
        }).success(function (response) {
          console.log("in main get scene x y:"+JSON.stringify(response));
          $scope.itemList = new Array(3);
          for(var i = 0;i<3;i++){
            arr[i] = [
              response[i].sceneX,
              response[i].sceneY
            ]
            console.log(arr[i][0]+","+arr[i][1]);

            //}
          }
          var point;
          var marker;
          for(var j=0;j<3;j++){
            if(arr[j][0]!=-1.0&&arr[j][1]!=-1){
              console.log("add point:"+arr[j][0]+" "+arr[j][1]);
              point=new BMap.Point(arr[j][0],arr[j][1]);
              var myIcon;
              if(id==1){
                myIcon = new BMap.Icon("img/marker1.jpg", new BMap.Size(32,32));
              }
              else if(id==2){
                myIcon = new BMap.Icon("img/marker2.jpg", new BMap.Size(32,32));
              }

              var marker = new BMap.Marker(point,{icon:myIcon});
              //marker = new BMap.Marker(point);
              map.addOverlay(marker);
              marker.setTitle(str);
            }
          }


        })
          .error(function (error) {
            console.log(error);
          })

        //for(var j=0;j<3;j++){
        //  for(var k=0;k<2;k++){
        //    arr[j][k]=0;
        //  }
        //}
        //arr=getInfo(id);
        //arr=[[116.404, 39.915],[116.400, 39.915],[116.404, 39.910]];

      }
      else {
        var allOverlay = map.getOverlays();
        for (var i = 1; i < allOverlay.length ; i++){
          if(allOverlay[i].getTitle() == str){
            map.removeOverlay(allOverlay[i]);
          }
        }
      }
    }

    /*---------------------------------------*/
    $scope.showNearby = function () {
      $state.go('nearby');
    };

    $scope.showSearchHistory = function () {
      $state.go('searchHistory');
    };

    $scope.showRoutePlanning = function () {
      $state.go('routePlanning');
    };

    $scope.showMyDetail = function () {
      $state.go('myDetail');
    };

    var sceneTypeNumI = 0; // 景观类型下标
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/list/type/number",
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
      sceneTypeNumI = 1; // 景观类型下标
      sceneNum[sceneTypeNumI] = response;

    }).error(function (error) {
      console.log(error);
    });
    var sceneTypeNumI = 0; // 景观类型下标
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/list/type/number",
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
      sceneTypeNumI = 2; // 景观类型下标
      sceneNum[sceneTypeNumI] = response;

    }).error(function (error) {
      console.log(error);
    });

    getLocation();

    function getLocation(){
      var options={
        enableHighAccuracy:true,
        maximumAge:1000
      }
      if(navigator.geolocation){
        //浏览器支持geolocation
        navigator.geolocation.getCurrentPosition(onSuccess,onError,options);
      }else{
        //浏览器不支持geolocation
      }
    }

    //成功时
    function onSuccess(position){
      //返回用户位置
      //经度
      longitude =position.coords.longitude;
      //纬度
      latitude = position.coords.latitude;

      //使用百度地图API
      //创建一个坐标

      //console.log(longitude+" "+latitude);
      curlong=longitude;
      curlat=latitude;
      console.log("hhh"+curlong);
    }

    function isNear(var1,var2){
      //console.log(var1+" "+var2);
      return true;
    }

    //失败时
    function onError(error){
      switch(error.code){
        case 1:
          alert("位置服务被拒绝");
          break;

        case 2:
          alert("暂时获取不到位置信息");
          break;

        case 3:
          alert("获取信息超时");
          break;

        case 4:
          alert("未知错误");
          break;
      }

    }
    /*--------------------------------------*/
});

