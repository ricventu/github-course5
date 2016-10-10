(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'menu_items'];
function ItemsController(MenuDataService, menu_items) {
  var menu = this;
  menu.menu_items = menu_items;
  console.log(menu);
}

})();
