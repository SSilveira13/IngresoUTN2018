function Mostrar() {

    var clave;
    clave = prompt("Ingrese el número clave.");
    while (clave != "utn750")//LA CONDICION TAMBIEN PUEDE SER !(clave=="unt750")
    {
        clave = prompt("Error, ingrese la clave nuevamente.");
    }
    console.log("Correcto!");
}//FIN DE LA FUNCIÓN
