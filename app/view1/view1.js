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
            //��� ���. ���������� ������ ��� � �������� type ��������� ����.
            //���-�� �� ���� ����� ��� ����� ���������, ���� ����� result.type
            //���� ���, ��������, "teacher", �� �������� ���� ��������.
            //���� ��� "file", �� ������.
            //�� ���� ���� ����� ���� (�� ������ �����������) ������ ���� � index. TODO: ��������.
            //alert(result.type);
            $scope.teachers = result.content;
        });
  }]);