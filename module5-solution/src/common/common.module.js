(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://polar-brushlands-90341.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
