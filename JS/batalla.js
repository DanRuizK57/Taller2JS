const ataques = require('../attacks.json')



function combate() {
    crearPesonaje()
}

function numeroRandom(min, max) {
    return Math.random() * (max - min) + min
}

function nombreRandom() {
    const nombres = ['Juan', 'Diego', 'Pepe', 'Haaland']
    return nombres[Math.floor(Math.random() * nombres.length)];
}

function nombreRandom2() {
    const nombres = ['Pedro', 'Davids', 'Cristiano', 'Alexis']
    return nombres[Math.floor(Math.random() * nombres.length)];
}

function ataqueRandom(ataques) {
    return ataques[Math.floor(Math.random() * ataques.length)];
}

function claseRandom() {
    const clases = ['MAGICIAN', 'KNIGHT', 'WARRIOR', 'FAIRY']
    return clases[Math.floor(Math.random() * clases.length)];
}
function ataquesMagicos(){
    let ataqueMagico = ataques.filter(ataque => ataque.type == 'MAGIC')
    return ataqueMagico[Math.floor(Math.random() * ataqueMagico.length)];

}
function ataquesFisicos(){
    let ataquesFisicos = ataques.filter(ataque => ataque.type == 'PHYSICAL')
    return ataquesFisicos[Math.floor(Math.random() * ataquesFisicos.length)];

}

function crearPesonaje() {
    let personajes = []
    for (let i = 0; i < 2; i++) {
        const vida = Number.parseInt(numeroRandom(100, 200))
        const velocidad = Number.parseInt(numeroRandom(1 ,10))
        let nombreAlAzar = nombreRandom()
        let claseAlAzar = claseRandom()
        let personaje;
        if(personajes.length>0){
            for(let j = 0 ; j < personajes.length ; j++){
                if(nombreAlAzar == personajes[j].name){
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