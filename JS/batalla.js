const ataques = require('../attacks.json')



/**
 * Funcion que sirve como punto de partida para ejecutar los procesos
 */
function combate() {
    crearPesonaje()
}

/**
 * Funcion utilizada para obtener numeros al azar entre un rango determinado. Esta funcion
 * es utilizada para dar atributos numericos al azar al momento de crear los personajes
 * @returns numero decimal al azar entre un rango determinado.
 */
function numeroRandom(min, max) {
    return Math.random() * (max - min) + min
}
/**
 * Funcion que escoge un nombre al azar para crear los personajes
 * Es el primer 'pool' de nombres a utilizar
 * @returns nombre de tipo string para un personaje
 */

function nombreRandom() {
    const nombres = ['Juan', 'Diego', 'Pepe', 'Haaland']
    return nombres[Math.floor(Math.random() * nombres.length)];
}

/**
 * Funcion que escoge un nombre al azar solo si al crear los personajes los nombres se repite
 * Funciona como una segunda 'pool' de nombres en caso de que en la primera se repita los nombres
 * @returns nombre de tipo string para un personaje 
 */
function nombreRandom2() {
    const nombres = ['Pedro', 'Davids', 'Cristiano', 'Alexis']
    return nombres[Math.floor(Math.random() * nombres.length)];
}

/**
 * Funcion que escoge una clase de las cuales puede ser un personaje y es utilizada en la creacion de estos.
 * @returns retorna el nombre de una clase al azar.
 */
function claseRandom() {
    const clases = ['MAGICIAN', 'KNIGHT', 'WARRIOR', 'FAIRY']
    return clases[Math.floor(Math.random() * clases.length)];
}

/**
 * Funcion que escoge un ataque magico y es utilizada en la creacion de los personajes
 * @returns retorna un magico fisico escogido al azar del JSON entregado
 */
function ataquesMagicos() {
    let ataqueMagico = ataques.filter(ataque => ataque.type == 'MAGIC')
    return ataqueMagico[Math.floor(Math.random() * ataqueMagico.length)];
}

/**
 * Funcion que escoge un ataque fisico y es utilizada en la creacion de los personajes
 * @returns retorna un ataque fisico escogido al azar del JSON entregado
 */
function ataquesFisicos() {
    let ataquesFisicos = ataques.filter(ataque => ataque.type == 'PHYSICAL')
    return ataquesFisicos[Math.floor(Math.random() * ataquesFisicos.length)];

}

/**
 * Fucionalidad que crea los pesonasjes. Esta funcionalidad va creando los personajes con un ciclo
 * for y utiliza las demas funciones creadas anteriormente para completar los campos de los objetos JavaScript que 
 * en este caso son los personajes.
 */
function crearPesonaje() {
    let personajes = []
    for (let i = 0; i < 2; i++) {
        const vida = Number.parseInt(numeroRandom(100, 200))
        const velocidad = Number.parseInt(numeroRandom(1, 10))
        let nombreAlAzar = nombreRandom()
        const claseAlAzar = claseRandom()
        let personaje;
        if (personajes.length > 0) {
            for (let j = 0; j < personajes.length; j++) {
                if (nombreAlAzar == personajes[j].name) {
                    nombreAlAzar = nombreRandom2()
                }
            }
        }
        switch (claseAlAzar) {
            case 'MAGICIAN':
                personaje = {
                    name: nombreAlAzar,
                    class: claseAlAzar,
                    firstAttack: ataquesMagicos(),
                    secondAttack: ataquesMagicos(),
                    Maxhealth: vida,
                    currentHealth: vida,
                    speed: velocidad,
                }
                break;
            case 'KNIGHT':
                personaje = {
                    name: nombreAlAzar,
                    class: claseAlAzar,
                    firstAttack: ataquesFisicos(),
                    secondAttack: ataquesFisicos(),
                    Maxhealth: vida,
                    currentHealth: vida,
                    speed: velocidad,
                }
                break;
            case 'WARRIOR':
                personaje = {
                    name: nombreAlAzar,
                    class: claseAlAzar,
                    firstAttack: ataquesFisicos(),
                    secondAttack: ataquesFisicos(),
                    Maxhealth: vida,
                    currentHealth: vida,
                    speed: velocidad,
                }
                break;
            case 'FAIRY':
                personaje = {
                    name: nombreAlAzar,
                    class: claseAlAzar,
                    firstAttack: ataquesMagicos(),
                    secondAttack: ataquesMagicos(),
                    Maxhealth: vida,
                    currentHealth: vida,
                    speed: velocidad,
                }
                break;
        }
        personajes.push(personaje)
    }
    console.log(personajes);

    //pelea(jugadores)

}

combate()