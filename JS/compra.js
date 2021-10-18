//Se incializa la variable del botón de compra y el de mostrar
btn = document.getElementById("btn-compra");
btnShow = document.querySelector("#btn-mostrar");

//Se define un array en donde ir+an guardandose el historial de compras realizadas
//Además se guarda dicho array en el almacenamiento local
var ComprasTotales = [];

//Se agrega un Escuchador de Evento que ejecuta la función del ticket solo al darle click
//al botón.
btn.addEventListener('click', obtenerValores, true);
btnMostrar.addEventListener('click', mostrarValores, true);

var CantidadDeCompras = 0;

//Función para obtener los valores de los inputs e imprimir 
function obtenerValores(){
    var UserName = document.getElementById("user").value;
    var UserMovie = document.getElementById("sel1").value;
    var UserTickets = parseInt(document.getElementById("nTickets").value);
    var UserHour= "";
    var Gasto = 0;

    //Dependiendo de la películo que elijió se realizan los distintos cálculos
    if (UserMovie = "Don Bosco $4.50") {
        UserHour = "10:30 AM"
        Gasto = 4.50 * UserTickets;
    }
    if (UserMovie = "Los diez mandamientos $4.50"){
        UserHour = "11:30 AM"
        Gasto = 4.50 * UserTickets;
    }
    if (UserMovie = "Juan Apóstol $3.50"){
        UserHour = "9:30 AM"
        Gasto = 3.50 * UserTickets;
    }

    var ticketJSON = {
        "usuario": UserName,
        "pelicula": UserMovie,
        "horario": UserHour,
        "gasto-final": Gasto + "$"
    }

    CantidadDeCompras++;
    alert("Su ticket de compra es el siguiente: \n Nombre: " + ticketJSON.usuario + "\n Película: " + ticketJSON.pelicula + "\n Horario: " + ticketJSON.horario + "\n Total a gastar: " + ticketJSON["gasto-final"]);
    ComprasTotales.push(ticketJSON);
    localStorage.setItem(ComprasTotales);
    localStorage.setItem(CantidadDeCompras);
}

function mostrarValores(){
    document.querySelector(".lead").innerHTML = "Cantidad de compras realizadas: " + CantidadDeCompras +" <strong>Tickets: </strong>" + ComprasTotales;
}
