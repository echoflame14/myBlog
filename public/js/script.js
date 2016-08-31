//jquery logic to animate the navbar state
var home = $("#home");
var about = $("#about");
var proj = $("#proj");
var cont = $("#contact");


home.click(function(){
	home.addClass("active");
	about.removeClass("active");
	proj.removeClass("active");
	cont.removeClass("active");
});
about.click(function(){
	about.addClass("active");
	home.removeClass("active");
	proj.removeClass("active");
	cont.removeClass("active");
});
proj.click(function(){
	proj.addClass("active");
	about.removeClass("active");
	home.removeClass("active");
	cont.removeClass("active");
});
cont.click(function(){
	cont.addClass("active");
	about.removeClass("active");
	proj.removeClass("active");
	home.removeClass("active");
});
//end jquery logic to anaimate navbar state

//form validation for the user message form
// var val = $("#valBtn");
// var name = $("#name");
// var email = $("#email");
// val.click(function(){
// 	alert(name.value());
// });
$(document).ready(function(){
	new WOW().init();
	//Check to see if the window is top if not then display button
});
