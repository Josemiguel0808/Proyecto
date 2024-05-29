var configuracion = //La variable configuración guardarárá todo lo que se programará en el juego.
{
    type:Phaser.AUTO, //Llamamos al marco de juego de Javascript.
    width:966, //Tamaño de la pantalla del juego que se va a visualizar.
    height:392,
    physics:
    {
        default: 'arcade',
        arcade:
        {
            gravity: {y: 300},
            debug:false
        }
    },
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
this.load.image('fondojuego', 'imagenesjuego/fondojuego.png');
this.load.image('cpuinfectada', 'imagenesjuego/cpuinfectada.png');
this.load.image('cpusana', 'imagenesjuego/cpusana.png');
this.load.image('tuberia1', 'imagenesjuego/tuberia1.png');
this.load.image('tuberia2', 'imagenesjuego/tuberia2.png');
this.load.image('tuberia3', 'imagenesjuego/tuberia3.png');
this.load.image('tuberia4', 'imagenesjuego/tuberia4.png');
this.load.spritesheet('dude', 'imagenesjuego/dude.png', {frameWidth: 32, frameHeight: 48}); //se carga el sprite del personaje que el jugador podrá controlar.
                                                                                            //Un sprite es una imagen en píxeles que se usan en los videojuegos para crear animaciones en los personajes.
}

function crear()
{
    this.add.image(483, 196, 'fondojuego'); //Se muestra "por ahora" en la mitad del tamaño de la imagen para que Phaser lo posicione en medio de la escena del juego. Más tarde será cambiado.
    plataformas=this.physics.add.staticGroup(); //Este objeto quiere decir que será un objeto con físicas y que será estático, que no se va a mover. Es donde se posará el jugador.
    
}

function actualizar()
{
    
}