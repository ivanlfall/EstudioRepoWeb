
var imagen, destino;

function inicio(){

			imagen = document.getElementById("imagen");
			destino = document.getElementById("zonaDestino");

			imagen.addEventListener("dragstart", arrastrando);

			destino.addEventListener("dragenter", function(e){
				e.preventDefault();
			});

			destino.addEventListener("dragover", function(e){
				e.preventDefault();
			});

			destino.addEventListener("drop", soltado);

		}

		function arrastrando(e){

			var codigo = "<img src='" + imagen.getAttribute("src") + "' >";
			e.dataTransfer.setData("Text", codigo);

		}

		function soltado(e){

			e.preventDefault();
			destino.innerHTML=e.dataTransfer.getData("Text");

		}

		window.onload=inicio;