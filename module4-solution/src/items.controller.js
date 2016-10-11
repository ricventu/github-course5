(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'menu_items', '$stateParams'];
function ItemsController(MenuDataService, menu_items, $stateParams) {
  var menu = this;
  menu.short_name = $stateParams.shortName;
  menu.menu_items = menu_items;
}

})();
