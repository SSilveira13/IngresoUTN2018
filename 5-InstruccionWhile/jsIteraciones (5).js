function Mostrar() {

    var sexo;
    do {
        sexo = prompt("ingrese f ó m .");
        console.log(sexo);
    }
    while (sexo != "f" && sexo != "m")

    switch (sexo) {
        case "m":
            document.getElementById('Sexo').value = "Masculino";
            break;
        case "f":
            document.getElementById('Sexo').value = "Femenino";
            break;
    }





}//FIN DE LA FUNCIÓN