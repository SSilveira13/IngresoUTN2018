function Mostrar() {

    var sexo;
    sexo = prompt("Ingrese f ó m.");
    sexo = sexo.toLocaleLowerCase();
    while (sexo != "f" && sexo != "m") {
        sexo = prompt("Error, reingrese f ó m.");
        sexo = sexo.toLocaleLowerCase();
        console.log(sexo);
    }

    if (sexo == "m") {
        document.getElementById('Sexo').value = "Masculino";
    }
    else {
        document.getElementById('Sexo').value = "Femenino";
    }



}//FIN DE LA FUNCIÓN