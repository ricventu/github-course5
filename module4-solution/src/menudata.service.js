(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    var promise = $http({
      method: 'GET',
      url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      return response.data;
    });
    return promise;
  };

  service.getItemForCategory = function(categoryShortName) {
    var promise = $http({
      method: 'GET',
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    }).then(function (response) {
      return response.data.menu_items;
    });
    return promise;
  };
};

})();
