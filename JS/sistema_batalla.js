
let fallosP1 = 0;
let fallosP2 = 0;
let turno = 1;

//let log = '### INICIO ###'

function anuncioBatalla(personaje1, personaje2) {

    //console.log("### INICIO ###");
    //console.log(`${personaje1.name} | ${personaje1.class} | ${personaje1.maxHealth} de vida VS ${personaje2.name} | ${personaje2.class} | ${personaje2.maxHealth} de vida`);
  //  log += `\n${personaje1.name} | ${personaje1.class} | ${personaje1.maxHealth} de vida VS ${personaje2.name} | ${personaje2.class} | ${personaje2.maxHealth} de vida ` 

  return `\n${personaje1.name} | ${personaje1.class} | ${personaje1.maxHealth} de vida VS ${personaje2.name} | ${personaje2.class} | ${personaje2.maxHealth} de vida `
}

// Quien tenga la mayor velocidad empieza atacando
function determinarTurno(personaje1, personaje2) {
    if (personaje1.speed > personaje2.speed) {
        return "personaje1";
    } else if(personaje1.speed === personaje2.speed) {
        return escogerTurno();
    } else {
        return "personaje2";
    }
}

// Si las velocidades son iguales, escoge una al azar
function escogerTurno() {
    const numRandom = Number.parseInt(Math.random() * 2);
    if (numRandom === 0) {
        return "personaje1";
    } else {
        return "personaje2";
    }
}

// Escoge un ataque de manera random (50% de probabilidad cada uno)
function escogerAtaque(personaje) {
    const numRandom = Number.parseInt(Math.random() * 2);
    if (numRandom === 0) {
        return personaje.firstAttack;
    } else {
        return personaje.secondAttack;
    }
}

// Si la precisión es igual o mayor que el porcentaje, el personaje ataca
// Si es menor, el personaje falla el ataque
function aciertaAtaque(ataque) {
    const porcentaje = Number.parseInt(Math.random() * 101);
    if (ataque.accuracy >= porcentaje) {
        return true;
    } else {
        return false;
    }
}

// Ataque del personaje 1
function ataqueP1(personaje1, personaje2) {
    if (personaje1.currentHealth || personaje2.currentHealth > 0) {
        let ataque = escogerAtaque(personaje1);
        let danio = 0;
        if (aciertaAtaque(ataque)) {
            danio = ataque.damage;
            personaje2.currentHealth -= danio;
            if (personaje2.currentHealth < 0) {
                personaje2.currentHealth = 0;
            }
            console.log(`Turno ${turno}`);
            console.log(`${personaje1.name} ataca con ${ataque.name}... Da en el blanco!. La vida del ${personaje2.name} queda en ${personaje2.currentHealth}`);
            turno++;

            return `\nTurno ${turno} \n ${personaje1.name} ataca con ${ataque.name}... Da en el blanco!. La vida del ${personaje2.name} queda en ${personaje2.currentHealth}`
        } else {
            fallosP1++;
            console.log(`Turno ${turno}`);
            console.log(`${personaje1.name} ataca con ${ataque.name}... Falla!. La vida del ${personaje2.name} se mantiene en ${personaje2.currentHealth}`);
            turno++;
            return `\nTurno ${turno} \n ${personaje1.name} ataca con ${ataque.name}.... Falla!. La vida del ${personaje2.name} se mantiene en ${personaje2.currentHealth}`
        }
    }
}

//Ataque del personaje 2
function ataqueP2(personaje1, personaje2) {
    if (personaje1.currentHealth || personaje2.currentHealth > 0) {
        let ataque = escogerAtaque(personaje1);
        let danio = 0;
        if (aciertaAtaque(ataque)) {
            danio = ataque.damage;
            personaje1.currentHealth -= danio
            if (personaje1.currentHealth < 0) {
                personaje1.currentHealth = 0;
            }
            console.log(`Turno ${turno}`);
            console.log(`${personaje2.name} ataca con ${ataque.name}... Da en el blanco!. La vida del ${personaje1.name} queda en ${personaje1.currentHealth}`);
            turno++;
            return `\nTurno ${turno} \n ${personaje2.name} ataca con ${ataque.name}... Da en el blanco!. La vida del ${personaje1.name} queda en ${personaje1.currentHealth}`
        } else {
            fallosP2++;
            console.log(`Turno ${turno}`);
            console.log(`${personaje2.name} ataca con ${ataque.name}... Falla!. La vida del ${personaje1.name} se mantiene en ${personaje1.currentHealth}`);
            turno++;
            return `\nTurno ${turno}\n${personaje2.name} ataca con ${ataque.name}... Falla!. La vida del ${personaje1.name} se mantiene en ${personaje1.currentHealth}`
        }
    }
}

function anunciarGanador(personaje1, personaje2) {
    if (personaje1.currentHealth <= 0) {
        console.log(`${personaje2.name} gana la batalla!`)
        return `\n${personaje2.name} gana la batalla! `
    } else if (personaje2.currentHealth <= 0) {
        console.log(`${personaje1.name} gana la batalla!`)
        return `\n${personaje1.name} gana la batalla! `
    }
}

function mostrarResumen(personaje1, personaje2) {
    anunciarGanador(personaje1, personaje2);
    console.log(`El ${personaje1.name} falló ${fallosP1} veces su ataque.`)
    console.log(`El ${personaje2.name} falló ${fallosP2} veces su ataque.`)
    return '\n'+anunciarGanador(personaje1, personaje2) +  `\n El ${personaje1.name} falló ${fallosP1} veces su ataque. \nEl ${personaje2.name} falló ${fallosP2} veces su ataque.` 
}

function terminarJuego(personaje1, personaje2) {
    if (personaje1.currentHealth <= 0 || personaje2.currentHealth <= 0) {
        return true;
    }
}

module.exports = { anuncioBatalla,  determinarTurno, ataqueP1, ataqueP2, mostrarResumen, terminarJuego , };