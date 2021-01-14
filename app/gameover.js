/* Juego de preguntas (opciones) - Botanical-online.com - (c) 2016, Daniel Martínez Bou - all rights reserved */
juego.gameOver=function(a){this.game=a};

juego.gameOver.prototype={
  create:function(){
    this.game.add.sprite(this.game.world.width/2,16,"logo").anchor.setTo(.5,0);
    var a,b;
    for(a=0;a<this.game.global.VALORACIONES.length&&!(juego.ACIERTOS<this.game.global.VALORACIONES[a][0]);a++)b=this.game.global.VALORACIONES[a][1];a={font:"30px Arial",fill:"white",align:"center",wordWrap:!0,wordWrapWidth:.9*this.game.world.width};
    a=this.game.add.text(this.game.world.width/2,this.game.world.height/2,this.game.global.TEXTOS.valoracion,a);
    a.setShadow(1,1,"rgba(0,0,0,0.7)",2);
a.anchor.setTo(.5,0);a.y-=60;

var c=juego.ACIERTOS+this.game.global.TEXTOS.valoracion_de+this.game.global.PREGUNTAS.length;a={font:"bold 90px Courier",fill:"#FFA539",align:"center"};
a=this.game.add.text(this.game.world.width/2,this.game.world.height/2-20,c,a);
a.setShadow(0,0,"rgba(52,32,18,0.7)",4);
a.anchor.setTo(.5,0);
a={font:"30px Arial",fill:"white",align:"center",wordWrap:!0,wordWrapWidth:.9*this.game.world.width};
a=this.game.add.text(this.game.world.width/2,this.game.world.height/2,b,a);a.setShadow(1,1,"rgba(0,0,0,0.7)",2);
a.anchor.setTo(.5,0);
a.y+=90;
b=juego.creaBoton(this.game,this.game.width/2,this.game.height,this.game.global.TEXTOS.boton_replay,this._a);
b.y-=b.height+20;
new juego.botonResize(this.game);
new juego.botonMusica(this.game)},_a:function(){this.game.add.audio("empezar").play();
this.tween=juego.doCortinilla(this.game,!1,!0);
this.tween.onComplete.add(function(){this.game.state.start("TheGame")},this)}};