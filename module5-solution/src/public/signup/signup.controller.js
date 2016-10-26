(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var $ctrl = this;

  if (UserService.isSignUp()) {
    var user = UserService.getUser();
    $ctrl.firstname = user.firstname;
    $ctrl.lastname = user.lastname;
    $ctrl.email = user.email;
    $ctrl.phonenumber = user.phonenumber;
    $ctrl.short_name = user.short_name;

  }


  $ctrl.signup = function() {
    UserService.signUp({
      firstname: $ctrl.firstname,
      lastname: $ctrl.lastname,
      email: $ctrl.email,
      phonenumber: $ctrl.phonenumber,
      short_name: $ctrl.short_name
    });
  };

  $ctrl.isSignUp = function() {
    return UserService.isSignUp();
  }
};

})();
