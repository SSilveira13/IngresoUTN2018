function Mostrar() {
	//suma positivos y negativos;cantidad de positivos, negativos, ceros y pares;
	//promedio de positivos y negativos;diferencia positivos y negativos

	var contador = 0;
	//declarar contadores y variables 
	var numero;
	var numeropar;
	var positivo = 0;
	var negativo = 0;
	var contarpositivos = 0;
	var contarnegativos = 0;
	var contarceros = 0;
	var contarpares = 0;
	var diferencia;
	var respuesta = "si";

	while (respuesta != "no") {
		numero = parseInt(prompt("Ingrese un numero:"));
		numeropar = numero % 2;
		if (numeropar == 0) {
			contarpares++;
		}

		if (numero > 0) {
			positivo += numero;
			console.log("Positivos = " + positivo);
			contarpositivos++;
		}
		else if (numero < 0) {
			negativo += numero;
			console.log("Negativos = " + negativo);
			contarnegativos++;
		}
		else if (numero == 0) {
			contarceros++;
			console.log("Cantidad de ceros = " + contarceros);
		}
		respuesta = prompt("¿Quiere continuar?<Si/No>");
		respuesta = respuesta.toLowerCase();
	}
	diferencia = positivo + negativo;
	document.write("Suma de positivos = " + positivo + "</br>");
	document.write("Suma de negativos = " + negativo + "</br>");
	document.write("Cantidad de positivos = " + contarpositivos + "</br>");
	document.write("Cantidad de negativos = " + contarnegativos + "</br>");
	document.write("Cantidad de ceros = " + contarceros + "</br>");
	document.write("Cantidad de pares = " + contarpares + "</br>");
	document.write("Promedio de positivos = " + positivo / contarpositivos + "</br>");
	document.write("Promedio de negativos = " + negativo / contarnegativos + "</br>");
	document.write("Diferencia entre negativos y positivos = " + diferencia + "</br>");
}//FIN DE LA FUNCIÓN