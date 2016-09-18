(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";

  $scope.lunchCheck = function () {
    var numberOfItems = calculateNumberOfItems($scope.items);
    console.log(numberOfItems);
    if (numberOfItems <= 0) {
      $scope.message = "Please enter data first";
      $scope.message_style = { 'color': 'red' };
      $scope.items_style = { 'border-color': 'red' };
    } else if (numberOfItems <= 3) {
      $scope.message = "Enjoy!";
      $scope.message_style = { 'color': 'green' };
      $scope.items_style = { 'border-color': 'green' };
    } else {
      $scope.message = "Too much!";
      $scope.message_style = { 'color': 'green' };
      $scope.items_style = { 'border-color': 'green' };
    }
  };

  function calculateNumberOfItems(string) {
    var count = 0;
    if (string === undefined) {
      return count;
    }
    var items = string.split(',');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      //i do NOT consider and empty item, i.e., `, ,` as an item towards to the count
      if (item.trim() != '') {
        count++;
      }
    }
    return count;
  };
}

})();
