function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		if(numero>0)
		{
			positivo=positivo+numero;
			console.log("Positivos = "+positivo);
		}
		else
		{
			if(numero<0)
			{
				negativo=negativo*numero;
				console.log("Negativos = "+negativo);
			}
		}
		contador++;
		respuesta = prompt("¿Quiere continuar? <si/no>");
	}
	while (respuesta != "no")
	console.log("Contador: " + contador);
	var respuesta='si';
	if(negativo>0)
	{
		negativo=negativo*-1;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN