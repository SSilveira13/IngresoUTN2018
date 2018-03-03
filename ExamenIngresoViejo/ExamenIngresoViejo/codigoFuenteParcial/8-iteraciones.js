//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var respuesta = "si";
    var numero;
    var numerosPar = 0;
    var acumulador = 0;
    var contador = 0;
    var promedio;
    var max;
    var min;
    var flag = true;
    while (respuesta == "si") {
        numero = parseInt(prompt("Ingrese un numero mayor a cero:"));
        while (numero < 0) {
            numero = parseInt(prompt("Error. Ingrese un numero mayor a cero:"));
        }
        if (numero % 2 == 0) {
            numerosPar++;
        }
        acumulador += numero;
        contador++;
        if (numero > max || flag == true) {
            max = numero;
        }
        if (numero < min || flag == true) {
            min = numero;
            flag = false;
        }
        respuesta = prompt("¿Desea seguir ingresando numeros? <Si/No>");
        respuesta = respuesta.toLowerCase();
    }
    promedio = acumulador / contador;
    document.write("Cantiadad de numeros pares: " + numerosPar + "</br>");
    document.write("El promedio de los numeros ingresados es: " + promedio + "</br>");
    document.write("La suma de los numeros ingresados es: " + acumulador + "</br>");
    document.write("El numero maximo es: " + max + " y el numero minimo es: " + min);
}

