// Array principal de equipos ( va a funcionar como contenedor de los otros arrays)
var equipos = [];
// Arrays de los equipos
var realMadrid = ["Real Madrid", 31, 12, 10, 1, 1, 28, 10];
var barcelona = ["FC Barcelona", 26, 12, 8, 2, 2, 24, 12];
var villarreal = ["Villarreal CF", 24, 12, 7, 3, 2, 20, 14];
var atleticoMadrid = ["Atlético de Madrid", 22, 12, 6, 4, 2, 18, 12];
var betis = ["Real Betis Balompié", 21, 12, 6, 3, 3, 17, 13];
var espanyol = ["RCD Espanyol", 20, 12, 5, 5, 2, 16, 12];
var bilbao = ["Athletic Club Bilbao", 16, 12, 4, 4, 4, 14, 15];
var manchester = ["Manchester United", 15, 12, 4, 3, 5, 12, 14];
var bayern = ["Bayern Múnich", 13, 12, 3, 4, 5, 10, 14];
var juventus = ["Juventus", 11, 12, 3, 2, 7, 9, 16];
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
