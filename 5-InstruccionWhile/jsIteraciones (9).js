function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo=0;
	var minimo=0;
	var respuesta="si";
	while(respuesta!="no")
	{
		numero = parseInt(prompt("Ingrese un numero:"));
		if(numero>maximo)
		{
			maximo = numero;
			console.log("Nuevo maximo: "+maximo);
		}
		else{
			if(numero<minimo)
			{
				minimo = numero;
				console.log("Nuevo minimo: "+minimo);
			}
		}
		respuesta = prompt("¿Quiere continuar?<Si/No>");
		respuesta = respuesta.toLowerCase();
	}

	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;



}//FIN DE LA FUNCIÓN