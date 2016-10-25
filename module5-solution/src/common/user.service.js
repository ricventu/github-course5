(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;

  service.signup = false;

  service.user = null;

  service.signUp =  function(user) {
    service.user = user;
    service.signup = true;
  };

  service.getUser = function() {
    return service.user;
  };

  service.isSignUp = function() {
    return service.signup !== false;
  }

  service.signOut = function() {
    return service.signup = false;
  }
}

})();
