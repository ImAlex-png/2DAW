// Array principal de equipos ( va a funcionar como contenedor de los otros arrays)
let equipos: any[][] = [];

// Arrays de los equipos
let realMadrid: any[] = ["Real Madrid", 31, 12, 10, 1, 1, 28, 10];
let barcelona: any[] = ["FC Barcelona", 26, 12, 8, 2, 2, 24, 12];
let villarreal: any[] = ["Villarreal CF", 24, 12, 7, 3, 2, 20, 14];
let atleticoMadrid: any[] = ["Atlético de Madrid", 22, 12, 6, 4, 2, 18, 12];
let betis: any[] = ["Real Betis Balompié", 21, 12, 6, 3, 3, 17, 13];
let espanyol: any[] = ["RCD Espanyol", 20, 12, 5, 5, 2, 16, 12];
let bilbao: any[] = ["Athletic Club Bilbao", 16, 12, 4, 4, 4, 14, 15];
let manchester: any[] = ["Manchester United", 15, 12, 4, 3, 5, 12, 14];
let bayern: any[] = ["Bayern Múnich", 13, 12, 3, 4, 5, 10, 14];
let juventus: any[] = ["Juventus", 11, 12, 3, 2, 7, 9, 16];


//Meter los arrays de los equipos en el array contenedor
equipos.push(realMadrid);
equipos.push(barcelona);
equipos.push(villarreal);
equipos.push(atleticoMadrid);
equipos.push(betis);
equipos.push(espanyol);
equipos.push(bilbao);
equipos.push(manchester);
equipos.push(bayern);
equipos.push(juventus);

// Mostrar el array contenedor en la consola
console.table(equipos);

// Mostrar tabla recorriendo
// function mostrarTabla(): void {
//     let tabla: HTMLTableElement = document.getElementById("cabezera") as HTMLTableElement;

//     tabla.innerHTML = "";

//     for (let i = 0; i < equipos.length; i++) {
//         const tr: HTMLTableRowElement = document.createElement('tr') as HTMLTableRowElement;

//         for(let j = 0; j < equipos[i].length; j++){
//             const td : HTMLTableCellElement = document.createElement('td') as HTMLTableCellElement;

//             tr.textContent = equipos[i][j];
//             tr.appendChild(td);
//         }

//         tabla.appendChild(tr);
//     }
// }
