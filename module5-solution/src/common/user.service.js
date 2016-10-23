(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;

  service.signup = true;

  //service.user = null;
  service.user = {
      firstname: 'Pippo',
      lastname: 'Pluto',
      email: 'pippo@pluto.com',
      phonenumber: '1234',
      short_name: 'A1'
  };


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
