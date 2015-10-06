/**
 * Created by Vlad on 05.10.2015.
 */
//You need to add 'ngRoute' as a dependency in your app
angular.module('chevalierApp.test', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        //configure the routing rules here
        $routeProvider.when('/test', {
            templateUrl: 'test/test.html/',
            controller: 'PagesCtrl'
        });
        
    }])
    .controller('PagesCtrl', function ($scope, idService) {

        $scope.chosenId = idService.getChosenUniId();
    });