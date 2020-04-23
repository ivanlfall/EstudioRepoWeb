
function Ejecuta(){

	//document.getElementsByTagName("p")[0].onclick=MjeDeAlerta;
	//document.getElementById("importante").onclick=MjeDeAlerta;

	/*for (var i = 0; i < document.getElementsByTagName("p").length; i++) {
		document.getElementsByTagName("p")[i].onclick=MjeDeAlerta;				// Con el for recorremos todos los elementos <P>
	}*/ 

	//var resultado = document.getElementsByClassName("importante")[0].onclick=MjeDeAlerta;



	var z = document.querySelectorAll(".importante").onclick=MjeDeAlerta;


}




function MjeDeAlerta(){

	alert("Este es el mensaje de alerta");
}

window.onload=Ejecuta;