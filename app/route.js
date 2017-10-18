angular.
  module('homeyantra').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<tv-list></tv-list>'
        }).
        when('/:Id', {
          template: '<tv-detail></tv-detail>'
        }).
         when('/add.html',{
          controller: 'addProductController'
         });

        // otherwise('/add.htm');
    }
  ]);