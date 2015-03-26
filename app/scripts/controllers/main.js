'use strict';

var frangularApp = angular.module('frangularApp');

  frangularApp.controller('ButtonsCtrl', function ($scope) {

    //$scope.currentTemp = 0;
    //$scope.currentTempFetch = temperatureRepository.getTemp().success(
    //  function(data){
    //    $scope.currentTemp = data;
    //  }
    //)
    $scope.timesClicked = 5;

    $scope.click = function(){
      $scope.timesClicked++;
    };
});

//frangularApp.factory('temperatureRepository', function($http){
//
//  var getTemp = $http.get("localhost:3000/currentTemperature");
//
//
//});

