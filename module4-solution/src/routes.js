(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Category list page
  .state('categoriesList', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Category items list page
  .state('itemsList', {
    url: '/items/{shortName}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as menuItems',
    resolve: {
      menu_items: ['MenuDataService','$stateParams',
        function (MenuDataService,$stateParams) {
          console.log($stateParams);
          return MenuDataService.getItemForCategory($stateParams.shortName);
      }]
    }
  });

}
})();
