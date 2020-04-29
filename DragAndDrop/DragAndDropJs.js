
var imagen, destino;

function inicio() {

			imagen = document.getElementById("imagen");
			destino = document.getElementById("zonaDestino");

			imagen.addEventListener("dragstart", arrastrando);

			destino.addEventListener("dragenter", entrando);

			destino.addEventListener("dragover", function(e){
				e.preventDefault();
			});

			destino.addEventListener("drop", soltado);

			destino.addEventListener("dragleave", saliendo);

			imagen.addEventListener("dragend", terminado, false);


		}

function terminado(e) {

  		var elemento = e.target;
  		elemento.style.visibility = "hidden";

}

function arrastrando(e) {

			var codigo = "<img src='" + imagen.getAttribute("src") + "' >";
			e.dataTransfer.setData("Text", codigo);

		}

		function soltado(e){

			e.preventDefault();
			destino.innerHTML=e.dataTransfer.getData("Text");

		}

		function entrando(e){

			e.preventDefault();
			destino.style.borderColor="#40E899";

		}

		function saliendo(e){

			e.preventDefault();
			//destino.style.borderColor="red";
			destino.style.visibility="hidden";
		}

		window.onload=inicio;
