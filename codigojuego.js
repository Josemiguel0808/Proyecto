var configuracion = //La variable configuración guardarárá todo lo que se programará en el juego.
{
    type:Phaser.AUTO, //Llamamos al marco de juego de Javascript.
    width:966, //Tamaño de la pantalla del juego que se va a visualizar.
    height:392,
    scene: //La escena es la variable en la que irá TODO lo que contenga el juego.
    {
        precarga: precarga, //Aquí van las imágenes que compone el juego.
        crear: crear, //Aquí irá los objetos que tendrá el juego (plataformas, personaje, etc).
        actualizar: actualizar //Aquí captará los movimientos que haga el jugador.
    }
};
var juego=new Phaser.Game(configuracion);

function precarga()
{
this.load.image('fondojuego', 'imagenesjuego/fondojuego.png')
}

function crear()
{
    this.add.image(483, 196, 'fondojuego') //Se muestra "por ahora" en la mitad del tamaño de la imagen para que Phaser lo posicione en medio de la escena del juego. Más tarde será cambiado.
}

function actualizar()
{
    
}
