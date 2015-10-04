/**
 * Created by vlad on 04.10.15.
 */
angular.module('chevalierApp.courses', ['ngRoute', 'chevalierApp.providers'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/courses', {
            templateUrl: 'courses/courses.html',
            controller: 'CoursesCtrl'
        });
    }])
    .controller('CoursesCtrl')