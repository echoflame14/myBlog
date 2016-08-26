angular.module("app").controller("ctrl",function($scope,srvc){

	$scope.getPosts = srvc.posts().then(function(resp){
		$scope.posts = resp;
	});



	$scope.postMessage = function(name,email,message){
		console.log(name,email,message);
		console.log("got 2 running $scope.postMessage");
		srvc.postMessage(name,email,message).then(function(){
			$scope.name = "";
			$scope.email = "";
			$scope.message ="";
			alert("Sent");
		});
	};
});
