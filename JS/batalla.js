const crearPesonaje = require('./crear_personaje.js');
const funcionesBatalla = require('./sistema_batalla.js');

const personajes = crearPesonaje();

let log = '### INICIO BATALLA ###'

function generateFileLog(logs, filename) {

    const fs = require("fs");
    fs.writeFile(filename, logs, (err) => {
        if (err) throw err;
    });
}



funcionesBatalla.anuncioBatalla(personajes[0], personajes[1]);
log += funcionesBatalla.anuncioBatalla(personajes[0], personajes[1]);
log += '\n### BATALLA ###'
while (!funcionesBatalla.terminarJuego(personajes[0], personajes[1])) {

    if (funcionesBatalla.determinarTurno(personajes[0], personajes[1]) === "personaje1") {
        log += funcionesBatalla.ataqueP1(personajes[0], personajes[1]);
        if (personajes[1].currentHealth > 0) {
            log += funcionesBatalla.ataqueP2(personajes[0], personajes[1]);
        }
    } else {
        log +=  funcionesBatalla.ataqueP2(personajes[0], personajes[1]);
        if (personajes[0].currentHealth > 0) {
            log += funcionesBatalla.ataqueP1(personajes[0], personajes[1]);
        }
    }

}

if (!funcionesBatalla.terminarJuego(personajes[0].currentHealth, personajes[1].currentHealth)) {
    log+= funcionesBatalla.mostrarResumen(personajes[0], personajes[1]);
    generateFileLog(log , "logs_batalla.txt")
}
