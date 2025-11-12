window.onload = () => {
    cargar_datos_cookie();
}

// Cosas de la prueba praactica

function ejecutar_accion() : void{
    let select : HTMLSelectElement = document.getElementById('opcion') as HTMLSelectElement;

    switch(select.value){
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
    };
}

// Primer ejercicio de invertir nombre y concatenar el año de nacimiento

function invertir_nombre() : void{
    let inputNombre : HTMLInputElement = $inputById('nombre') as HTMLInputElement;
    let result : HTMLDivElement = document.getElementById('result') as HTMLDivElement;
    let nombreAlReves : string = '';

    //Ahora hacemos lo de la fecha
    let inputFecha : HTMLInputElement = $inputById('fecha_nac') as HTMLInputElement;


    //Bucle para recorrer el nombre al reves
    for(let i : number = inputNombre.value.length - 1; i >= 0; i --){
        nombreAlReves += inputNombre.value[i];
    }

    //Aqui ponemos el resukltado en el div donde debe de salir ( concatenamos las dos cosas )
    result.textContent = nombreAlReves.toUpperCase() + inputFecha.valueAsDate?.getFullYear();
}

//Segundo ejercicio, redirigir a una red social que tenga tu apellido en la url

function redirigir_red_social() : void{
    let inputUrl : HTMLInputElement = $inputById('url');
    let inputApellidos : HTMLInputElement = $inputById('apellidos');

    //Creamos expresion regular para comprobar url
    let regExp : RegExp = new RegExp('^https\/\/');

    if(regExp.test(inputUrl.value)){
        //Redirigimos a la url con el campo del primer apellido en la url
        let apellido : string = inputApellidos.value.split(' ')[0] // El split separa los dos apellidos por el espacio y pilla el primero con el [ 0 ].
        let direccion : string = inputUrl.value + '/search?q=' + apellido;

        window.location.href = direccion;
    }else{
        // Mostrar error si no cumple con las condiciones de antes
        mensaje_error();
    }
}

function calcular_edad() : void{
    let inputEdad : HTMLInputElement = $inputById('fecha_nac');

    let result : HTMLDivElement = document.getElementById('result') as HTMLDivElement;

    let fechaNacimiento : Date = inputEdad.valueAsDate as Date;
    let fechaActual : Date = new Date;

    let edadCalculada : number = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    result.textContent = 'Tienes ' + edadCalculada + ' años.';
}

function almacena_cookie() : void {
    //Almacenar las cookies ( ver con octavio )
    document.cookie = "nombre=" + $inputById("nombre").value;
    document.cookie = "apellidos=" + $inputById("apellidos").value;
    document.cookie = "edad=" + $inputById("edad").value;
    document.cookie = "telefono=" + $inputById("telefono").value;
    document.cookie = "fechaNac=" + $inputById("fecha_nac").value;
    document.cookie = "url=" + $inputById("url").value;
}

function cargar_datos_cookie(): void{
    let arrayCookie = document.cookie.split(';');
    console.table(document.cookie);
}

function actualizar_web(){
    window.location.reload();
}

// HELPERS PARA PILLAR LOS INPUTS DEL FORMULARIO
// Este helper recupera cualquier string con el nombre que se le pase por 

function $inputById(id : string) : HTMLInputElement{
    return document.getElementById(id) as HTMLInputElement;
};

//Funcion para mostrar el mensaje de error
function mensaje_error() : void{
    //Recupero el div donde hay que escribir y borro lo que pueda haber
    let div : HTMLDivElement = document.getElementById('result') as HTMLDivElement;
    div.textContent = '';

    //Creo el elemento que voy a escribir y le pongo los ajustes de estilo
    let parrafo : HTMLParagraphElement = document.createElement('p') as HTMLParagraphElement;

    parrafo.textContent = 'Debe incluir https';
    parrafo.style.color = 'red';
    parrafo.style.fontWeight = 'bold';

    //Metemos el parrafo en el div resultado
    div.appendChild(parrafo);
}