window.onload = () => {
    pedirNombre();
}

function pedirNombre(): void {
    let promp: string = prompt('Cual es el nombre de usuario?') as string;

    let nombre: string = promp as string;

    if (nombre == null || nombre == '') {
        window.location.reload();
    } else {
        let h1: HTMLHeadingElement = document.getElementById('bienvenida') as HTMLHeadingElement;

        let cookieNombre: string = "nombre=";
        document.cookie = cookieNombre + nombre;

        h1.textContent = 'Bienvenido al dashboard de ' + nombre;

    }

}

function envioTarjeta(): void {
    let opt: HTMLOptionElement = document.getElementById('opciones') as HTMLOptionElement;

    let tarjeta: HTMLDivElement = $getDiv('tarjeta');

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

function pintarDatos(): void {
    let inputId: HTMLInputElement = document.getElementById('id') as HTMLInputElement;
    let inputDescripcion: HTMLInputElement = document.getElementById('descripcion') as HTMLInputElement;

    let nuevoDiv : HTMLDivElement = $createDiv('div');

    let divTarjeta: HTMLDivElement = $getDiv('tarjeta');

    let divId: HTMLDivElement = $createDiv('div');
    let divDecripcion: HTMLDivElement = $createDiv('div');
    let divHora: HTMLDivElement = $createDiv('div');


    let fecha: Date = new Date;

    let hora: string = fecha.getHours().toString();

    let ID = inputId.value;

    let Descripcion = inputDescripcion.value;

    let url: string = 'https://www.issues.com/'

    divId.textContent = 'El ID es : ' + ID;
    divDecripcion.textContent = 'Descripcion : ' + Descripcion;
    divHora.textContent = 'La hora es: ' + hora + 'horas';

    divTarjeta.appendChild(divId);
    divTarjeta.appendChild(divDecripcion);
    divTarjeta.appendChild(divHora);

    divId.addEventListener('click', () => {
        window.location.href = 'https://www.issues.com/' + ID;
    })
}

function limpiarDiv(): void {
    let divTarjeta: HTMLDivElement = $getDiv('tarjeta');

    divTarjeta.textContent = '';
}

// Helpers

function $getDiv(id: string): HTMLDivElement {
    return document.getElementById(id) as HTMLDivElement;
}


function $createDiv(id: string): HTMLDivElement {
    return document.createElement(id) as HTMLDivElement;
}

// Contador visitas cookies

function contador() : void{
    let cuenta : number = 0;
}