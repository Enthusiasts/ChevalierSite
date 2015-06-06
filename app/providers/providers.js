/**
 * Created by DeBalid on 06.06.2015.
 */
'use strict'; //TODO: разобратьс€, зачем эта строка.

//„тобы была хоть кака€-то архитектура, провайдеры ресурсов выдел€ем в отдельные сервисы.
// астомные провайдеры будут составл€ть свой отдельный модуль (могут быть не только провайдеры ресурсов).
//ѕровайдеры = сервисы + фабрики + константы + значени€; все они - синглтоны.
//  ним можно обращатьс€ в остальном приложении через dependencies.
angular.module('chevalierApp.providers', ['ngResource'])
    //ѕо сути фабрика, содержаща€ resource-объекты, к которым можно обращатьс€ через ключи.
    .factory('dataFactory', function($resource) {
        return {
            teachers: $resource('./data/teacher.json', {}, { //в будущем будет ссылатьс€ на Beast
                query: {method: 'GET', params: {}, isArray: false}
            }),
            files: $resource('./data/file.json', {}, { //аналогично, будет ссылатсь€ на Beast
                query: {method: 'GET', params: {}, isArray: false}
            })
        }
    })