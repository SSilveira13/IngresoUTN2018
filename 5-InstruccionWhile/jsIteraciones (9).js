function Mostrar() {


	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta = "si";
	var flag = 0;
	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		if (numero > maximo || flag == 0) {
			maximo = numero;
		}
		if (numero < minimo || flag == 0) {
			minimo = numero;
			flag = 1;
		}

		respuesta = prompt("¿Quiere continuar?<Si/No>");
		respuesta = respuesta.toLowerCase();
	} while (respuesta != "no");

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN