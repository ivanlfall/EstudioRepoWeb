var origen, destino;

function inicio(){
  origen = document.getElementById("cajaImagen");
  destino = document.getElementById("zonaDestino");

  var imagenes = document.querySelectorAll("#cajaImagen img");
  for (let i=0 ; i<imagenes.length; i++){

    imagenes[i].addEventListener("dragstart", arrastrando, false);
    if (i!=1){
      imagenes[i].addEventListener("dragend", dejandoArrastre);  
    }
    
  }

  destino.addEventListener("dragenter", entrando, false);
  destino.addEventListener("dragover", function(e){
    e.preventDefault();
  },false);
  destino.addEventListener("drop", soltado, false);

  destino.addEventListener("dragleave", saliendo);

} //---------------- fin inicio---------------------
function arrastrando(e){
  var elemento = e.target;
  e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}

function soltado(e){
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  if (id!="cerrosietecolores"){
    let src = document.getElementById(id).src;
    destino.innerHTML="<img src='"+src+"' height='300' width='600'>";
  }else{
    destino.innerHTML="La imagen no es admitida";
    destino.style.borderColor="red";
  }
}

function entrando(e){
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  if (id=="cerrosietecolores"){
    destino.style.borderColor="red";
  }else{
    destino.style.borderColor="green";
  }
}

function saliendo(e){
  e.preventDefault();
  destino.style.borderColor="yellow";
}

function dejandoArrastre(e){
  let elemento = e.target;
  elemento.style.visibility="hidden";

}


window.onload=inicio;
