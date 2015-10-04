/**
 * Created by vlad on 04.10.15.
 */
angular.module('chevalierApp.contacts', ['ngRoute', 'chevalierApp.providers'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl: 'contacts/contacts.html',
            controller: 'ContactsCtrl'
        });
    }])
    .controller('ContactsCtrl')