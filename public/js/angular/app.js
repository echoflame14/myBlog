angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("/home", {
			url:"/",
			templateUrl:"html/views/home.html"
		})
		.state("/about", {
			url:"/about",
			templateUrl:"html/views/about.html"
		})
		.state("/projects", {
			url:"/proj",
			templateUrl: "html/views/proj.html"
		})
		.state("/contact", {
			url:"/contact",
			templateUrl:"html/views/contact.html"
		});
});
