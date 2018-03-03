//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var largo = parseInt(document.getElementById("largo").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var perimetro = largo + largo + ancho + ancho;
    var alambre = perimetro * 6;
    alert("Se necesitan " + alambre + " metros de alambre.");
}

