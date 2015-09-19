angular.module('calculator')
.directive('calculator', function(calculator){
    return {
      restrict: 'E',
      templateUrl: 'templates/calculator.directive.html',
      controller: function($scope){
        $scope.calc = calculator.bla;
      }
    }
  })
