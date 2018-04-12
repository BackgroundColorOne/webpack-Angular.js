 import angular from 'angular'
 import uirouter from '@uirouter/angularjs'
 import routes from './app.router'

 angular.module('app',[uirouter])
     .controller('appCtrl', ['$scope', '$http', function ($scope, $http) {console.log('这是appCtrl')}])
     .config(routes)
     .directive('mainPage', function() {
       return {
         restrict: 'EA',
         scope: false,
         template: '<div>这是home</div>',
         replace: true
       }
     })

