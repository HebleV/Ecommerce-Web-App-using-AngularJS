 angular.module('homeyantra', [])
    .controller('addProductController', ['$scope', function($scope) {
      $scope.tvs = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.tvs.push(this.text);
          $scope.text = '';
        }
      };
    }]);