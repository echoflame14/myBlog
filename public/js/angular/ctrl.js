angular.module("app").controller("ctrl",function($scope,srvc,$location){

	$scope.getPosts = srvc.posts().then(function(resp){
		$scope.posts = resp;
	});
	function sayHi(){

	}
	var navBar = $("#mainNav");
	function checkView(req){

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

		srvc.postMessage(name,email,message).then(function(resp){
			$scope.name = "";
			$scope.email = "";
			$scope.message ="";
			console.log("the response from srvc.postMessage = ", resp);
			alert("Sent");
		});
	};

	$scope.postPost = function(text, title, time, imgSrc, imgAlt){
		console.log(text, title, time, imgSrc, imgAlt);
		srvc.postPost(text, title, time, imgSrc, imgAlt).then(function(){
			$scope.text = "";
			$scope.title = "";
			$scope.time = "";
			$scope.imgSrc = "";
			$scope.imgAlt = "";
			alert("posted");
		});
	};

	$scope.ratePost = function(id, rating){
		console.log("id = ", id, "rating = ", rating);
		srvc.ratePost(id, rating).then(function(resp){
			console.log("This is what we get back from srvc.ratePost", resp);
		});
	};

	$scope.delPost = function(del){
		console.log(del);
		srvc.delPost(del).then(function(){
			$scope.del = "";

			alert("deleted");
		});
	};

	$scope.messages = srvc.getMessages().then(function(resp){
		console.log(resp);
		$scope.messages = resp.data;
	});

	$scope.ratings = srvc.getRatings().then(function(resp){
		console.log(resp);
		$scope.ratings = resp.data;
	});

});
