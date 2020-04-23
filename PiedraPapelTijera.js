	var btnStart, btnPiedra, btnPapel, btnTijera;
	var lienzo, pincel, lienzoUsuario;
	const posUsuario = 270;
	var seleccion = 0;


	function inicio(){

		btnStart = document.getElementById("btnStart");
		btnPiedra = document.getElementById("piedra");
		btnPapel = document.getElementById("papel");
		btnTijera = document.getElementById("tijera");

		lienzo = document.getElementById("lienzo");
		pincel = lienzo.getContext("2d");
		
		lienzoUsuario = document.getElementById("pantallaUsuario");
		pincel2 = lienzoUsuario.getContext("2d");
		

		btnStart.addEventListener("click", haceStart);
		btnPiedra.onclick= () =>{ lienzoUsuario.width=lienzoUsuario.width; seleccion = 1; dibujaPiedra(pincel2, posUsuario)};
		btnPapel.onclick= () =>{ lienzoUsuario.width=lienzoUsuario.width; seleccion = 2; dibujaPapel(pincel2, posUsuario) };
		btnTijera.onclick= () =>{ lienzoUsuario.width=lienzoUsuario.width; seleccion = 3; dibujaTijera(pincel2, posUsuario)};

		

	}

	// Se comparan los resultados entre el usuario y la maquina, caso de no ingresar usuario un valor, pide hacerlo.
	function muestraResultadoJuego(selec, res){

		if (selec==0){

			document.getElementById("muestra").innerHTML= "DEBES ELEGIR UNA OPCIÓN" ;
		}else if (selec==res) {

			document.getElementById("muestra").innerHTML= "ES UN EMPATE" ;
		}else if (selec==1 && res==2 || selec==2 && res==3 || selec==3 && res==1){

			document.getElementById("muestra").innerHTML= "HAS PERDIDO, SIGUE INTENTANDOLO!" ;
		}else{

			document.getElementById("muestra").innerHTML= "HAS GANADO!! FELICIDADES" ;
		}

	}


	function accionRandom(){ // Me va a generar la seleccion random
		const min = 1;
		const max = 4;

		var accion = Math.floor(Math.random() * (max - min)) + min;

		return accion;

	}

	function imprimeResultadoAccion(resultado){ // Dibuja los resultados dependiendo accion


		switch (resultado){

			case 1: 

				dibujaPiedra();
			break;
			case 2:

				dibujaPapel();
			break;
			default:

				dibujaTijera();
			break;

		}
	}


	// Funciones para dibujar cada accion
	function dibujaPiedra(lapiz = pincel, pos = 0){

		lapiz.beginPath();
		lapiz.font = "bold 22px sans-serif";
		lapiz.fillText("PIEDRA",330-pos,150);
	}

	function dibujaPapel(lapiz = pincel, pos = 0){

		lapiz.beginPath();
		lapiz.font = "bold 22px sans-serif";
		lapiz.fillText("PAPEL",330-pos,150);
	}

	function dibujaTijera(lapiz = pincel, pos = 0){

		lapiz.beginPath();
		lapiz.font = "bold 22px sans-serif";
		lapiz.fillText("TIJERA",330-pos,150);
	} // ---------------------------------------------------

	function haceStart(){ // Funcionalidad al iniciar juego

		seleccion = 0;
		lienzoUsuario.width=lienzoUsuario.width;
		document.getElementById("muestra").innerHTML= "" ;
		var cont = 3;

		var conteo = setInterval(x =>{

			lienzo.width=lienzo.width;

			if (cont==0) {
				clearInterval(conteo);
				var res = accionRandom();
				imprimeResultadoAccion(res);
				muestraResultadoJuego(seleccion, res);
			}

			
			pincel.beginPath();
			pincel.font = "bold 40px sans-serif";
			pincel.fillText(""+cont,230,150);
			cont--;
			
			} ,1000);

	}//---------------------------------------------------





	
window.onload=inicio;