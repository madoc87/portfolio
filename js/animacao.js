
function playStop(name){
	//	se a palavra "animated" não estiver no arquivo de origem da imagem:
	if (document.getElementById(name).src.indexOf('animated')==-1){
		//	então mostre a imagem animada:
		document.getElementById(name).src="images/gifs/"+name+"-animated.gif";
	}
	else {
		// mais mostre a imagem padrão:
		document.getElementById(name).src="images/gifs/"+name+"-thumb.png";
	}
}
