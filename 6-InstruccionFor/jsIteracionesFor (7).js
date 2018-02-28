function Mostrar() {
    var numero;
    var divisores;
    var divisorescantidad = 0;
    numero = parseInt(prompt("Ingrese un numero."));
    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores = i;
            document.write(divisores + " es divisor de " + numero + "</br>");
            divisorescantidad++;
        }
    }
    document.write(divisorescantidad + " divisores fueron encontrados." + "</br>");
}//FIN DE LA FUNCIÓN