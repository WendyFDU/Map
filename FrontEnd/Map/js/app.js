// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','mainmap.controllers','menuitemlist.controllers','itemlist.controllers'
  ,'searchHistory.controllers','myDetail.controllers','register.controllers','nearby.controllers','routePlanning.controllers','myFootprint.controllers','myWish.controllers','myCollection.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('mainmap', {
      url: '/mainmap',
      templateUrl: 'templates/main-map.html',
      controller:'MainMapCtrl'
    })
    .state('menuItemList', {
      url: '/menuItemList',
      templateUrl: 'templates/menu-item-list.html',
      controller:'MenuItemListCtrl'
    })
    .state('itemList', {
      url: '/itemList',
      templateUrl: 'templates/item-list.html',
      controller:'ItemListCtrl'
    })
    .state('allPic', {
      url: '/allPic',
      templateUrl: 'templates/scene-all-pic.html',
      controller:'AllPicCtrl',
      params:{args:{}}
    })
    .state('sceneDetail',{
      url: '/sceneDetail/:IdOfScene',
      cache:'false',
      templateUrl: 'templates/scene-detail.html',
      controller:'SceneDetailCtrl'
    })
    .state('sceneDetailProfile',{
      url: '/sceneDetailProfile',
      cache:'false',
      templateUrl: 'templates/scene-detail-profile.html',
      controller:'SceneDetailProfileCtrl',
      params:{args:{}}

    })
    .state('sceneEvaluation',{
      url: '/sceneEvaluation',
      cache:'false',
      templateUrl: 'templates/scene-evaluation.html',
      controller:'SceneEvaluationCtrl',
      params:{args:{}}
    })
    .state('sceneGoEvaluate',{
      url: '/sceneGoEvaluate',
      cache:'false',
      templateUrl: 'templates/scene-go-evaluate.html',
      controller:'SceneGoEvaluateCtrl',
      params:{args:{}}

    })
    .state('questionnaire',{
      url: '/questionnaire',
      templateUrl: 'templates/scene-questionnaire.html',
      controller:'QuestionnaireCtrl'
    })

    /*-----------------------------------------------------------------*/
    .state('nearby',{
      url: '/nearby',
      templateUrl: 'templates/nearby.html',
      controller:'NearbyCtrl'
    })

    .state('searchHistory',{
      url: '/searchHistory',
      cache:'false',
      templateUrl: 'templates/search-history.html',
      controller:'SearchHistoryCtrl'
    })

    .state('routePlanning',{
      url: '/routePlanning',
      templateUrl: 'templates/route-planning.html',
      controller:'RoutePlanningCtrl'
    })

    .state('myDetail',{
      url: '/myDetail',
      templateUrl: 'templates/my-detail.html',
      controller:'MyDetailCtrl'
    })
    .state('myFootprint',{
      url: '/myFootprint',
      cache:'false',
      templateUrl: 'templates/my-footprint.html',
      controller:'MyFootprintCtrl'
    })
    .state('myWish',{
      url: '/myWish',
      cache:'false',
      templateUrl: 'templates/my-wish.html',
      controller:'MyWishCtrl'
    })
    .state('myCollection',{
      url: '/myCollection',
      cache:'false',
      templateUrl: 'templates/my-collection.html',
      controller:'MyCollectionCtrl'
    })
    .state('myShare',{
      url: '/myShare',
      templateUrl: 'templates/my-share.html',
      controller:'MyShareCtrl'
    })
    .state('myAbout',{
      url: '/myAbout',
      templateUrl: 'templates/my-about.html',
      controller:'MyAboutCtrl'
    })
    /*-----------------------------------------------------------------------------*/

    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller:'RegisterCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html',
      controller:'LoginCtrl'
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);
