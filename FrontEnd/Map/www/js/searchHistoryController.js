var searchHistoryModule = angular.module('searchHistory.controllers', ['ionic']);

searchHistoryModule.controller('SearchHistoryCtrl', function ($scope, $state, $ionicHistory, $http) {

  $scope.searchHistoryList = new Array();

  console.log("请求进入");

  // 返回上一层
  $scope.backToMap = function () {
    $ionicHistory.goBack();
  };
  $scope.showMainMap = function () {
    $state.go('mainmap');
  };
  $scope.jumpToSceneDetail = function (IdOfScene) {
    console.log("id before jump" + IdOfScene);
    $scope.popover.hide();
    $state.go("sceneDetail", {IdOfScene: IdOfScene});
  };

  console.log(searchHistoryNumI);
  //搜索历史景观列表
  if (searchHistoryNumI > 0) {
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid": searchHistoryListId[0]},
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

      $scope.searchHistoryList[0] = {
        id: response.scene.sceneId,
        name: response.scene.sceneName,
        score: response.scene.sceneScore,
        star: response.scene.sceneFavor,
        come: response.scene.sceneVisited,
        wish: response.sceneWish,
        show: response.scene.sceneScore,
        sortType: "score"
      };

      //$scope.$apply();
    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      });
  }

  if (searchHistoryNumI > 1) {
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid": searchHistoryListId[1]},
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

      $scope.searchHistoryList[1] = {
        id: response.scene.sceneId,
        name: response.scene.sceneName,
        score: response.scene.sceneScore,
        star: response.scene.sceneFavor,
        come: response.scene.sceneVisited,
        wish: response.sceneWish,
        show: response.scene.sceneScore,
        sortType: "score"
      };
    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      });
  }

  if (searchHistoryNumI > 2) {
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid": searchHistoryListId[2]},
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

      $scope.searchHistoryList[2] = {
        id: response.scene.sceneId,
        name: response.scene.sceneName,
        score: response.scene.sceneScore,
        star: response.scene.sceneFavor,
        come: response.scene.sceneVisited,
        wish: response.sceneWish,
        show: response.scene.sceneScore,
        sortType: "score"
      };
    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      });
  }

  if (searchHistoryNumI > 3) {
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid": searchHistoryListId[3]},
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

      $scope.searchHistoryList[3] = {
        id: response.scene.sceneId,
        name: response.scene.sceneName,
        score: response.scene.sceneScore,
        star: response.scene.sceneFavor,
        come: response.scene.sceneVisited,
        wish: response.sceneWish,
        show: response.scene.sceneScore,
        sortType: "score"
      };
    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      });
  }

  if (searchHistoryNumI > 4) {
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid": searchHistoryListId[4]},
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

      $scope.searchHistoryList[4] = {
        id: response.scene.sceneId,
        name: response.scene.sceneName,
        score: response.scene.sceneScore,
        star: response.scene.sceneFavor,
        come: response.scene.sceneVisited,
        wish: response.sceneWish,
        show: response.scene.sceneScore,
        sortType: "score"
      };
    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      });
  }

  if (searchHistoryNumI > 5) {
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid": searchHistoryListId[5]},
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

      $scope.searchHistoryList[5] = {
        id: response.scene.sceneId,
        name: response.scene.sceneName,
        score: response.scene.sceneScore,
        star: response.scene.sceneFavor,
        come: response.scene.sceneVisited,
        wish: response.sceneWish,
        show: response.scene.sceneScore,
        sortType: "score"
      };
    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      });
  }

  if (searchHistoryNumI > 6) {
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid": searchHistoryListId[6]},
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

      $scope.searchHistoryList[6] = {
        id: response.scene.sceneId,
        name: response.scene.sceneName,
        score: response.scene.sceneScore,
        star: response.scene.sceneFavor,
        come: response.scene.sceneVisited,
        wish: response.sceneWish,
        show: response.scene.sceneScore,
        sortType: "score"
      };
    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      });
  }

  if (searchHistoryNumI > 7) {
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid": searchHistoryListId[7]},
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

      $scope.searchHistoryList[7] = {
        id: response.scene.sceneId,
        name: response.scene.sceneName,
        score: response.scene.sceneScore,
        star: response.scene.sceneFavor,
        come: response.scene.sceneVisited,
        wish: response.sceneWish,
        show: response.scene.sceneScore,
        sortType: "score"
      };
    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      });
  }

  if (searchHistoryNumI > 8) {
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid": searchHistoryListId[8]},
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

      $scope.searchHistoryList[8] = {
        id: response.scene.sceneId,
        name: response.scene.sceneName,
        score: response.scene.sceneScore,
        star: response.scene.sceneFavor,
        come: response.scene.sceneVisited,
        wish: response.sceneWish,
        show: response.scene.sceneScore,
        sortType: "score"
      };
    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      });
  }

  if (searchHistoryNumI > 9) {
    $http({
      method: 'POST',
      url: "http://localhost:8080/server/scene/detail",
      params: {"sceneid": searchHistoryListId[9]},
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

      $scope.searchHistoryList[9] = {
        id: response.scene.sceneId,
        name: response.scene.sceneName,
        score: response.scene.sceneScore,
        star: response.scene.sceneFavor,
        come: response.scene.sceneVisited,
        wish: response.sceneWish,
        show: response.scene.sceneScore,
        sortType: "score"
      };
    })
      .error(function (error) {
        console.log(error);
        $state.reload('login');
      });
  }

});

