'use strict';

angular.module('chevalierApp.view2', ['ngRoute', 'chevalierApp.providers'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'dataFactory', function($scope, dataFactory) {
      dataFactory.university.all({count: 6})
          .$promise.then(function(result){
              //���������� meta.length ��� ��� content - ���� ������ ������, �� ������.
              //�������������� ���� ������� �����.
              for (var i = 0; i < result.meta.length; i++)
              {
                  //����� ��, ������ ���������� ������������� ������.
                  //����� ��������� ����� remadeMedia, ������� ������������ ������������� ������ � ����������.
                  //����� �������� �� ���������.
                  result.content[i].image = dataFactory.remadeMedia(result.content[i].image)
              }
              $scope.universities = result.content;
          });
}]);