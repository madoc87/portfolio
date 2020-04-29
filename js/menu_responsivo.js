$( window ).resize(function() {
	var width = $(window).width();
	var el = document.getElementById("html");
	if(width < 901){

  		el.classList.add("nav-overflow");

	}else{

  		el.classList.remove("nav-overflow");
	 }
	 
});

$(function(){

	var opMenu = false;

	$('.mobile-button').click(function(){

		if(opMenu == false){
			opMenu = true;
			$('#mobile-nav').animate({left: "+=300"}, 500);
			$('#index-nav').animate({left: "+=300"}, 500);
			$('#content').animate({left: "+=300"}, 500);
		}else{
			opMenu = false;
			$('#mobile-nav').animate({left: "-=300"}, 500);
			$('#index-nav').animate({left: "-=300"}, 500);
			$('#content').animate({left: "-=300"}, 500);
		}
	})	
});





