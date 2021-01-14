/* Juego de preguntas (opciones) - Botanical-online.com - (c) 2016, Daniel Martínez Bou - all rights reserved */

//alert('boot.js aaa');
var juego={SONIDO:"true",BOTON_SONIDO:null,MODESCREEN:0,BOTON_SCREEN:null,ACIERTOS:0,
  boot:function(a){
    this.game=a;
  //  console.log("%c  \u270c  %c Juego de Preguntas (opciones) 1.0 %c https://www.botanical-online.com ","color:white;background:#339933;","color:white;background:#FFA539","color:white;background:#339933;")
  }
};
  
juego.boot.prototype={init:function(){var a=localStorage.getItem("sonido");a&&(juego.SONIDO=a);
  this.game.sound.mute="true"==juego.SONIDO?!1:!0},
  preload:function(){
    this.game.stage.backgroundColor="#339933";
//    this.game.load.image("carga_barra","/app/assets/carga_barra.png");
//    this.game.load.image("carga_fondo","/app/assets/carga_fondo.png")},

    //var baseUrl = '/scu-canvas/';
    //var baseUrl = 'https://flash-chat2-takeshininnin.web.app/';
    var baseUrl = 'https://kodaira313ayahoo.github.io/flower-parts-game/';
    this.game.load.image("carga_barra", baseUrl + "app/assets/carga_barra.png");
    this.game.load.image("carga_fondo", baseUrl + "app/assets/carga_fondo.png")},
  create:function(){
    this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally=!0;
    this.game.scale.pageAlignVertically=!0;
    this.game.scale.forceOrientation(!0,!1);

    this.state.start("Preload");

//eval(atob("aWYoZG9jdW1lbnQuZG9tYWluIT0id3d3LmJvdGFuaWNhbC1vbmxpbmUuY29tIil7CiAgICB3aW5kb3cuYWxlcnQoIkxhIGFwbGljYWNpb24gbm8gc2UgcHVlZGUgZWplY3V0YXIgZW4gZXN0ZSBzZXJ2aWRvci4gUG9yIGZhdm9yLCB2aXNpdGUgYm90YW5pY2FsLW9ubGluZS5jb20iKTsKICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gImh0dHBzOi8vd3d3LmJvdGFuaWNhbC1vbmxpbmUuY29tLz9yZWY9QXBwSFRNTDUiOwp9ZWxzZXsKICAgIHRoaXMuc3RhdGUuc3RhcnQoIlByZWxvYWQiKTsKfQ=="));
}};
