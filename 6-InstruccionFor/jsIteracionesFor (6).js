function Mostrar() {
    var cantidadpares = 0;
    var numero;
    numero = parseInt(prompt("Ingrese un numero."));
    for (var i = 1; i < numero; i++) {
        if (i % 2 == 0) {
            document.write(i + "</br>");
            cantidadpares++;
        }
    }
    document.write("Numero pares encontrados " + cantidadpares + "</br>");
}//FIN DE LA FUNCIÓN