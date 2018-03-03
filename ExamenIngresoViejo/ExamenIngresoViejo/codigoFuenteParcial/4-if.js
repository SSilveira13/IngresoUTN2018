//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var str1 = prompt("Ingrese un numero:");
    var num1 = parseInt(str1);
    var str2 = prompt("Ingrese un numero:");
    var num2 = parseInt(str2);
    if (num1 == num2) {

        document.write(str1 + str2);
    }
    else if (num1 > num2) {
        document.write(num1 - num2);
    }
    else {
        document.write(num1 + num2);
    }
}

