//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var importe;
    var conIva;
    importe = parseInt(prompt("Ingrese su importe:"));
    conIva = importe * 1.21;
    document.getElementById("importe").value = conIva;
}

