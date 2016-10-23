(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;

  service.user = null;

  service.putUser =  function(user) {
    service.user = user;
    console.log('user:', user);
  };

  service.getUser = function() {
    return service.user;
  };
}

})();
