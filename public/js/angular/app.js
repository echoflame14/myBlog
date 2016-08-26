angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("/home", {
			url:"/",
			templateUrl:"html/views/home.html",
			controller: "ctrl"
		})
		.state("/about", {
			url:"/about",
			templateUrl:"html/views/about.html",
			controller: "ctrl"
		})
		.state("/projects", {
			url:"/proj",
			templateUrl: "html/views/proj.html",
			controller: "ctrl"

		})
		.state("/contact", {
			url:"/contact",
			templateUrl:"html/views/contact.html",
			controller: "ctrl"
		});
});
