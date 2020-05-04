//Verifica o redimencionamento da tela < 900px entao adiciona a classe nav-overflow para ativar o menu mobile-nav 
$( window ).resize(function() {
	var width = $(window).width();
	console.log(width);
	var el = document.getElementById("html");

	if(width < 901){

  		el.classList.add("nav-overflow");

	}else{
  		el.classList.remove("nav-overflow");
	 }
	 
});

$(function(){

	// Verificar tamanho da tela < 900px entao adiciona a classe nav-overflow para ativar o menu mobile-nav 
	var width = $(document).width();
	var el = document.getElementById("html");
	if(width < 901){

  		el.classList.add("nav-overflow");

	}else{
  		el.classList.remove("nav-overflow");
	 }

	var opMenu = false;

	// Desloca com animate para a direita o menu mobile e o body em 300px
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

	// Anima o menu para uma transicao mais suave e caso o menu mobile esteja aberto fecha após o click
	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top-45;

		if(opMenu == true){
			opMenu = false;
			$('#mobile-nav').animate({left: "-=300"}, 500);
			$('#index-nav').animate({left: "-=300"}, 500);
			$('#content').animate({left: "-=300"}, 500);
		}
		$('html, body').animate({'scrollTop':offSetTop});

		return false;
	});

});

