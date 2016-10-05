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
  menu.message = "";
  menu.title = "Menu Choice";

  menu.search = function () {
    menu.found = [];
    if (menu.searchTerm === undefined || menu.searchTerm.trim() == '') {
      menu.message = "Please enter data first";
      menu.search_style = { 'border-color': 'red' };
    } else {
      menu.search_style = { 'border-color': '#ccc' };
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm.trim());
      promise.then(function (response) {
        menu.found = response;
        if (menu.found.length < 1) {
          menu.message = "Ops.. nothing found :(";
        } else {
          menu.message = "";
        }
      }, function (response) {
        menu.message = "Ops.. an error is occurred :(";
      });
    }
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
        var resultItems = response.data.menu_items;
        var foundItems = [];
        for (var i = 0; i < resultItems.length; i++) {
          var item = resultItems[i];
          if (item.description.includes(searchTerm)) {
            foundItems.push(item);
          }
        }

        // return processed items
        return foundItems;
    });
    return promise;
  };
}

})();
