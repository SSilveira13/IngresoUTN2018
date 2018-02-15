function Mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

if(edad>17)
{
    alert("Usted es mayor de edad.");
}
else if(edad<13) //FORMA ACORTADA DE ANIDAR UN IF ELSE
    {
        alert("Usted es niño.");
    }
    else
    {
        alert("Usted es adolescente.");
    }


}//FIN DE LA FUNCIÓN