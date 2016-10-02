(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      title: '@',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.found = [];
  menu.title = "Menu Choice";
  menu.search = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then(function (response) {
      menu.found = response;
    })
  }
  menu.removeItem = function (index) {
    menu.found.splice(index,1);
  }
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var promise = $http({
      method: 'GET',
      url: ( ApiBasePath + "/menu_items.json")
    })
    .then(function (response) {
        // process result and only keep items that match
        var resultItems = response.data;
        var foundItems = resultItems.menu_items;

        // return processed items
        return foundItems;
    })
    return promise;
  };
}

})();
