 import angular from 'angular'
 import uirouter from '@uirouter/angularjs'
 import b from './view/b'
 import routes from './app.router'
 // 测试
 b.b()
 //var app = angular.module('app',['uirouter'])不能用引号
 var app = angular.module('app',[uirouter])
 app.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {

 }])
 app.config(routes)
 app.directive('mainPage', function() {
   return {
     restrict: 'EA',
     scope: false,
     template: '<div>这是home</div>',
     replace: true
   }
 })

