angular.module("app").controller("ctrl",function($scope,srvc){

	$scope.getPosts = srvc.posts().then(function(resp){
		$scope.posts = resp;
	});



	$scope.hey = function(){

		srvc.postMessage($scope.name,$scope.email,$scope.message);
	};
});
