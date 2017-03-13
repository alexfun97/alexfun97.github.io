var xmlhttp = new XMLHttpRequest();
var url = "json/json.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var idMarco = document.getElementById("marco");
    
    for (i = 0; i < arr.length; i++) {
        //creacion del primer div
        var firstDiv = document.createElement("div");
        firstDiv.setAttribute("class", "divClass");

        //creacion del enlace
        var link = document.createElement("a");
        link.innerHTML = "Visita la web";
        link.setAttribute("href", arr[i].Link);
        link.setAttribute("class", "linkClass");


        //creacion del titulo
        var title = document.createElement("h3");
        title.className = 'h3title';

        //contenido del titulo
        var contentTitle = document.createTextNode(arr[i].Titulo);

        //creacion de la fecha
        var date = document.createElement("h4");
        date.className = 'h4date';
        
        //contenido del div de la fecha
        var contentDate = document.createTextNode(arr[i].Fecha);


        //Creacion de descripcion
        var descrip = document.createElement("p");
        descrip.setAttribute("class", "descrip");

        //contenido del div descripcion
        var contentDescrip = document.createTextNode(arr[i].Descripcion);

        // CREACION DE LOS EEMENTOS ORDENADOS EN ARBOL EN EL HTML
        idMarco.appendChild(firstDiv);

        firstDiv.appendChild(title);
        title.appendChild(contentTitle);
        firstDiv.appendChild(date);
        date.appendChild(contentDate);
        firstDiv.appendChild(descrip);
        firstDiv.appendChild(link);
        descrip.appendChild(contentDescrip);

    }




}