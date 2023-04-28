const personaje1 = {
    name: "Juan",
    class: "Clase",
    maxHealth: 100,
    currentHealth: 100,
    speed: 8,
    firstAttack: {
        name: "Kick",
        damage: 20,
        accuracy: 65,
        type: 'PHYSICAL'
    },
    secondAttack: {
        name: "Hit",
        damage: 10,
        accuracy: 45,
        type: 'PHISIC'
    }
}

const personaje2 = {
    name: "Pepe",
    class: "Clase",
    maxHealth: 200,
    currentHealth: 200,
    speed: 4
    ,
    firstAttack: {
        name: "Kick",
        damage: 20,
        accuracy: 65,
        type: 'PHYSICAL'
    },
    secondAttack: {
        name: "Hit",
        damage: 10,
        accuracy: 45,
        type: 'PHISIC'
    }
}

let fallosP1 = 0;
let fallosP2 = O;

function anuncioBatalla(personaje1, personaje2) {
    console.log("### INICIO ###");
    console.log(`${personaje1.name} | ${personaje1.class} | ${personaje1.maxHealth} de vida VS ${personaje2.name} | ${personaje2.class} | ${personaje2.maxHealth} de vida`);
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
    if (personaje1.currentHealth && personaje2.currentHealth > 0) {
        let ataque = escogerAtaque(personaje1);
        let danio = 0;
        if (aciertaAtaque(ataque)) {
            danio = ataque.damage;
            personaje2.currentHealth -= danio;
            console.log(`${personaje1.name} ataca con ${ataque.name}... Da en el blanco!. La vida del ${personaje2.name} queda en ${personaje2.currentHealth}`)
        } else {
            fallosP1++;
            console.log(`${personaje1.name} ataca con ${ataque.name}... Falla!. La vida del ${personaje2.name} se mantiene en ${personaje2.currentHealth}`)
        }
    }
}

//Ataque del personaje 2
function ataqueP2(personaje1, personaje2) {
    if (personaje1.currentHealth && personaje2.currentHealth > 0) {
        let ataque = escogerAtaque(personaje1);
        let danio = 0;
        if (aciertaAtaque(ataque)) {
            danio = ataque.damage;
            personaje1.currentHealth -= danio
            console.log(`${personaje2.name} ataca con ${ataque.name}... Da en el blanco!. La vida del ${personaje1.name} queda en ${personaje1.currentHealth}`)
        } else {
            fallosP2++;
            console.log(`${personaje2.name} ataca con ${ataque.name}... Falla!. La vida del ${personaje1.name} se mantiene en ${personaje1.currentHealth}`)
        }
    }
}

function anunciarGanador() {
    if (personaje1.currentHealth <= 0) {
        console.log(`${personaje2.nombre} gana la batalla!`)
    } else if (personaje2.vidaActual <= 0) {
        console.log(`${personaje1.nombre} gana la batalla!`)
    }
}

function mostrarResumen() {
    anunciarGanador();
    console.log(`El ${personaje1.name} falló ${fallosP1} veces su ataque.`)
    console.log(`El ${personaje2.name} falló ${fallosP2} veces su ataque.`)
}