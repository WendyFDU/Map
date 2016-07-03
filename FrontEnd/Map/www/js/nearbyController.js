var nearbyModule = angular.module('nearby.controllers', ['ionic']);

nearbyModule.controller('NearbyCtrl', function ($scope, $state, $ionicHistory, $ionicPopover, $http) {

  sortT = "score";

  // 地图
  //地图初始化，设置中心点坐标和地图级别
  var map = new BMap.Map("nearby-map");
  //var point = new BMap.Point(121.55862, 31.237994);
  var point = new BMap.Point(curlong, curlat);
  console.log(curlong + " " + curlat);
  map.centerAndZoom(point, 10);
  var marker = new BMap.Marker(point);
  map.addOverlay(marker);
  // $scope.po = [121.55862, 31.237994];
  // var map = new BMap.Map("nearby-map");
  // map.centerAndZoom(new BMap.Point($scope.po[0], $scope.po[1]), 11);

  function isNear(var1, var2, var3, var4) {
    console.log(Math.abs(var3 - var1));
    console.log(Math.abs(var4 - var2));
    if ((Math.abs(var3 - var1) + Math.abs(var4 - var2)) <= 0.2) {
      return true;
    }
    return false;
  }

  // 遍历每个类型的景观
  var sceneTypeNumI = 0; // 景观类型下标
  var nearbySceneNumI = 0; // 附近景观下标
  var nearbyItemMakerList = new Array(sceneTypeNum + 1); //附近景观列表，每种类型一个数组
  for (var i = 1; i <= sceneTypeNum; i++) {
    nearbyItemMakerList[i] = new Array();
  }
  var nearbyItemListLength = new Array(sceneTypeNum + 1); // 附近景观个数

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
    console.log("hhhh" + curlong);
    console.log(response);
    sceneTypeNumI = 1; // 景观类型下标
    console.log(sceneNum[sceneTypeNumI]); //sceneNum[sceneTypeNumI]为该类型的景观个数
    nearbySceneNumI = 0;
    for (var i = 0; i < sceneNum[sceneTypeNumI]; i++) { // 遍历每个景观
      if (isNear(response[i].sceneX, response[i].sceneY, curlong, curlat)) { // 检查是否为附近
        nearbyItemMakerList[sceneTypeNumI][nearbySceneNumI] = {
          id: response[i].sceneId,
          name: response[i].sceneName,
          score: response[i].sceneScore,
          star: response[i].sceneFavor,
          come: response[i].sceneVisited,
          wish: response[i].sceneWish,
          show: response[i].sceneScore,
          sortType: "score"
        }
        nearbySceneNumI++;
        console.log("scene response:" + response[i].sceneName);
      }
    }
    nearbyItemListLength[sceneTypeNumI] = nearbySceneNumI;
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
    nearbySceneNumI = 0;
    for (var i = 0; i < sceneNum[sceneTypeNumI]; i++) { // 遍历每个景观
      if (isNear(response[i].sceneX, response[i].sceneY, curlong, curlat)) { // 检查是否为附近
        nearbyItemMakerList[sceneTypeNumI][nearbySceneNumI] = {
          id: response[i].sceneId,
          name: response[i].sceneName,
          score: response[i].sceneScore,
          star: response[i].sceneFavor,
          come: response[i].sceneVisited,
          wish: response[i].sceneWish,
          show: response[i].sceneScore,
          sortType: "score"
        }
        nearbySceneNumI++;
        console.log("scene response:" + response[i].sceneName);
      }
    }
    nearbyItemListLength[sceneTypeNumI] = nearbySceneNumI;
  }).error(function (error) {
    console.log(error);
  });

  // 附近滚动条里的item
  $scope.itemList = new Array();
  var nearbyItemNumI = 0;

  //监听搜索框
  $scope.$watch('searchInput', function () {
    console.log($scope.searchInput);
  });
  $scope.search = function (searchInput) {
    console.log("searchInput:" + searchInput);
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
    // getStrMarker("marker15 55");
    // getStrId("marker15 55");
    var markerNum = "marker" + id;
    var point;
    var arr = new Array(nearbyItemListLength[id]); // 显示的定位点个数
    for (var i = 0; i < nearbyItemListLength[id]; i++) {
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
        console.log(nearbyItemListLength[id]);
        for (var i = 0; i < nearbyItemListLength[id]; i++) {
          console.log(i);
          arr[i] = [
            response[i].sceneX,
            response[i].sceneY,
            response[i].sceneId
          ]
        }
        var marker = new Array(sceneTypeNum + 1);
        for (i = 1; i <= sceneTypeNum; i++) {
          marker[i] = new Array(sceneNum[id]);
        }
        var str = new Array(sceneTypeNum + 1);
        for (i = 1; i <= sceneTypeNum; i++) {
          str[i] = new Array(sceneNum[id]);
        }
        for (i = 0; i < nearbyItemListLength[id]; i++) {
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
            marker[id][i].addEventListener("mouseup", function getTitleId() {
              console.log("点击事件");
              var thisTitle = this.getTitle();       //获取marker的标题
              var sceneId = getStrId(thisTitle);
              if (preId == -1) {
                console.log("判定1");
                $('.nearby-result-card').show();
                preId = sceneId;
              } else if (sceneId == preId) {
                console.log("判定2");
                $('.nearby-result-card').hide();
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

            });

          }
        }

        //滚动条里的附近景观列表
        nearbyItemNumI = 0;
        if ($scope.checkTypeList[0].checked == true) {
          for (var i = 0; i < nearbyItemListLength[1]; i++) {
            //console.log(i);
            $scope.itemList[nearbyItemNumI] = {
              id: nearbyItemMakerList[1][i].id,
              name: nearbyItemMakerList[1][i].name,
              score: nearbyItemMakerList[1][i].score,
              star: nearbyItemMakerList[1][i].star,
              come: nearbyItemMakerList[1][i].come,
              wish: nearbyItemMakerList[1][i].wish,
              show: nearbyItemMakerList[1][i].show,
              sortType: nearbyItemMakerList[1][i].sortType
            };
            nearbyItemNumI++;
          }
        }
        if ($scope.checkTypeList[1].checked == true) {
          for (var i = 0; i < nearbyItemListLength[2]; i++) {
            //console.log(i);
            $scope.itemList[nearbyItemNumI] = {
              id: nearbyItemMakerList[2][i].id,
              name: nearbyItemMakerList[2][i].name,
              score: nearbyItemMakerList[2][i].score,
              star: nearbyItemMakerList[2][i].star,
              come: nearbyItemMakerList[2][i].come,
              wish: nearbyItemMakerList[2][i].wish,
              show: nearbyItemMakerList[2][i].show,
              sortType: nearbyItemMakerList[2][i].sortType
            };
            nearbyItemNumI++;
          }
        }
        var length = nearbyItemNumI;
        // 按评分排序
        if (length < $scope.itemList.length) {
          $scope.itemList.splice(length, $scope.itemList.length - length);
        }
        $scope.itemList = JsonSort($scope.itemList, sortT);
        for (i = 0; i < $scope.itemList.length; i++) {
          $scope.itemList[i].show = $scope.itemList[i].score;
          $scope.itemList[i].sortType = "评分";
        }
      })
        .error(function (error) {
          console.log(error);
        })
    }
    else {
      var allOverlay = map.getOverlays();
      //console.log(allOverlay.length);
      for (i = 2; i < allOverlay.length; i++) {
        console.log("正在遍历allOverlay[i]" + " " + i);
        var strName = new String();
        strName = allOverlay[i].getTitle();
        console.log(i + "allOverlay " + strName + " " + getStrMarker(strName));
        if (getStrMarker(allOverlay[i].getTitle()) == markerNum) {
          map.removeOverlay(allOverlay[i]);
        }
      }
      //滚动条里的附近景观列表
      nearbyItemNumI = 0;
      if ($scope.checkTypeList[0].checked == true) {
        for (var i = 0; i < nearbyItemListLength[1]; i++) {
          //console.log(i);
          $scope.itemList[nearbyItemNumI] = {
            id: nearbyItemMakerList[1][i].id,
            name: nearbyItemMakerList[1][i].name,
            score: nearbyItemMakerList[1][i].score,
            star: nearbyItemMakerList[1][i].star,
            come: nearbyItemMakerList[1][i].come,
            wish: nearbyItemMakerList[1][i].wish,
            show: nearbyItemMakerList[1][i].show,
            sortType: nearbyItemMakerList[1][i].sortType
          };
          nearbyItemNumI++;
        }
      }
      if ($scope.checkTypeList[1].checked == true) {
        for (var i = 0; i < nearbyItemListLength[2]; i++) {
          //console.log(i);
          $scope.itemList[nearbyItemNumI] = {
            id: nearbyItemMakerList[2][i].id,
            name: nearbyItemMakerList[2][i].name,
            score: nearbyItemMakerList[2][i].score,
            star: nearbyItemMakerList[2][i].star,
            come: nearbyItemMakerList[2][i].come,
            wish: nearbyItemMakerList[2][i].wish,
            show: nearbyItemMakerList[2][i].show,
            sortType: nearbyItemMakerList[2][i].sortType
          };
          nearbyItemNumI++;
        }
      }
      var length = nearbyItemNumI;
      // 按评分排序
      if (length < $scope.itemList.length) {
        $scope.itemList.splice(length, $scope.itemList.length - length);
      }
      $scope.itemList = JsonSort($scope.itemList, sortT);
      for (i = 0; i < $scope.itemList.length; i++) {
        $scope.itemList[i].show = $scope.itemList[i].score;
        $scope.itemList[i].sortType = "评分";
      }
    }
  };

  //进入景观详细页面
  $scope.jumpToSceneDetail = function (IdOfScene) {
    console.log("id before jump" + IdOfScene);
    $state.go("sceneDetail", {IdOfScene: IdOfScene});

  };

  // 返回上一层
  $scope.backToMap = function () {
    $ionicHistory.goBack();
  };
});

