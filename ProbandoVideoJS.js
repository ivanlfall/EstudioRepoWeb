

var mivideo, reproducir, barra, progreso, maximo;
maximo=215;
function comenzar(){

	mivideo = document.getElementById("mivideo");
	reproducir = document.getElementById("reproducir");
	barra = document.getElementById("barra");
	progreso = document.getElementById("progreso");

	reproducir.addEventListener("click",haceElBoton,false);
	barra.addEventListener("click",haceElProgreso,false);
}

function haceElBoton(){

	if ((mivideo.paused==false) && (mivideo.ended==false)) {

		mivideo.pause();
		reproducir.innerHTML="DalePlay";
	}else{

		mivideo.play();
		reproducir.innerHTML="Pausar";
		bucle= setInterval(estadoBarra,500);
		
	}
	

}

function estadoBarra(){

	if (mivideo.ended==false){

		var total = parseInt(mivideo.currentTime*maximo/mivideo.duration);
		progreso.style.width=total+"px";

	}

}

function haceElProgreso(posicion){

	if((mivideo.paused==false)&&(mivideo.ended==false)){

		var ratonX = posicion.pageX-barra.offsetLeft;
		var nuevaPosicion = ratonX*mivideo.duration/maximo;
		mivideo.currentTime=nuevaPosicion;
		progreso.style.width=ratonX+"px";
	}


	
}

window.onload=comenzar;