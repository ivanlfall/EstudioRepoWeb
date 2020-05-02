var ubicacion;

function inicio(){
    ubicacion = document.getElementById("ubicacion");
    var miboton = document.getElementById("dameubicacion");

    miboton.onclick=obtener;
}

const obtener = () => {navigator.geolocation.getCurrentPosition(mostrarPosicion, gestion_errores);}

const mostrarPosicion = (pos) => {

    let miubicacion = "";
    miubicacion+=  "Latitud: " + pos.coords.latitude + "<br>";
    miubicacion+=  "Longitud: " + pos.coords.longitude + "<br>";
    miubicacion+=  "Exactitud: " + pos.coords.accuracy + "<br>";

    ubicacion.innerHTML=miubicacion;

}

const gestion_errores = (e) => { 
    alert("Hay un error Wacho: " + e.code + " "+ e.message);
    //if (e.code==1) alert("Debes permitir el acceso a geolocalizacion");
}


window.onload=inicio;