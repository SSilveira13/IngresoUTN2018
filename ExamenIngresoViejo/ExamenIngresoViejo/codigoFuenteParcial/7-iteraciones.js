//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var nota;
    var acumulador = 0;
    var sexo;
    var promedio;
    var menor;
    var aprobadosM = 0;
    var flag = true;
    for (var i = 1; i < 7; i++) {
        nota = parseInt(prompt("Ingrese la nota del alumno/a:"));
        while (nota < 0 || nota > 10) {
            nota = parseInt(prompt("Error. Reingrese la nota del alumno/a:"));
        }
        sexo = prompt("Ingrese el sexo del alumno/a:");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Error. Reingrese el sexo del alumno/a:");
        }
        acumulador += nota;
        if (nota < menor || flag == true) {
            menor = nota;
            flag = false;
        }
        if (sexo == "m" && nota >= 6) {
            aprobadosM++;
        }
    }
    promedio = acumulador / 6;
    document.write("El promedio de los alumnos es: " + promedio.toFixed(2) + "<br>");
    document.write("La menor nota es: " + menor + "<br>");
    document.write("La cantidad de alumnos varon aprobados es: " + aprobadosM + "<br>");
}

