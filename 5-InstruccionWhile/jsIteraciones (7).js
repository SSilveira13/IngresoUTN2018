function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";

	do {
		console.log("Contador: " + contador);
		acumulador += parseInt(prompt("Ingrese un numero:"));
		console.log("La acumulacion es: " + acumulador);
		respuesta = prompt("¿Quiere continuar? <si/no>");
		contador++;
	}
	while (respuesta != "no");
	console.log("Contador: " + contador);
	respuesta = "si"
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN