angular.module("app").controller("ctrl",function($scope,srvc){
	$scope.test = srvc.test;
	$scope.getPosts = srvc.posts().then(function(resp){
		$scope.posts = resp;
	});
	$scope.counter = 0;
	$scope.makePost = function(){
		alert("hey");
	};

});
