function Mostrar() {
	//suma positivos y negativos;cantidad de positivos, negativos, ceros y pares;
	//promedio de positivos y negativos;diferencia positivos y negativos

	var contador = 0;
	//declarar contadores y variables 
	var numero;
	var positivo = 0;
	var negativo = 0;
	var contarpositivos = 0;
	var contarnegativos = 0;
	var contarceros = 0;
	var contarpares = 0;
	var diferencia;
	var respuesta = "si";
	var promediopositivos = 0;
	var promedionegativos = 0;

	while (respuesta != "no") {
		numero = parseInt(prompt("Ingrese un numero:"));
		if (numero % 2 == 0) {
			contarpares++;
		}

		if (numero > 0) {
			positivo += numero;
			contarpositivos++;
		}
		else if (numero < 0) {
			negativo += numero;
			contarnegativos++;
		}
		else {
			contarceros++;
		}
		respuesta = prompt("¿Quiere continuar?<Si/No>");
		respuesta = respuesta.toLowerCase();
	}
	if (promediopositivos != 0) {
		promediopositivos = positivo / contarpositivos;
	}
	if (promedionegativos != 0) {
		promedionegativos = negativo / contarnegativos;
	}
	diferencia = positivo + negativo;
	document.write("Suma de positivos = " + positivo + "</br>");
	document.write("Suma de negativos = " + negativo + "</br>");
	document.write("Cantidad de positivos = " + contarpositivos + "</br>");
	document.write("Cantidad de negativos = " + contarnegativos + "</br>");
	document.write("Cantidad de ceros = " + contarceros + "</br>");
	document.write("Cantidad de pares = " + contarpares + "</br>");
	document.write("Promedio de positivos = " + promediopositivos + "</br>");
	document.write("Promedio de negativos = " + promedionegativos + "</br>");
	document.write("Diferencia entre negativos y positivos = " + diferencia + "</br>");
}//FIN DE LA FUNCIÓN