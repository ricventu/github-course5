(function () {
'use strict';

angular.module('Data')
.component('categoriesList', {
  templateUrl: 'src/templates/categories-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
