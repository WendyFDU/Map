var nearbyModule = angular.module('nearby.controllers', ['ionic']);

nearbyModule.controller('NearbyCtrl', function ($scope, $state, $ionicHistory, $http) {

  //---------------------------------------待补充
  // 地图
  $scope.po = [116.404, 39.915];
  var map = new BMap.Map("nearby-map");
  map.centerAndZoom(new BMap.Point($scope.po[0], $scope.po[1]), 11);

  $scope.selectedPoint = {
    name: "",
    score: "",
    sortType: "",
    img: ""
  }

  // 附近的景观定位点
  var poiNum = 3;
  var poi = new Array(poiNum);
  var marker = new Array(poiNum);
  var xCoordinate, yCoordinate;
  for (var i = 0; i < poiNum; i++) {
    xCoordinate = 116.407852 + 0.01 * i; // 景观详细坐标
    yCoordinate = 39.98031 + 0.01 * i;
    poi[i] = new BMap.Point(xCoordinate, yCoordinate);
    marker[i] = new BMap.Marker(poi[i]); // 创建marker对象
    marker[i].enableDragging(); // marker可拖拽
    /*marker[i].live('click',function (){
      $(this)
    })*/
    marker[i].addEventListener("click", function (e) { // 点击定位点显示详细信息
      // 有问题
      console.log(i);
      if (i == pre) {
        //改变
        $('.nearby-item-detail').toggle();
      } else if ($('.nearby-item-detail').css("display") == "none") {
        $('.nearby-item-detail').show();
      }
      $scope.selectedPoint = {
        id: 0,
        name: "世纪公园",
        score: "9",
        star: "60",
        come: "90",
        wish: "10",
        show: "9",
        sortType: "评分",
        img: "./img/baidu.jpg"
      };
      $scope.$apply();
      pre = i;
    })
    map.addOverlay(marker[i]);
  }

  //监听搜索框
  $scope.$watch('searchInput', function () {
    console.log($scope.searchInput);
  });
  $scope.search = function (searchInput) {
    console.log("searchInput:" + searchInput);
  }

  $scope.checkTypeList = [{
    id: 0,
    name: "上海近代公园",
    checked: true
  }, {
    id: 1,
    name: "上海工业遗址",
    checked: true

  }, {
    id: 2,
    name: "上海特色街道",
    checked: true

  }
  ];

  $scope.clickTheCheckbox = function (id) {
    console.log(id + " " + $scope.checkTypeList[id].checked);
  }

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
    $scope.itemListLength = 3;
    $scope.itemList = new Array($scope.itemListLength);
    for (var i = 0; i < 3; i++) {
      $scope.itemList[i] = {
        id: response[i].sceneId,
        name: response[i].sceneName,
        score: response[i].sceneScore,
        star: response[i].sceneFavor,
        come: response[i].sceneVisited,
        wish: response[i].sceneWish,
        show: response[i].sceneScore,
        sortType: "评分"
      }
    }
    console.log("scene response:" + response[0].sceneName);
  })
    .error(function (error) {
      console.log(error);
    })

  $scope.backToMap = function () {
    $ionicHistory.goBack();
  };
  $scope.jumpToSceneDetail = function (IdOfScene, NameOfScene) {
    console.log("id before jump" + IdOfScene + " name of scene:" + NameOfScene);

    $state.go("sceneDetail", {IdOfScene: IdOfScene});

  };
});
nearbyModule.controller("RankController", function ($scope) {
  console.log("test yu:" + $scope.sortType);

  this.tab = 1;
  function JsonSort(json, key) {
    //console.log(json);
    for (var j = 1, jl = json.length; j < jl; j++) {
      var temp = json[j],
        val = temp[key],
        i = j - 1;
      while (i >= 0 && json[i][key] < val) {
        json[i + 1] = json[i];
        i = i - 1;
      }
      json[i + 1] = temp;

    }
    //console.log(json);
    return json;
  }


  this.selectTab = function (setTab) {
    this.tab = setTab;
    if (setTab == 1) {
      var length = $scope.itemList.length;
      console.log("test here length:" + length);

      $scope.itemList = JsonSort($scope.itemList, 'score');

      var i;
      for (i = 0; i < $scope.itemList.length; i++) {
        $scope.itemList[i].show = $scope.itemList[i].score;
        $scope.itemList[i].sortType = "评分";
      }

    }
    if (setTab == 2) {
      $scope.showItemList = JsonSort($scope.itemList, 'star');
      //$scope.sortType = "收藏";
      console.log("test yu:" + $scope.sortType);


      for (i = 0; i < $scope.itemList.length; i++) {
        $scope.itemList[i].show = $scope.itemList[i].star;
        $scope.itemList[i].sortType = "收藏";

      }

    }
    if (setTab == 3) {
      $scope.showItemList = JsonSort($scope.itemList, 'come');
      $scope.sortType = "足迹";

      for (i = 0; i < $scope.itemList.length; i++) {
        $scope.itemList[i].show = $scope.itemList[i].come;
        $scope.itemList[i].sortType = "足迹";

      }
    }
    if (setTab == 4) {
      $scope.showItemList = JsonSort($scope.itemList, 'wish');
      $scope.sortType = "心愿";
      for (i = 0; i < $scope.itemList.length; i++) {
        $scope.itemList[i].show = $scope.itemList[i].wish;
        $scope.itemList[i].sortType = "心愿";

      }
    }
  }

  this.isSelectTab = function (checkTab) {
    return this.tab === checkTab
  }
});
