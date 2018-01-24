(function () {
    'use strict';  
    angular.module('my-app').directive('inputDirective',
    function () {
      return {
        restrict: 'E',
        scope: {
            model: '=',
            type:'@type',
            label:'@label',
            max:'='                        
        },
        transclude:true,
        templateUrl: '../../views/directives/input-directive.html'    
      };
    })
  })();