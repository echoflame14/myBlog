angular.module("app").service("srvc", function($http){
	this.posts = function(){
		return $http.get("/posts").then(function(response){
			console.log("then in service completed", response);
			return response.data;
		});
	};
	this.makePost = function(){
		console.log("make a post bruh");
	};

	this.postMessage = function(name, email, message){
		return $http.post("/message", name, email, message).then(function(){
			console.log("done in the service sent post");
		});
	};
});
