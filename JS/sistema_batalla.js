const personaje1 = {
    name: "Juan",
    class: "Clase",
    maxHealth: 100,
    currentHealth: 100,
    speed: 8
}

const personaje2 = {
    name: "Pepe",
    class: "Clase",
    maxHealth: 200,
    currentHealth: 200,
    speed: 4
}

function anuncioBatalla(personaje1, personaje2) {
    console.log("### INICIO ###");
    console.log(`${personaje1.name} | ${personaje1.class} | ${personaje1.maxHealth} de vida VS ${personaje2.name} | ${personaje2.class} | ${personaje2.maxHealth} de vida`);
}

// Quien tenga la mayor velocidad empieza atacando
function determinarTurno(personaje1, personaje2) {
    if (personaje1.speed > personaje2.speed) {
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
        let danio = ataque.damage;
        personaje2.currentHealth -= danio;
        console.log(`${personaje1.name} atacó y le hizo ${danio} de daño a ${personaje2.name}`)
    }
}

//Ataque del personaje 2
function ataqueP2(personaje1, personaje2) {
    if (personaje1.currentHealth && personaje2.currentHealth > 0) {
        let ataque = escogerAtaque(personaje1);
        let danio = ataque.damage;
        personaje1.currentHealth -= danio
        console.log(`${personaje2.name} atacó y le hizo ${danio} de daño a ${personaje1.name}`)
    }
}

anuncioBatalla(personaje1, personaje2);