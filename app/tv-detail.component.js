angular.
  module('tvDetail').
  component('tvDetail', {
    template: '{{$ctrl.Id}}</span>',
    controller: ['$routeParams',
      function tvDetailController($routeParams) {
        this.phoneId = $routeParams.phoneId;
      }
    ]
  });