angular.module("app").controller("ctrl",function($scope,srvc,$location){

	$scope.getPosts = srvc.posts().then(function(resp){
		$scope.posts = resp;
	});
	function sayHi(){
		console.log("hi");
	}
	var navBar = $("#mainNav");
	function checkView(req){
		console.log($location.$$url);
		//jquery logic to animate the navbar state
		var home = $("#home");
		var about = $("#about");
		var proj = $("#proj");
		var cont = $("#contact");
		if($location.$$url === "/contact"){
				cont.addClass("active");
				about.removeClass("active");
				proj.removeClass("active");
				home.removeClass("active");
		}
		if($location.$$url === "/home"){
				home.addClass("active");
				about.removeClass("active");
				cont.removeClass("active");
				proj.removeClass("active");
		}
		if($location.$$url === "/about"){
				about.addClass("active");
				home.removeClass("active");
				cont.removeClass("active");
				proj.removeClass("active");
		}
		if($location.$$url === "/proj"){
				proj.addClass("active");
				about.removeClass("active");
				cont.removeClass("active");
				home.removeClass("active");
		}
	}
	$scope.$on('$stateChangeSuccess', function () {
  // do something
		sayHi();
		checkView();
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
