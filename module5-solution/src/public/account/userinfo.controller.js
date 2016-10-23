(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['UserService', 'menuItem'];
function UserInfoController(UserService, menuItem) {
  var $ctrl = this;

  $ctrl.menuItem = menuItem;
  $ctrl.user = UserService.getUser();
  $ctrl.isSignUp = function () {
    return UserService.isSignUp();
  }
};

})();
