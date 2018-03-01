//3- realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
//cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.
var largo;
var ancho;
var perimetro;
var alambre;
largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
perimetro = largo * ancho;
alambre = perimetro * 3;