nearbyModule.controller("TypeController0", function ($scope, $http) {

  this.tab = 1;

  this.selectTab = function (setTab) {
    this.tab = setTab;
    var sceneTypeNumI;
    if (setTab == 1) {
      sceneTypeNumI = 1;
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/scene/list/type",
        params: {"scenetype": sceneTypeNumI},
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age': '100'
        }
      }).success(function (response) {
        // $scope.itemList = [];
        // $scope.itemListLength = sceneNum[sceneTypeNumI];
        // $scope.itemList = new Array($scope.itemListLength);
        // console.log($scope.itemList.length);
        var length = sceneNum[sceneTypeNumI];
        for (var i = 0; i < length; i++) {
          $scope.itemList[i] = {
            id: response[i].sceneId,
            name: response[i].sceneName,
            score: response[i].sceneScore,
            star: response[i].sceneFavor,
            come: response[i].sceneVisited,
            wish: response[i].sceneWish,
            show: response[i].sceneVisited,
            sortType: "come"
          }
        }
        if (length < $scope.itemList.length) {
          $scope.itemList.splice(length, $scope.itemList.length - length);
        }
        console.log("111:" + " " + $scope.itemList[2].sortType + " " + sortT);
        $scope.itemList = JsonSort($scope.itemList, sortT);
        for (i = 0; i < $scope.itemList.length; i++) {
          switch (sortT) {
            case "score":
              console.log(sortT);
              $scope.itemList[i].show = $scope.itemList[i].score;
              $scope.itemList[i].sortType = "评分";
              break;
            case "star":
              console.log(sortT);
              $scope.itemList[i].show = $scope.itemList[i].star;
              $scope.itemList[i].sortType = "收藏";
              break;
            case "come":
              console.log(sortT);
              $scope.itemList[i].show = $scope.itemList[i].come;
              $scope.itemList[i].sortType = "足迹";
              break;
            case "wish":
              console.log(sortT);
              $scope.itemList[i].show = $scope.itemList[i].wish;
              $scope.itemList[i].sortType = "心愿";
              break;
            default:
              console.log("default");
              break;
          }
        }
      })
        .error(function (error) {
          console.log(error);
        })


    }
    if (setTab == 2) {
      sceneTypeNumI = 2;
      $http({
        method: 'POST',
        url: "http://localhost:8080/server/scene/list/type",
        params: {"scenetype": sceneTypeNumI},
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
          'Access-Control-Allow-Max-Age': '100'
        }
      }).success(function (response) {
        //$scope.itemList = [];
        //$scope.itemListLength = sceneNum[sceneTypeNumI];
        //$scope.itemList = new Array($scope.itemListLength);
        //console.log($scope.itemList.length);
        var length = sceneNum[sceneTypeNumI];
        for (var i = 0; i < length; i++) {
          $scope.itemList[i] = {
            id: response[i].sceneId,
            name: response[i].sceneName,
            score: response[i].sceneScore,
            star: response[i].sceneFavor,
            come: response[i].sceneVisited,
            wish: response[i].sceneWish,
            show: response[i].sceneVisited,
            sortType: "come"
          }
        }
        if (length < $scope.itemList.length) {
          $scope.itemList.splice(length, $scope.itemList.length - length);
        }
        console.log("111:" + " " + $scope.itemList[2].sortType + " " + sortT);
        $scope.itemList = JsonSort($scope.itemList, "come");
        for (i = 0; i < $scope.itemList.length; i++) {
          switch (sortT) {
            case "score":
              console.log(sortT);
              $scope.itemList[i].show = $scope.itemList[i].score;
              $scope.itemList[i].sortType = "评分";
              break;
            case "star":
              console.log(sortT);
              $scope.itemList[i].show = $scope.itemList[i].star;
              $scope.itemList[i].sortType = "收藏";
              break;
            case "come":
              console.log(sortT);
              $scope.itemList[i].show = $scope.itemList[i].come;
              $scope.itemList[i].sortType = "足迹";
              break;
            case "wish":
              console.log(sortT);
              $scope.itemList[i].show = $scope.itemList[i].wish;
              $scope.itemList[i].sortType = "心愿";
              break;
            default:
              console.log("default");
              break;
          }
        }
      })
        .error(function (error) {
          console.log(error);
        })
    }
  };

  this.isSelectTab = function (checkTab) {
    return this.tab === checkTab;
  };

  this.tab = 1;

  this.selectSortTab = function (setTab) {
    this.tab = setTab;
    if (setTab == 1) {
      sortT = 'score';
      $scope.itemList = JsonSort($scope.itemList, sortT);
      for (var i = 0; i < $scope.itemList.length; i++) {
        $scope.itemList[i].show = $scope.itemList[i].score;
        $scope.itemList[i].sortType = "评分";
      }
    }
    if (setTab == 2) {
      sortT = 'star';
      $scope.showItemList = JsonSort($scope.itemList, sortT);
      console.log("test yu:" + $scope.sortType);
      for (i = 0; i < $scope.itemList.length; i++) {
        $scope.itemList[i].show = $scope.itemList[i].star;
        $scope.itemList[i].sortType = "收藏";
      }
    }
    if (setTab == 3) {
      sortT = 'come';
      $scope.showItemList = JsonSort($scope.itemList, sortT);
      $scope.sortType = "足迹";
      for (i = 0; i < $scope.itemList.length; i++) {
        $scope.itemList[i].show = $scope.itemList[i].come;
        $scope.itemList[i].sortType = "足迹";
      }
    }
    if (setTab == 4) {
      sortT = 'wish';
      $scope.showItemList = JsonSort($scope.itemList, sortT);
      $scope.sortType = "心愿";
      for (i = 0; i < $scope.itemList.length; i++) {
        $scope.itemList[i].show = $scope.itemList[i].wish;
        $scope.itemList[i].sortType = "心愿";
      }
    }
  };
  this.isSelectSortTab = function (checkTab) {
    return this.tab === checkTab;
  }
});
