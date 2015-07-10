'use strict';

// Declare app level module which depends on views, and components
angular.module('chevalierApp', [
  'ngRoute',
  'chevalierApp.view1',
  'chevalierApp.view2',
  'chevalierApp.version',
  'chevalierApp.providers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view2'});
}]);
