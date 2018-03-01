/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    var preciouno;
    var preciodos;
    var preciotres;
    preciouno = parseFloat(document.getElementById("PrecioUno").value);
    preciodos = parseFloat(document.getElementById("PrecioDos").value);
    preciotres = parseFloat(document.getElementById("PrecioTres").value);
    var suma = preciouno + preciodos + preciotres;
    alert("La suma de los precios es = " + suma);
}
function Promedio() {
    var preciouno;
    var preciodos;
    var preciotres;
    preciouno = parseFloat(document.getElementById("PrecioUno").value);
    preciodos = parseFloat(document.getElementById("PrecioDos").value);
    preciotres = parseFloat(document.getElementById("PrecioTres").value);
    var promedio = (preciouno + preciodos + preciotres) / 3;
    alert("El promedio de la suma de los productos es = " + promedio);
}
function PrecioFinal() {
    var preciouno;
    var preciodos;
    var preciotres;
    preciouno = parseFloat(document.getElementById("PrecioUno").value);
    preciodos = parseFloat(document.getElementById("PrecioDos").value);
    preciotres = parseFloat(document.getElementById("PrecioTres").value);
    var IVA = (preciouno + preciodos + preciotres) * 1.21;
    alert("El precio final de la suma de productos mas el IVA es = " + IVA);
}