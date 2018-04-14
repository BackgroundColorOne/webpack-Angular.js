 import angular from 'angular'
 import uirouter from '@uirouter/angularjs'
 import routes from './app.router'
 import main from './view'

 angular.module('app',[uirouter,main])
     .controller('appCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
     }])
     .config(routes)
     .config(['$httpProvider', ($httpProvider) => {
       $httpProvider.defaults.withCredentials = true
     }])