searchHistoryModule.controller("TypeController10", function ($scope, $http) {

  // console.log("进入myFootprintModule.TypeController");
  // this.tab = 1;

  // this.selectTab = function (setTab) {
  //   this.tab = setTab;
  //   var sceneTypeNumI;
  //   if (setTab == 1) {
  //     sceneTypeNumI = 1;
  //     $http({
  //       method: 'POST',
  //       url: "http://localhost:8080/server/scene/list/type",
  //       params: {"scenetype": sceneTypeNumI},
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
  //         'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
  //         'Access-Control-Allow-Max-Age': '100'
  //       }
  //     }).success(function (response) {
  //       // $scope.itemList = [];
  //       // $scope.itemListLength = sceneNum[sceneTypeNumI];
  //       // $scope.itemList = new Array($scope.itemListLength);
  //       // console.log($scope.itemList.length);
  //       var length = sceneNum[sceneTypeNumI];
  //       for (var i = 0; i < length; i++) {
  //         $scope.itemList[i] = {
  //           id: response[i].sceneId,
  //           name: response[i].sceneName,
  //           score: response[i].sceneScore,
  //           star: response[i].sceneFavor,
  //           come: response[i].sceneVisited,
  //           wish: response[i].sceneWish,
  //           show: response[i].sceneVisited,
  //           sortType: "come"
  //         }
  //       }
  //       if (length < $scope.itemList.length) {
  //         $scope.itemList.splice(length, $scope.itemList.length - length);
  //       }
  //       console.log("111:" + " " + $scope.itemList[2].sortType + " " + sortT);
  //       $scope.itemList = JsonSort($scope.itemList, sortT);
  //       for (i = 0; i < $scope.itemList.length; i++) {
  //         switch (sortT) {
  //           case "score":
  //             console.log(sortT);
  //             $scope.itemList[i].show = $scope.itemList[i].score;
  //             $scope.itemList[i].sortType = "评分";
  //             break;
  //           case "star":
  //             console.log(sortT);
  //             $scope.itemList[i].show = $scope.itemList[i].star;
  //             $scope.itemList[i].sortType = "收藏";
  //             break;
  //           case "come":
  //             console.log(sortT);
  //             $scope.itemList[i].show = $scope.itemList[i].come;
  //             $scope.itemList[i].sortType = "足迹";
  //             break;
  //           case "wish":
  //             console.log(sortT);
  //             $scope.itemList[i].show = $scope.itemList[i].wish;
  //             $scope.itemList[i].sortType = "心愿";
  //             break;
  //           default:
  //             console.log("default");
  //             break;
  //         }
  //       }
  //     })
  //       .error(function (error) {
  //         console.log(error);
  //       })
  //
  //
  //   }
  //   if (setTab == 2) {
  //     sceneTypeNumI = 2;
  //     $http({
  //       method: 'POST',
  //       url: "http://localhost:8080/server/scene/list/type",
  //       params: {"scenetype": sceneTypeNumI},
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
  //         'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
  //         'Access-Control-Allow-Max-Age': '100'
  //       }
  //     }).success(function (response) {
  //       //$scope.itemList = [];
  //       //$scope.itemListLength = sceneNum[sceneTypeNumI];
  //       //$scope.itemList = new Array($scope.itemListLength);
  //       //console.log($scope.itemList.length);
  //       var length = sceneNum[sceneTypeNumI];
  //       for (var i = 0; i < length; i++) {
  //         $scope.itemList[i] = {
  //           id: response[i].sceneId,
  //           name: response[i].sceneName,
  //           score: response[i].sceneScore,
  //           star: response[i].sceneFavor,
  //           come: response[i].sceneVisited,
  //           wish: response[i].sceneWish,
  //           show: response[i].sceneVisited,
  //           sortType: "come"
  //         }
  //       }
  //       if (length < $scope.itemList.length) {
  //         $scope.itemList.splice(length, $scope.itemList.length - length);
  //       }
  //       console.log("111:" + " " + $scope.itemList[2].sortType + " " + sortT);
  //       $scope.itemList = JsonSort($scope.itemList, "come");
  //       for (i = 0; i < $scope.itemList.length; i++) {
  //         switch (sortT) {
  //           case "score":
  //             console.log(sortT);
  //             $scope.itemList[i].show = $scope.itemList[i].score;
  //             $scope.itemList[i].sortType = "评分";
  //             break;
  //           case "star":
  //             console.log(sortT);
  //             $scope.itemList[i].show = $scope.itemList[i].star;
  //             $scope.itemList[i].sortType = "收藏";
  //             break;
  //           case "come":
  //             console.log(sortT);
  //             $scope.itemList[i].show = $scope.itemList[i].come;
  //             $scope.itemList[i].sortType = "足迹";
  //             break;
  //           case "wish":
  //             console.log(sortT);
  //             $scope.itemList[i].show = $scope.itemList[i].wish;
  //             $scope.itemList[i].sortType = "心愿";
  //             break;
  //           default:
  //             console.log("default");
  //             break;
  //         }
  //       }
  //     })
  //       .error(function (error) {
  //         console.log(error);
  //       })
  //   }
  // };

  // this.isSelectTab = function (checkTab) {
  //   return this.tab === checkTab;
  // };

  this.tab = 0;

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
