//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var importe;
    var mayor;
    var menor;
    var flag = true;
    var diaMayor;
    var diaMenor;
    for (var i = 0; i < 7; i++) {
        importe = parseInt(prompt("Ingrese un importe valido:"));
        while (importe < 0) {
            importe = parseInt(prompt("Error. Ingrese un importe valido:"));
        }
        if (flag == true) {
            flag = false;
            mayor = importe;
            menor = importe;
        }
        if (importe > mayor) {
            mayor = importe;
            switch (i) {
                case 0:
                    diaMayor = "Lunes"
                    break;
                case 1:
                    diaMayor = "Martes"
                    break;
                case 2:
                    diaMayor = "Miercoles"
                    break;
                case 3:
                    diaMayor = "Jueves"
                    break;
                case 4:
                    diaMayor = "Viernes"
                    break;
                case 5:
                    diaMayor = "Sabado"
                    break;
                case 6:
                    diaMayor = "Domingo"
                    break;
            }
        }
        else if (importe < menor) {
            menor = importe;
            switch (i) {
                case 0:
                    diaMenor = "Lunes"
                    break;
                case 1:
                    diaMenor = "Martes"
                    break;
                case 2:
                    diaMenor = "Miercoles"
                    break;
                case 3:
                    diaMenor = "Jueves"
                    break;
                case 4:
                    diaMenor = "Viernes"
                    break;
                case 5:
                    diaMenor = "Sabado"
                    break;
                case 6:
                    diaMenor = "Domingo"
                    break;
            }
        }
    }
    document.write("Mayor importe en venta: $" + mayor + " y fue el dia " + diaMayor + "</br>");
    document.write("Menor importe en venta: $" + menor + " y fue el dia " + diaMenor + "</br>");
}

