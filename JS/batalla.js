const ataques = require('../attacks.json')



function combate(){
    crearPesonaje()
}

function numeroRandom(min , max ){
    return Math.random() * (max - min) + min 
}

function nombreRandom(nombres){
    let nombres = ['Juan' , 'Diego' , 'Pepe' , 'Haaland']
    return nombreAlzar = nombres[Math.floor(Math.random() * miArray.length)];
}

function crearPesonaje () {
    let personajes = []
    
    for(let i = 0 ;  i<2 ; i++){
        const vida = Number.parseInt(numeroRandom(100 , 200))

        let personaje = {
            nombre : 'Jugador' + i , 
            vidaMaxima : vida,
            vidaActual : vida ,
            daño : numeroRandom(15 , 30)
        }
        jugadores.push(jugador)
    }
    console.log(jugadores);

    //pelea(jugadores)
   
}

combate()