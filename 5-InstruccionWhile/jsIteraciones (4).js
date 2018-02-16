function Mostrar() {

	do {
		var numero = prompt("ingrese un número entre 0 y 10.");
	}
	while (numero > 10 || numero < 0)
	console.log("Usted introdujo el numero: " + numero);
}//FIN DE LA FUNCIÓN