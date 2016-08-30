angular.module("app").service("srvc", function($http){
	this.posts = function(){
		return $http.get("/posts").then(function(response){

			return response.data;
		});
	};
	this.makePost = function(){

	};

	this.postMessage = function(name,email,message){


		var bulba = {
			messname:name,
			messemail: email,
			messmess: message
		};

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

	this.ratePost = function(id, rating){
		var arr = {
			postid: id,
			rating: rating
		};
		return $http({
			method:"post",
			url:"/secret/postrating",
			data: arr
		});
	};

	this.delPost = function(del){
		return $http({
			method: "delete",
			url: "/secret/" + del,

		});
	};

	this.getMessages = function(){
		return $http({
			method: "get",
			url: "/secret/mess"
		}).then(function(err,resp){
			if(err){
				return err;
			}
			else{
				return resp.data;
			}
		});
	};
	this.getRatings = function(){
		return $http({
			method: "get",
			url: "/secret/ratings"
		}).then(function(err,resp){
			if(err){
				return err;
			}
			else{
				return resp.data;
			}
		});
	};

});
