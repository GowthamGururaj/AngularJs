'use strict';

angular.module('my-app', [
 'ngRoute',
 'ngMaterial',
 'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
    // Routes will be here
    $routeProvider.when('/Index', {
        templateUrl: '../views/partials/home.html',
        controller: 'HomeController'
    });

    $routeProvider.otherwise({
        redirectTo: '/Index'
    });
}]);
