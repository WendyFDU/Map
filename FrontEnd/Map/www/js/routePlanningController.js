var routePlanningModule = angular.module('routePlanning.controllers', ['ionic']);

routePlanningModule.controller('RoutePlanningCtrl',function($scope,$state,$ionicHistory) {

  $scope.po = [116.404, 39.915];
  var map = new BMap.Map("nearby-map");
  map.centerAndZoom(new BMap.Point($scope.po[0],$scope.po[1]), 11);

  $scope.selectedPoint = {
    name:"",
    score:"",
    sortType :"",
    img:""
  }
  var pre = -1;
    var tpl = document.querySelector('.route-planning-item-detail');

  var poi = new Array();
  var marker = new Array();
  var poiNum = 10;
  var xCoordinate, yCoordinate;
  for (var i = 0; i < poiNum; i++) {
    xCoordinate = 116.407852+0.01*i;
    yCoordinate = 39.98031+0.01*i;
    poi[i] = new BMap.Point(xCoordinate,yCoordinate);
    marker[i] = new BMap.Marker(poi[i]); // 创建marker对象
    marker[i].enableDragging(); // marker可拖拽
    marker[i].addEventListener("click", function(e){
      // 有问题
      console.log(i);
      if (i == pre) {
        //改变
        $('.nearby-item-detail').toggle();
      } else if ($('.nearby-item-detail').css("display") == "none") {
        $('.nearby-item-detail').show();
      }
      $scope.selectedPoint = {
        id :0,
        name:"世纪公园",
        score:"9",
        star:"60",
        come:"90",
        wish:"10",
        show:"9",
        sortType :"评分",
        img:"./img/baidu.jpg"
      };
      $scope.$apply();
      pre = i;
    })
    map.addOverlay(marker[i]);
  }

  $scope.$watch('departureInput', function() {
    console.log($scope.departureInput);
  });
  $scope.$watch('destinationInput', function() {
    console.log($scope.destinationInput);
  });
  $scope.planning = function(departureInput, destinationInput){
    console.log("route:"+departureInput + " " + destinationInput);
  }

  $scope.checkTypeList=[{
    id:0,
    name:"上海近代公园",
    checked:true
  },{
    id:1,
    name:"上海工业遗址",
    checked:true

  },{
    id:2,
    name:"上海特色街道",
    checked:true

  }
  ];

  $scope.clickTheCheckbox = function(id){
    console.log(id+" "+$scope.checkTypeList[id].checked);
  }

  $scope.backToMap = function () {
    $ionicHistory.goBack();
  };
});
