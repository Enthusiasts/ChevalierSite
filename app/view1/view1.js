'use strict';

angular.module('chevalierApp.view1', ['ngRoute', 'chevalierApp.providers'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', 'dataFactory', function($scope, dataFactory) {
        var result = dataFactory.teachers.query();
        result.$promise.then(function(result) {
            //Так вот. Сосбтвенно нахера нам в джейсоне type указывать надо.
            //Где-то на этом этапе нам нужно проверять, чему равен result.type
            //Если это, например, "teacher", то рисовать одну страницу.
            //Если это "file", то другую.
            //По идее этот кусок кода (всё внутри контроллера) должен уйти в index. TODO: подумать.
            //alert(result.type);
            $scope.teachers = result.content;
        });
  }]);