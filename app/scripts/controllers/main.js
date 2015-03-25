'use strict';
angular
  .module('frangularApp')
  .controller('ButtonsCtrl', function ($scope) {

    $scope.timesClicked = 5;

    $scope.click = function(){
      $scope.timesClicked++;
    };
});


window.DonutRepositoryMock = function($http) {
  this.$http = $http;

  this.fetchDonuts = function(size, filling, glaze, hasHole) {
    // just get data from a flat JSON file
    return this.$http.get('/mockData/temperature.json')
      .then(function(response) {
        return response.data.results;
      });
  };
}

donutModule.factory('donutRepository',
  ['$http', 'configModel', function($http, configModel) {
    if (configModel.mocksEnabled) {
      return new DonutRepositoryMock($http);
    } else {
      return new DonutRepository($http);
    }
  }]);
