(function () {
"use strict";

angular.module('common')
.directive('shortnameValidator', ShortnameValidatorDirective);

ShortnameValidatorDirective.$inject = ['MenuService'];
function ShortnameValidatorDirective(MenuService) {
  var ddo = {
    restrict: 'AE',
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      ctrl.$asyncValidators.short_name = function (modelValue, viewValue) {
        var promise = MenuService.getMenuItem(modelValue);
        promise.then(function () {
          return true;
        }, function() {
          return false;
        }).catch (function () {
          return false;
        })
        return promise;
      };
    },
  };
  return ddo;
};

})();
