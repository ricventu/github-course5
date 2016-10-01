(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService); //singleton

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var itemCart = this;

  itemCart.itemList = ShoppingListCheckOffService.getItemsToBuy();
  this.buy = function (index) {
    ShoppingListCheckOffService.buy(index);
  }
}

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBought = this;

  itemBought.itemList = ShoppingListCheckOffService.getItemsBought();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var defaultShoppingList = [
    "Buy 10 cookies",
    "Buy 10 cookies",
    "Buy 15 cookies",
    "Buy 20 cookies",
    "Buy all cookies in the shop!",
  ];
  var tobuy = defaultShoppingList;
  var bought = [];

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItemsToBuy = function () {
    return tobuy;
  };
  service.getItemsBought = function () {
    return bought;
  };

  service.buy = function(index) {
    var item = tobuy.splice(index,1);
    bought.push(item[0]);
  }
}

})();
