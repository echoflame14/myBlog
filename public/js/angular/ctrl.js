angular.module("app").controller("ctrl",function($scope,srvc){
	$scope.test = srvc.test;
	$scope.posts = srvc.posts;
});
