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
