// Importación de funciones de otros archivos JS del proyecto
const crearPesonaje = require('./crear_personaje.js');
const funcionesBatalla = require('./sistema_batalla.js');
const generarArchivoLog = require('./generar_log.js');

// Array de los 2 personajes creados aleatoriamente
const personajes = crearPesonaje();

// String que va a guardar los logs
let log = '';

// Añaden información al log
log += '### INICIO BATALLA ###';
log += funcionesBatalla.anuncioBatalla(personajes[0], personajes[1]);
log += '\n### BATALLA ###';

// Ejecuta la batalla y va añadiendo los ataques al log
while (!funcionesBatalla.terminarJuego(personajes[0], personajes[1])) {

    //Elige el turno
    if (funcionesBatalla.determinarTurno(personajes[0], personajes[1]) === "personaje1") {
        log += funcionesBatalla.ataqueP1(personajes[0], personajes[1]);
        // Determina si personaje2 ataca a personaje1 en su respectivo turno
        if (personajes[1].currentHealth > 0) {
            log += funcionesBatalla.ataqueP2(personajes[0], personajes[1]);
        }
    } else {
        log += funcionesBatalla.ataqueP2(personajes[0], personajes[1]);
        // Determina si personaje1 ataca a personaje2 en su respectivo turno
        if (personajes[0].currentHealth > 0) {
            log += funcionesBatalla.ataqueP1(personajes[0], personajes[1]);
        }
    }

}

// Al terminar el juego, añade el resumen al log y crea el archivo txt
if (!funcionesBatalla.terminarJuego(personajes[0].currentHealth, personajes[1].currentHealth)) {
    log += funcionesBatalla.mostrarResumen(personajes[0], personajes[1]);
    generarArchivoLog(log , "../logs_batalla.txt")
}
