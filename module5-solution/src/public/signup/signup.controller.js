(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var $ctrl = this;


  $ctrl.signup = function() {
    UserService.signUp({
      firstname: $ctrl.firstname,
      lastname: $ctrl.lastname,
      email: $ctrl.email,
      phonenumber: $ctrl.phonenumber,
      short_name: $ctrl.short_name
    });
  };
};

})();
