/**
 * Created by DeBalid on 06.06.2015.
 */
'use strict'; //TODO: �����������, ����� ��� ������.


//Чтобы была хоть какая-то архитектура, провайдеры ресурсов выделяем в отдельные сервисы.
//Кастомные провайдеры будут составлять свой отдельный модуль (могут быть не только провайдеры ресурсов).
//Провайдеры = сервисы + фабрики + константы + значения; все они - синглтоны.
//К ним можно обращаться в остальном приложении через dependencies.
angular.module('chevalierApp.providers', ['ngResource'])
    //По сути фабрика, содержащая resource-объекты, к которым можно обращаться через ключи.
    .factory('dataFactory', function($resource) {
        var api = 'http://95.213.194.21:8080';
        return {
            api: api,
            //Прямой адрес к медиа.
            remadeMedia: function (media) {return api + "/media/" + media},
            /*teachers: $resource('./data/teacher.json', {}, { //в будущем будет ссылаться на Beast
                query: {method: 'GET', params: {}, isArray: false}
            }),
            files: $resource('./data/file.json', {}, { //аналогично, будет ссылатсья на Beast
                query: {method: 'GET', params: {}, isArray: false}
            }),*/
            university: $resource(api + '/university/', {}, {
                all: {url: api + '/university/all/:count', method: 'GET', params: {}, isArray: false}
            })/*,
            courses: $resource(api+'/course/top/?univeristy_id=0&page_number=0&page_size=5', {}, {
                all: {url: api +}
            })*/
        }
    })