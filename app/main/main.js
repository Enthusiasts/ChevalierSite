'use strict';

angular.module('chevalierApp.main', ['ngRoute', 'chevalierApp.providers'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'main/main.html',
            controller: 'MainCtrl'
        });
    }])

    .controller('MainCtrl', ['$scope', 'dataFactory', 'idService', function($scope, dataFactory, idService) {
        dataFactory.university.top({page_number: 0, page_size: 6})
            .$promise.then(function(result){
                //Используем meta.length так как content - пока просто объект, не массив.
                //Приветствуются идеи сделать лучше.
                for (var i = 0; i < result.meta.length; i++)
                {
                    //Опять же, сервак возвращает относительные ссылки.
                    //Юзаем фабричный метод remadeMedia, который переделывает относительные ссылки в абсолютные.
                    //Иначе картинки не заведутся.
                    result.content[i].image = dataFactory.remadeMedia(result.content[i].image)
                }
                $scope.universities = result.content;

            });
        $scope.idHandler = function(id){
             var idChosen = $scope.universities[id].id;
            idService.saveChosenUniId(idChosen)
        };

    }])

    .factory('idService', function(){
       var idChosen;
        return {
            saveChosenUniId:function (id){
                idChosen = id;
                console.log(idChosen)
            },
            getChosenUniId:function (){
                return idChosen
            }
        };
    });
/**
 * Created by vlad on 04.10.15.
 */
