var app = angular.module('caffeinehit.controllers', []);

//                 injecting dependencies ($scope is an Angular service)
app.controller("YelpController", function ($scope, YelpService) {
	$scope.yelp = YelpService;
});
