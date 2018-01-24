(function() {
  "user strict";
  angular.module("my-app").controller("HomeController", Implementation);
  Implementation.$Inject = ["$scope", "$rootScope"];
  function Implementation($scope, $rootScope) {
    $scope.inputModel = {
      data: "",
      data2: "",
      data3: "",
      data4: ""
    };
    $scope.textareaModel = {
      data: "",
      data2: "",
      data3: "",
      data4: ""
    };
    $scope.dropdownModel = {
      data: "",
      data2: ""
    };
    $scope.sampleData = [
      "one",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten"
    ];

    $scope.checkboxModel = {
      selected: ""
    };
  }
})();
