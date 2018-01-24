(function() {
  "use strict";
  angular.module("my-app").directive("textareaDirective", function() {
    return {
      restrict: "E",
      scope: {
        model: "=",
        label: "@label",
        max: "="
      },
      transclude: true,
      templateUrl: "../../views/directives/textarea-directive.html"
    };
  });
})();
