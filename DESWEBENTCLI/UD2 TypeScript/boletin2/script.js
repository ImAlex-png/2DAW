function cambiar_titulo() {
    var titulo = prompt("Introduce un nuevo titulo:");
    console.log(titulo);
    var nodoTitulo = document.getElementById("titulo");
    nodoTitulo.textContent = titulo;
}
function cambiar_fondo() {
    //Diferentes tipos para rescatar el body
    // Por defecto, el DOM ya tiene un atributo que representa el body
    var body = document.body;
    // //Otra forma
    // let body2 : HTMLBodyElement = document.getElementById("cuerpo") as HTMLBodyElement;
    // //Tercera forma
    // let body3 : HTMLBodyElement = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}
function analiza_edad() {
    var input = document.getElementById("edad");
    var edad = Number(input.value);
    console.log(edad);
    //Creamos lista "ol"
    var lista = document.getElementById("creacion");
    // Cambiar el estilo de letra a oscura
    lista.style.fontWeight = "bold";
    //Color en verde
    lista.style.color = "green";
    lista.type = "a";
    //Contenido html anidado dentro de un elemento
    lista.innerHTML = "";
    //Creamos lista para poner mayor o menos ( primer hijo )
    var mayorMenor = document.createElement("li");
    //Comprobar la edad con ternario
    mayorMenor.textContent = edad > 18 ? "Eres mayor" : "Eres menor";
    //Calcular pay e impar
    var parImpar = document.createElement("li");
    parImpar.textContent = edad % 2 == 0 ? "Es par" : "Es impar";
    //Calcular divisores edad
    // Los divisores se inician vacio
    var divisores = "";
    //Calcular divisores con un for
    for (var i = 1; i < edad; i++) {
        if (edad % i == 0) {
            divisores += i + ", ";
        }
    }
    //Creamos en el DOM la lista de divisores
    var listDivisores = document.createElement("li");
    //Pintamos en esa lista los divisores
    listDivisores.textContent = divisores;
    //Clasificar edad
    var randoEdad = ""; // No puede ser undefined ( o es nulo o es vacio )
    switch (true) {
        case edad >= 0 && edad < 15:
            randoEdad = "Niño";
            break;
        case edad >= 15 && edad < 30:
            randoEdad = "Joven";
            break;
        case edad >= 30 && edad < 60:
            randoEdad = "Adulto";
            break;
        case edad >= 60:
            randoEdad = "Mayor";
            break;
        default:
            console.error("Edad no valida");
    }
    var edadTexto = document.createElement("li");
    edadTexto.textContent = randoEdad;
    // Añadir hijo a la lista "OL"
    lista.appendChild(mayorMenor);
    // Añadir hijo a la lista "OL"
    lista.appendChild(parImpar);
    // Añadir hijo a la lista "OL"
    lista.appendChild(listDivisores);
    // Añadir hijo a la lista "OL"
    lista.appendChild(edadTexto);
    // No hace falta si ya esta hecho en el html
    // // Se añade la lista al documento
    // document.body.appendChild(lista);
}
function miapp() {
    var promp = prompt("Dime tu nombre de usuario");
    var nodoParrafo = document.getElementById("saludo");
    var option = document.getElementById("select");
    nodoParrafo.textContent = "Hola " + promp;
    nodoParrafo.style.color = option.value;
}
function mostrarInfo() {
    console.log("El idioma del navegador es: " + navigator.language);
    console.log("Nombre navegador: " + navigator.userAgent);
    console.log("Ver si tiene cookies o no habilitadas: " + navigator.cookieEnabled);
    console.log("Tamaño alto de la pantalla: " + window.innerHeight);
    console.log("Tamaño ancho pantalla: " + window.innerWidth);
}
function redirec_to() {
    var url = $inputValue("url");
    var regExp = new RegExp("^https:\/\/");
    if (regExp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error", "La url no es valida");
    }
}
function IrAtras() {
    var atras = document.getElementById("atras");
    window.history.back();
}
function adelante() {
    var adelante = document.getElementById("adelante");
    window.history.forward();
}
function recargar() {
    var recargar = document.getElementById("recargar");
    window.location.reload();
}
function reloj() {
    var reloj = document.getElementById("reloj");
    var now = new Date();
    var horas = now.getHours().toString();
    var minutos = now.getMinutes().toString();
    var segundos = now.getSeconds().toString();
    reloj.textContent = horas + ":" + minutos + ":" + segundos;
    // Otra opcion es let now = new Date().toLocaleTimeString();
}
window.onload = function () { return setInterval(reloj, 1000); };
// a. Cuente el número de nodos o elementos
function contarNodos() {
    var nodo = document.getElementById("lista");
    var nodosHijos = nodo.children.length;
    console.log(nodosHijos);
}
// b. Obtén el texto del primer y último elemento
function primerYUltimoNodo() {
    var nodo = document.getElementById("lista");
    var primerHijo = nodo.firstElementChild;
    var ultimoHijo = nodo.lastElementChild;
    console.log(primerHijo);
    console.log(ultimoHijo);
}
// c. Duplica (colocando al final) un elemento dado según su número. 
function duplicar() {
    var promp = Number(prompt("Dime el numero del que quieres duplicar"));
    var nodo = document.getElementById("lista");
    var nodoDuplicado = document.createElement("li");
    var duplicado = nodo.children.item(promp - 1);
    nodoDuplicado.textContent = duplicado.textContent;
    nodo.appendChild(nodoDuplicado);
}
// d. Modifica el valor de un elemento de la lista dado según su número.
function modificar() {
    var promp = Number(prompt("Dime el numero del que quieres modificar"));
    var palabra = prompt("Que quieres poner?: ");
    var nodo = document.getElementById("lista");
    var elemento = nodo.children.item(promp - 1);
    elemento.textContent = palabra;
}
// e. Muestra todos los elementos
function todos_los_elementos() {
    var nodo = document.getElementById("lista");
    for (var _i = 0, _a = nodo.children; _i < _a.length; _i++) {
        var elemento = _a[_i];
        console.log(elemento.textContent);
    }
}
// f. Añade un nuevo nodo
function añadir() {
}
// g. Elimina el nodo indicado por el número que ocupa según su posición.
// h. Ordena todos los nodos alfabéticamente.
// Helper
// Helpers ( comunes para todo el boletin.SIEMPRE EMPIEZAN POR DOLAR) (AQUI PILLAN EL VALOR DEL INPUT Y EL WRITE NODE ESCRIBE EL MENSAJE )
function $inputValue(id) {
    var input = document.getElementById(id); // Lectura
    var result = "";
    if (input) {
        result = input.value; // Aqui leo el valor
    }
    return result;
}
function $writeNode(id, msg) {
    var nodo = document.getElementById(id); //Escritura
    if (nodo) {
        nodo.textContent = msg;
    }
}
