angular.module('calculator')
.factory('calculator', function(){
    return {
      bla: function(value){
        return value * 100;
      }
    }
  });
