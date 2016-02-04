'use strict'
var app = angular.module('gh-pages', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
});

app.controller('MainController', ['$scope', '$state', function($scope, $state) {
	$scope.hello = 'hello!';
}]);