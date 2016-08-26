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

	this.postMessage = function(name,email,message){
		console.log(message);
		
		var bulba = {
			messname:name,
			messemail: email,
			messmess: message
		};
		console.log("ran this.postMessage");
		return $http({
			method: "post",
			url: "/message",
			data: bulba

		});
	};
});
