const crearPesonaje = require('./crear_personaje.js');
const funcionesBatalla = require('./sistema_batalla.js');

const personajes = crearPesonaje();
let turno = 0;

funcionesBatalla.anuncioBatalla(personajes[0], personajes[1]);
while (!funcionesBatalla.terminarJuego(personajes[0], personajes[1])) {

    if (funcionesBatalla.determinarTurno(personajes[0], personajes[1]) === "personaje1") {
        funcionesBatalla.ataqueP1(personajes[0], personajes[1]);
        if (personajes[1].currentHealth > 0) {
            funcionesBatalla.ataqueP2(personajes[0], personajes[1]);
        }
    } else {
        funcionesBatalla.ataqueP2(personajes[0], personajes[1]);
        if (personajes[0].currentHealth > 0) {
            funcionesBatalla.ataqueP1(personajes[0], personajes[1]);
        }
    }

}

if (!funcionesBatalla.terminarJuego(personajes[0].currentHealth, personajes[1].currentHealth)) {
        funcionesBatalla.mostrarResumen(personajes[0], personajes[1]);
    }

