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



	this.postPost = function(text, title, time, imgSrc, imgAlt){

		var arr = {
			posttext: text,
			posttitle: title,
			posttime: time,
			postimgsrc: imgSrc,
			postimgalt: imgAlt
		};

		return $http({
			method: "post",
			url: "/secret/post",
			data: arr
		});
	};


	this.delPost = function(del){
		return $http({
			method: "delete",
			url: "/secret/" + del,

		});
	};
});
