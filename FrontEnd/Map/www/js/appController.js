// 遍历sceneType相关变量
var sceneTypeNum = 2;
var sceneNum = new Array(sceneTypeNum + 1);
sceneNum[1] = 3;
sceneNum[2] = 5;

// 自己的坐标
var curlong = 121.5896456;
var curlat = 31.192889899999997;

// 搜索历史相关变量
var searchHistoryNum = 10;
var searchHistoryNumI = 0;
var searchHistoryListId = new Array(searchHistoryNum);

// 字符串操作
function getStrMarker(string) {
  var cut = string.indexOf(" ");
  var str1 = string.substring(0, cut);
  return str1;
}
function getStrId(string) {
  var cut = string.indexOf(" ");
  var str2 = string.substring(cut + 1, string.length);
  return str2;
}

// 控制悬浮框
var preId = -1;

//搜索历史
// $(document).ready(function(){
//   console.log("000000000000000000000000000000000000000");
//   $("#searchButtonS").bind("click",function(){
//     console.log("11111111111111111111111111111111");
//     $(".sceneSearchId").each(function(){
//       alert($(this).text())
//     });
//   });
  // $("#searchButtonS").click(function(){
  //   console.log("11111111111111111111111111111111");
  //   //$("p").css("background-color","red");
  // });
// });

// 排序
function JsonSort(json, key) {
  var jl = json.length;
  for (var j = 1; j < jl; j++) {
    var temp = json[j],
      val = temp[key],
      i = j - 1;
    while (i >= 0 && json[i][key] < val) {
      json[i + 1] = json[i];
      i = i - 1;
    }
    json[i + 1] = temp;

  }
  for (j = 0; j < jl; j++) {
    json[j]["show"] = json[j][key];
    json[j]["sortType"] = key;
  }
  return json;
}
// app.controller("TypeController", function ($scope, $http) {
//
//   this.tab = 0;
//   function JsonSort(json, key) {
//     var jl = json.length;
//     for (var j = 1; j < jl; j++) {
//       var temp = json[j],
//         val = temp[key],
//         i = j - 1;
//       while (i >= 0 && json[i][key] < val) {
//         json[i + 1] = json[i];
//         i = i - 1;
//       }
//       json[i + 1] = temp;
//
//     }
//     for (j = 0; j < jl; j++) {
//       json[j]["show"] = json[j][key];
//       json[j]["sortType"] = key;
//     }
//     return json;
//   }
//
//   this.selectTab = function (setTab) {
//     this.tab = setTab;
//     var sceneTypeNumI;
//     if (setTab == 1) {
//       sceneTypeNumI = 1;
//       $http({
//         method: 'POST',
//         url: "http://localhost:8080/server/scene/list/type",
//         params: {"scenetype": sceneTypeNumI},
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Access-Control-Allow-Origin': '*',
//           'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
//           'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
//           'Access-Control-Allow-Max-Age': '100'
//         }
//       }).success(function (response) {
//         for (var i = 0; i < sceneNum[sceneTypeNumI]; i++) {
//           $scope.itemList[i] = {
//             id: response[i].sceneId,
//             name: response[i].sceneName,
//             score: response[i].sceneScore,
//             star: response[i].sceneFavor,
//             come: response[i].sceneVisited,
//             wish: response[i].sceneWish,
//             show: response[i].sceneScore,
//             sortType: "score"
//           }
//         }
//         console.log("scene response:" + response[0].sceneName);
//         console.log("111:" + " " + $scope.itemList[2].sortType + " " + sortT);
//         $scope.itemList = JsonSort($scope.itemList, sortT);
//       })
//         .error(function (error) {
//           console.log(error);
//         })
//
//
//     }
//     if (setTab == 2) {
//       sceneTypeNumI = 2;
//       $http({
//         method: 'POST',
//         url: "http://localhost:8080/server/scene/list/type",
//         params: {"scenetype": sceneTypeNumI},
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Access-Control-Allow-Origin': '*',
//           'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
//           'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
//           'Access-Control-Allow-Max-Age': '100'
//         }
//       }).success(function (response) {
//         for (var i = 0; i < sceneNum[sceneTypeNumI]; i++) {
//           $scope.itemList[i] = {
//             id: response[i].sceneId,
//             name: response[i].sceneName,
//             score: response[i].sceneScore,
//             star: response[i].sceneFavor,
//             come: response[i].sceneVisited,
//             wish: response[i].sceneWish,
//             show: response[i].sceneScore,
//             sortType: "score"
//           }
//         }
//         console.log("scene response:" + response[0].sceneName);
//         $scope.itemList = JsonSort($scope.itemList, sortT);
//         console.log("149:" + $scope.itemList[2].name + " " + $scope.itemList[2].sortType + " " + sortT);
//       })
//         .error(function (error) {
//           console.log(error);
//         })
//     }
//   };
//
//   this.isSelectTab = function (checkTab) {
//     return this.tab === checkTab;
//   };
//
//   this.tab = 0;
//
//   this.selectSortTab = function (setTab) {
//     this.tab = setTab;
//     if (setTab == 1) {
//       var length = $scope.itemList.length;
//       console.log("test here length:" + length);
//       $scope.itemList = JsonSort($scope.itemList, 'score');
//       var i;
//       for (i = 0; i < $scope.itemList.length; i++) {
//         $scope.itemList[i].show = $scope.itemList[i].score;
//         $scope.itemList[i].sortType = "评分";
//       }
//     }
//     if (setTab == 2) {
//       $scope.showItemList = JsonSort($scope.itemList, 'star');
//       //$scope.sortType = "收藏";
//       console.log("test yu:" + $scope.sortType);
//       for (i = 0; i < $scope.itemList.length; i++) {
//         $scope.itemList[i].show = $scope.itemList[i].star;
//         $scope.itemList[i].sortType = "收藏";
//       }
//     }
//     if (setTab == 3) {
//       $scope.showItemList = JsonSort($scope.itemList, 'come');
//       $scope.sortType = "足迹";
//       for (i = 0; i < $scope.itemList.length; i++) {
//         $scope.itemList[i].show = $scope.itemList[i].come;
//         $scope.itemList[i].sortType = "足迹";
//       }
//     }
//     if (setTab == 4) {
//       $scope.showItemList = JsonSort($scope.itemList, 'wish');
//       $scope.sortType = "心愿";
//       for (i = 0; i < $scope.itemList.length; i++) {
//         $scope.itemList[i].show = $scope.itemList[i].wish;
//         $scope.itemList[i].sortType = "心愿";
//       }
//     }
//   };
//
//   this.isSelectSortTab = function (checkTab) {
//     return this.tab === checkTab;
//   }
// });

app.controller("RankController", function ($scope) {
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
  };

  this.isSelectTab = function (checkTab) {
    return this.tab === checkTab
  }
});
