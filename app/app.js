'use strict';

// Declare app level module which depends on views, and components
angular.module('chevalierApp', [
  'ngRoute',
  'chevalierApp.main',
  'chevalierApp.about',
  'chevalierApp.courses',
  'chevalierApp.version',
  'chevalierApp.contacts',
  'chevalierApp.providers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
