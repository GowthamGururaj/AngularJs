(function() {
  "use strict";
  angular.module("my-app").directive("checkboxDirective", function() {
    return {
      restrict: "E",
      scope: {
        model: "=",
        text: "@text",
        values: "="
      },
      transclude: true,
      templateUrl: "../../views/directives/checkbox-directive.html"
    };
  });
})();
