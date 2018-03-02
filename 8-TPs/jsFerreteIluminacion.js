/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var cantidad = parseInt(document.getElementById("Cantidad").value);
    var lampara = 35;
    var marca = document.getElementById("Marca").value;
    var conIva;
    var impuesto;
    var final;
    switch (cantidad) {
        case 0:
            document.getElementById("precioDescuento").value = "No esta comprando ninguna lampara";
            break;
        case 1:
            document.getElementById("precioDescuento").value = "El precio final es de $35";
            break;
        case 2:
            document.getElementById("precioDescuento").value = "El precio final es de $70";
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                conIva = lampara * cantidad * 1.15;
                if (conIva < 120) {
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva;
                }
                else {
                    impuesto = conIva * 0.10;
                    final = conIva + impuesto;
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva + " siendo que pago $" + impuesto + " de IIBB.";
                }
            }
            else if (marca == "FelipeLamparas") {
                conIva = lampara * cantidad * 1.10;
                if (conIva < 120) {
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva;
                }
                else {
                    impuesto = conIva * 0.10;
                    final = conIva + impuesto;
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva + " siendo que pago $" + impuesto + " de IIBB.";
                }
            }
            else {
                conIva = lampara * cantidad * 1.05;
                if (conIva < 120) {
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva;
                }
                else {
                    impuesto = conIva * 0.10;
                    final = conIva + impuesto;
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva + " siendo que pago $" + impuesto + " de IIBB.";
                }
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                conIva = lampara * cantidad * 1.25;
                if (conIva < 120) {
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva;
                }
                else {
                    impuesto = conIva * 0.10;
                    final = conIva + impuesto;
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva + " siendo que pago $" + impuesto + " de IIBB.";
                }
            }
            else {
                conIva = lampara * cantidad * 1.20;
                if (conIva < 120) {
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva;
                }
                else {
                    impuesto = conIva * 0.10;
                    final = conIva + impuesto;
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva + " siendo que pago $" + impuesto + " de IIBB.";
                }
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                conIva = lampara * cantidad * 1.40;
                if (conIva < 120) {
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva;
                }
                else {
                    impuesto = conIva * 0.10;
                    final = conIva + impuesto;
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva + " siendo que pago $" + impuesto + " de IIBB.";
                }
            }
            else {
                conIva = lampara * cantidad * 1.30;
                if (conIva < 120) {
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva;
                }
                else {
                    impuesto = conIva * 0.10;
                    final = conIva + impuesto;
                    document.getElementById("precioDescuento").value = "El precio final es de $" + conIva + " siendo que pago $" + impuesto + " de IIBB.";
                }
            }
            break;
        default:
            conIva = lampara * cantidad * 1.50;
            if (conIva < 120) {
                document.getElementById("precioDescuento").value = "El precio final es de $" + conIva;
            }
            else {
                impuesto = conIva * 0.10;
                final = conIva + impuesto;
                document.getElementById("precioDescuento").value = "El precio final es de $" + conIva + " siendo que pago $" + impuesto + " de IIBB.";
            }
            break;
    }
}
