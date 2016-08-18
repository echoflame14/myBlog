angular.module("app").service("srvc", function(){
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
	this.posts = {
		post1:{
			title: "LET'S DO THIS!",
			time: this.getTime(),
			imgAlt: "coming soon",
			imgSrc: "img/day-1.jpg",
			article: "Today I start my blog. Writing anything other than code feels strange to me.. I've been at DevMountain for 7 weeks now."
		},
		post0: {
			title: "HEY THIS IS A TITLE",
			time: this.getTime(),
			imgSrc: "https://static.pexels.com/photos/2752/city-sunny-people-street.jpg",
			imgAlt: "New York",
			article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}

	};
});
