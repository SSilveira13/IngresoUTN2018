function Mostrar() {

	var contador = 0;
	var acumulador = 0;

	do {
		console.log("Contador: " + contador);
		acumulador += parseInt(prompt("Ingrese un numero:"));
		contador++;
	}
	while (contador < 5)

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN