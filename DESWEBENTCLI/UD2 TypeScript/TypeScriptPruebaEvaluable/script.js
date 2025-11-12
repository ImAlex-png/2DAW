window.onload = function () {
    cargar_datos_cookie();
};
// Cosas de la prueba praactica
function ejecutar_accion() {
    var select = document.getElementById('opcion');
    switch (select.value) {
        case 'reves':
            invertir_nombre();
            break;
        case 'redirect':
            redirigir_red_social();
            break;
        case 'edad':
            calcular_edad();
            break;
        case 'cookie':
            almacena_cookie();
            break;
        default:
            console.error('Opcion escogida no valida');
            break;
    }
    ;
}
// Primer ejercicio de invertir nombre y concatenar el año de nacimiento
function invertir_nombre() {
    var _a;
    var inputNombre = $inputById('nombre');
    var result = document.getElementById('result');
    var nombreAlReves = '';
    //Ahora hacemos lo de la fecha
    var inputFecha = $inputById('fecha_nac');
    //Bucle para recorrer el nombre al reves
    for (var i = inputNombre.value.length - 1; i >= 0; i--) {
        nombreAlReves += inputNombre.value[i];
    }
    //Aqui ponemos el resukltado en el div donde debe de salir ( concatenamos las dos cosas )
    result.textContent = nombreAlReves.toUpperCase() + ((_a = inputFecha.valueAsDate) === null || _a === void 0 ? void 0 : _a.getFullYear());
}
//Segundo ejercicio, redirigir a una red social que tenga tu apellido en la url
function redirigir_red_social() {
    var inputUrl = $inputById('url');
    var inputApellidos = $inputById('apellidos');
    //Creamos expresion regular para comprobar url
    var regExp = new RegExp('^https\/\/');
    if (regExp.test(inputUrl.value)) {
        //Redirigimos a la url con el campo del primer apellido en la url
        var apellido = inputApellidos.value.split(' ')[0]; // El split separa los dos apellidos por el espacio y pilla el primero con el [ 0 ].
        var direccion = inputUrl.value + '/search?q=' + apellido;
        window.location.href = direccion;
    }
    else {
        // Mostrar error si no cumple con las condiciones de antes
        mensaje_error();
    }
}
function calcular_edad() {
    var inputEdad = $inputById('fecha_nac');
    var result = document.getElementById('result');
    var fechaNacimiento = inputEdad.valueAsDate;
    var fechaActual = new Date;
    var edadCalculada = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    result.textContent = 'Tienes ' + edadCalculada + ' años.';
}
function almacena_cookie() {
    //Almacenar las cookies ( ver con octavio )
    document.cookie = "nombre=" + $inputById("nombre").value;
    document.cookie = "apellidos=" + $inputById("apellidos").value;
    document.cookie = "edad=" + $inputById("edad").value;
    document.cookie = "telefono=" + $inputById("telefono").value;
    document.cookie = "fechaNac=" + $inputById("fecha_nac").value;
    document.cookie = "url=" + $inputById("url").value;
}
function cargar_datos_cookie() {
    var arrayCookie = document.cookie.split(';');
    console.table(document.cookie);
}
function actualizar_web() {
    window.location.reload();
}
// HELPERS PARA PILLAR LOS INPUTS DEL FORMULARIO
// Este helper recupera cualquier string con el nombre que se le pase por 
function $inputById(id) {
    return document.getElementById(id);
}
;
//Funcion para mostrar el mensaje de error
function mensaje_error() {
    //Recupero el div donde hay que escribir y borro lo que pueda haber
    var div = document.getElementById('result');
    div.textContent = '';
    //Creo el elemento que voy a escribir y le pongo los ajustes de estilo
    var parrafo = document.createElement('p');
    parrafo.textContent = 'Debe incluir https';
    parrafo.style.color = 'red';
    parrafo.style.fontWeight = 'bold';
    //Metemos el parrafo en el div resultado
    div.appendChild(parrafo);
}
