(function() {
  "use strict";
  angular.module("my-app").directive("dropdownDirective", function() {
    return {
      restrict: "E",
      scope: {
        model: "=",
        label: "@label",
        values: "="
      },
      transclude: true,
      templateUrl: "../../views/directives/dropdown-directive.html"
    };
  });
})();
