angular.module("app").service("srvc", function($http){
	this.test = "working";
	this.getTime = function(){
		var monthNames = [
		  "January", "February", "March",
		  "April", "May", "June", "July",
		  "August", "September", "October",
		  "November", "December"
		];
		var date = new Date();
		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();
		var formatedDate = monthNames[monthIndex] + " " + day + ", " + year;
		return formatedDate;
	};
	this.posts = function(){
		return $http.get("/posts").then(function(response){
			console.log("then in service completed", response);
			return response.data;
		});
	};
	this.makePost = function(){
		console.log("make a post bruh");
	};
});
