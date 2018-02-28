function Mostrar() {
    var stop;
    for (var i = 0; i < 1; i--) { //Tambien se puede usar un for vacio for( ; ; ) para iterar infinitamente
        stop = prompt("Ingrese break");
        stop = stop.toLocaleLowerCase();
        if (stop == "break") {
            break;
        }
    }



}//FIN DE LA FUNCIÓN