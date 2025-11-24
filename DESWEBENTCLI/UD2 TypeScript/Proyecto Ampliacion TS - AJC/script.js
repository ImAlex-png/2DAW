// Ejecutar cuando cargue la página
window.onload = function () {
    cargarSelects();
    mostrarTabla();
};
//Array de equipos: [Nombre, Puntos, PJ, PG, PE, PP, GF, GC]
var equipos = [];
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
// Añadir equipos al array principal
equipos.push(realMadrid, barcelona, villarreal, atleticoMadrid, betis, espanyol, bilbao, manchester, bayern, juventus);
//Cargar selects de equipos
function cargarSelects() {
    var selLocal = document.getElementById("local");
    var selVisitante = document.getElementById("visitante");
    selLocal.innerHTML = "";
    selVisitante.innerHTML = "";
    for (var _i = 0, equipos_1 = equipos; _i < equipos_1.length; _i++) {
        var equipo = equipos_1[_i];
        var nombre = equipo[0];
        // Creamos la opción con value correcto
        var opt1 = document.createElement("option");
        opt1.value = nombre;
        opt1.textContent = nombre;
        selLocal.appendChild(opt1);
        var opt2 = document.createElement("option");
        opt2.value = nombre;
        opt2.textContent = nombre;
        selVisitante.appendChild(opt2);
    }
}
// Muestra la clasificación inicial
function mostrarTabla() {
    var tabla = document.getElementById("tabla");
    var html = "";
    // Cabecera
    html = html + "<table>";
    html = html + "<tr>";
    html = html + "<th>Equipo</th>";
    html = html + "<th>Pts</th>";
    html = html + "<th>PJ</th>";
    html = html + "<th>PG</th>";
    html = html + "<th>PE</th>";
    html = html + "<th>PP</th>";
    html = html + "<th>GF</th>";
    html = html + "<th>GC</th>";
    html = html + "</tr>";
    // Filas de equipos
    for (var i = 0; i < equipos.length; i++) {
        var e = equipos[i];
        html = html + "<tr>";
        html = html + "<td>" + e[0] + "</td>";
        html = html + "<td>" + e[1] + "</td>";
        html = html + "<td>" + e[2] + "</td>";
        html = html + "<td>" + e[3] + "</td>";
        html = html + "<td>" + e[4] + "</td>";
        html = html + "<td>" + e[5] + "</td>";
        html = html + "<td>" + e[6] + "</td>";
        html = html + "<td>" + e[7] + "</td>";
        html = html + "</tr>";
    }
    html = html + "</table>";
    //Sale un error porque la tabla puede ser nula, pero no afecta al funcionamiento ni a la compilación de Ts
    tabla.innerHTML = html;
}
// Procesar resultado del partido y actualizar clasificación
function procesarResultado() {
    // 1. Leer valores del formulario
    var local = document.getElementById("local").value.trim();
    var visitante = document.getElementById("visitante").value.trim();
    var golesLocal = parseInt(document.getElementById("golLocal").value) || 0;
    var golesVisitante = parseInt(document.getElementById("golVisitante").value) || 0;
    // 2. Validación: no pueden jugar contra sí mismos
    if (local === visitante) {
        alert("¡Error! El equipo local y el visitante no pueden ser el mismo.");
        return;
    }
    // 3. Buscar índices de los equipos
    var idxLocal = -1;
    var idxVisitante = -1;
    for (var i = 0; i < equipos.length; i++) {
        if (equipos[i][0] === local)
            idxLocal = i;
        if (equipos[i][0] === visitante)
            idxVisitante = i;
    }
    // Seguridad extra (nunca debería pasar, pero por si acaso)
    if (idxLocal === -1 || idxVisitante === -1) {
        alert("Error interno: equipo no encontrado.");
        return;
    }
    // 4. Actualizar partidos jugados
    equipos[idxLocal][2]++; // PJ local
    equipos[idxVisitante][2]++; // PJ visitante
    // 5. Actualizar goles
    equipos[idxLocal][6] += golesLocal; // GF local
    equipos[idxLocal][7] += golesVisitante; // GC local
    equipos[idxVisitante][6] += golesVisitante; // GF visitante
    equipos[idxVisitante][7] += golesLocal; // GC visitante
    // 6. Asignar puntos y resultados
    if (golesLocal > golesVisitante) {
        // Victoria local
        equipos[idxLocal][1] += 3;
        equipos[idxLocal][3]++; // PG local
        equipos[idxVisitante][5]++; // PP visitante
    }
    else if (golesLocal < golesVisitante) {
        // Victoria visitante
        equipos[idxVisitante][1] += 3;
        equipos[idxVisitante][3]++; // PG visitante
        equipos[idxLocal][5]++; // PP local
    }
    else {
        // Empate
        equipos[idxLocal][1] += 1;
        equipos[idxVisitante][1] += 1;
        equipos[idxLocal][4]++; // PE local
        equipos[idxVisitante][4]++; // PE visitante
    }
    // 7. Ordenar clasificación (mas o menos como la liga)
    for (var i = 0; i < equipos.length - 1; i++) {
        for (var j = 0; j < equipos.length - 1 - i; j++) {
            var a = equipos[j];
            var b = equipos[j + 1];
            var cambiar = false;
            if (a[1] < b[1]) { // menos puntos
                cambiar = true;
            }
            else if (a[1] === b[1]) { // mismos puntos
                var difA = a[6] - a[7];
                var difB = b[6] - b[7];
                if (difA < difB) { // peor diferencia
                    cambiar = true;
                }
                else if (difA === difB && a[6] < b[6]) { // misma dif → menos GF
                    cambiar = true;
                }
            }
            //
            if (cambiar) {
                var temp = equipos[j];
                equipos[j] = equipos[j + 1];
                equipos[j + 1] = temp;
            }
        }
    }
    // 8. Actualizar tabla y limpiar formulario
    mostrarTabla();
    document.getElementById("formulario").reset();
}
