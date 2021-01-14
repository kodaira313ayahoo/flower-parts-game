/* Juego de preguntas (opciones) - Botanical-online.com - (c) 2016, Daniel Martínez Bou - all rights reserved */
juego.preload=function(a){this.game=a};
juego.preload.prototype={
  preload:function(){
    this.stage.backgroundColor="#339933";
    var a=this.add.sprite(this.game.width/2,this.game.height/2,"carga_fondo");
    a.anchor.setTo(0,.5);a.scale.setTo(3);
    a.x-=a.width/2;
    var b=this.add.sprite(this.game.width/2,this.game.height/2,"carga_barra");
    b.anchor.setTo(0,.5);
    b.scale.setTo(3);
    b.x-=a.width/2;
    this.load.setPreloadSprite(b);
    //var baseUrl = '/scu-canvas/';
    //var baseUrl = 'https://flash-chat2-takeshininnin.web.app/';
    var baseUrl = 'https://kodaira313ayahoo.github.io/flower-parts-game/';
    
    
    this.game.load.image("logo", baseUrl + "app/assets/logo_botanical.png");
    this.game.load.spritesheet("boton", baseUrl + "app/assets/boton.png",214,62);
    this.game.load.spritesheet("boton_restart", baseUrl + "app/assets/boton-restart.png",72,62);
    this.game.load.spritesheet("boton_help", baseUrl + "app/assets/boton-help.png",72,62);
    this.game.load.spritesheet("boton_normalscreen", baseUrl + "app/assets/boton-normalscreen.png",72,62);
    this.game.load.spritesheet("boton_fullscreen", baseUrl + "app/assets/boton-fullscreen.png",72,62);
    this.game.load.spritesheet("boton_widescreen", baseUrl + "app/assets/boton-widescreen.png",72,62);
    this.game.load.spritesheet("boton-sonido", baseUrl + "app/assets/boton-music.png",72,62);
    this.game.load.spritesheet("boton-no-sonido", baseUrl + "app/assets/boton-mute.png",72,62);
    this.game.load.spritesheet("tick_anim", baseUrl + "app/assets/tick_anim.png",58,51);
    this.game.load.spritesheet("cruz_anim", baseUrl + "app/assets/cruz_anim2.png",58,51);
    this.game.load.audio("no",["app/assets/no.mp3", baseUrl + "app/assets/no.ogg"]);
    this.game.load.audio("si",["app/assets/si.mp3", baseUrl + "app/assets/si.ogg"]);
    this.game.load.audio("final",["app/assets/final.mp3", baseUrl + "app/assets/final.ogg"]);
    this.game.load.audio("opcion",["app/assets/opcion.mp3", baseUrl + "app/assets/opcion.ogg"]);
    this.game.load.audio("tecla",["app/assets/tecla.mp3", baseUrl + "app/assets/tecla.ogg"]);
    this.game.load.audio("volver",["app/assets/volver.mp3", baseUrl + "app/assets/volver.ogg"]);
    this.game.load.audio("empezar",["app/assets/empezar.mp3", baseUrl + "app/assets/empezar.ogg"]);
    this.game.load.audio("popup",["app/assets/popup.mp3", baseUrl + "app/assets/popup.ogg"]);
    this.game.load.audio("slider",["app/assets/slider.mp3", baseUrl + "app/assets/slider.ogg"]);
    this.game.load.audio("ayuda",["app/assets/ayuda.mp3", baseUrl + "app/assets/ayuda.ogg"]);
    this.game.load.image("error", baseUrl + "app/assets/"+this.game.global.GRAFICOS.error);
    this.game.load.image("acierto", baseUrl + "app/assets/"+this.game.global.GRAFICOS.acierto);
    this.game.load.image("estadisticas", baseUrl + "app/assets/"+this.game.global.GRAFICOS.estadisticas);
    this.game.load.image("clica-movil", baseUrl + "app/assets/"+this.game.global.GRAFICOS.clica_pantalla);
    for(a=0;a<this.game.global.PREGUNTAS.length;a++)void 0!=this.game.global.PREGUNTAS[a].reflejo&&this.game.load.image(this.game.global.PREGUNTAS[a].reflejo, baseUrl + "app/assets/"+this.game.global.PREGUNTAS[a].reflejo),void 0!=this.game.global.PREGUNTAS[a].grafico&&
this.game.load.image(this.game.global.PREGUNTAS[a].grafico, baseUrl + "app/assets/"+this.game.global.PREGUNTAS[a].grafico)},create:function(){this.game.state.start("GameTitle")}};