

var miaudio, reproducir, barra, progreso, maximo;
maximo=215;
function comenzar(){

	miaudio = document.getElementById("miaudio");
	reproducir = document.getElementById("reproducir");
	barra = document.getElementById("barra");
	progreso = document.getElementById("progreso");

	reproducir.addEventListener("click",haceElBoton,false);
	barra.addEventListener("click",haceElProgreso,false);
}

function haceElBoton(){

	if ((miaudio.paused==false) && (miaudio.ended==false)) {

		miaudio.pause();
		reproducir.innerHTML="Play";
	}else{

		miaudio.play();
		reproducir.innerHTML="Pausar";
		bucle= setInterval(estadoBarra,500);
		
	}
	

}

function estadoBarra(){

	if (miaudio.ended==false){

		var total = parseInt(miaudio.currentTime*maximo/miaudio.duration);
		progreso.style.width=total+"px";

	}

}

function haceElProgreso(posicion){

	if((miaudio.paused==false)&&(miaudio.ended==false)){

		var ratonX = posicion.pageX-barra.offsetLeft;
		var nuevaPosicion = ratonX*miaudio.duration/maximo;
		miaudio.currentTime=nuevaPosicion;
		progreso.style.width=ratonX+"px";
	}


	
}

window.onload=comenzar;