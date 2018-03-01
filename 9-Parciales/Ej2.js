//2-realiazar el algoritmo que lea un importe por de un producto por prompt y muestre el importe final
//sumándole el IVA (21%).
var importe;
var masIva;
importe = parseInt(prompt("Ingrese un importe:"));
masIva = importe * 1.21;//100% + 21% = 121%
alert("El importe final con IVA es: " + masIva);