/**
 * Created by vlad on 04.10.15.
 */
/**
 * Created by vlad on 04.10.15.
 */
angular.module('chevalierApp.about', ['ngRoute', 'chevalierApp.providers'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about/about.html',
            controller: 'AboutsCtrl'
        });
    }])
    .controller('AboutsCtrl')