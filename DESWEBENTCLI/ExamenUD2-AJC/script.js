window.onload = function () {
    pedirNombre();
};
function pedirNombre() {
    var promp = prompt('Cual es el nombre de usuario?');
    var nombre = promp;
    if (nombre == null || nombre == '') {
        window.location.reload();
    }
    else {
        var h1 = document.getElementById('bienvenida');
        var cookieNombre = "nombre=";
        document.cookie = cookieNombre + nombre;
        h1.textContent = 'Bienvenido al dashboard de ' + nombre;
    }
}
function envioTarjeta() {
    var opt = document.getElementById('opciones');
    var tarjeta = $getDiv('tarjeta');
    switch (opt.value) {
        case 'incidencia':
            pintarDatos();
            tarjeta.style.backgroundColor = 'red';
            break;
        case 'evento':
            pintarDatos();
            tarjeta.style.backgroundColor = 'green';
            break;
        case 'tarea':
            pintarDatos();
            tarjeta.style.backgroundColor = 'blue';
            break;
    }
}
function pintarDatos() {
    var inputId = document.getElementById('id');
    var inputDescripcion = document.getElementById('descripcion');
    var nuevoDiv = $createDiv('div');
    var divTarjeta = $getDiv('tarjeta');
    var divId = $createDiv('div');
    var divDecripcion = $createDiv('div');
    var divHora = $createDiv('div');
    var fecha = new Date;
    var hora = fecha.getHours().toString();
    var ID = inputId.value;
    var Descripcion = inputDescripcion.value;
    var url = 'https://www.issues.com/';
    divId.textContent = 'El ID es : ' + ID;
    divDecripcion.textContent = 'Descripcion : ' + Descripcion;
    divHora.textContent = 'La hora es: ' + hora + 'horas';
    divTarjeta.appendChild(divId);
    divTarjeta.appendChild(divDecripcion);
    divTarjeta.appendChild(divHora);
    divId.addEventListener('click', function () {
        window.location.href = 'https://www.issues.com/' + ID;
    });
}
function limpiarDiv() {
    var divTarjeta = $getDiv('tarjeta');
    divTarjeta.textContent = '';
}
// Helpers
function $getDiv(id) {
    return document.getElementById(id);
}
function $createDiv(id) {
    return document.createElement(id);
}
// Contador visitas cookies
function contador() {
    var cuenta = 0;
}
