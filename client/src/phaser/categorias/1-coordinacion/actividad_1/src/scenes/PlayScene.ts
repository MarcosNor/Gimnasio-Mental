import * as Phaser from 'phaser';
import { SCENE_KEYS } from '../utils/common';
import BaseScene from './BaseScene';
import { type Item } from '@/types/item';


class PlayScene extends BaseScene {

  // Tamaño de los botones
  private buttonWidth = 180;
  private buttonHeight = 70;

  private indice = 0;

  private aciertos = 0;
  private puntuacion = 0;

  private multiplicador = 1;
  private combo = 0;
  private esCombo = false;
  private tiempoLimiteCombo = 3000; 
  private comboEnergia = 0;
  private readonly COMBO_MAX = 500;

  private barraCombo!: Phaser.GameObjects.Graphics;
  private fondoBarraCombo!: Phaser.GameObjects.Graphics;
  private barraComboWidth = 200;
  private barraComboHeight = 20;
  private comboTexto!: Phaser.GameObjects.Text;

  // Mover el combo necesario a una variable

  private PuntuacionText!: Phaser.GameObjects.Text;

  private timer = 30;
  private timerText!: Phaser.GameObjects.Text;
  private timerEvent!: Phaser.Time.TimerEvent;


  private preguntaText!: Phaser.GameObjects.Text;

  private botones: Phaser.GameObjects.Container[] = [];
  private bloqueado = false;

  private preguntas: Item[];

  constructor(preguntas: Item[]) {
    super(SCENE_KEYS.PLAY);
    this.preguntas = preguntas;
  }
  
  public create(): void {

    super.create();

    this.aciertos = 0;
    this.puntuacion = 0;
    this.multiplicador = 1;
    this.combo = 0;
    this.esCombo = false;

    this.crearBackButton(SCENE_KEYS.MENU);

    this.crearPreguntaText();
    this.crearPregunta();

    this.crearPuntuacion();
    this.crearCombo();
    this.crearBarraCombo();

    this.crearTimer();

  }

  update(time: number, delta: number): void {

    // No drenar combo si está bloqueado (esperando animacion)
    if (this.bloqueado) return;

    // No drenar combo vacio
    if( this.comboEnergia <= 0) {
      return;
    }

    console.log(this.comboEnergia);

    
    // Drenar combo
    this.comboEnergia -= (delta / this.tiempoLimiteCombo) * this.COMBO_MAX;

    this.comboEnergia = Phaser.Math.Clamp(this.comboEnergia, 0, this.COMBO_MAX);

    this.actualizarBarraCombo();
  }

  crearPreguntaText(){
    const { width } = this.scale;

    this.preguntaText = this.add.text(width / 2, 200, '', {
      ...this.fontOptions,
      wordWrap: { width: width - 40 }
    }).setOrigin(0.5);
  }

  crearPregunta() {

    const pregunta = this.preguntas[this.indice];
    if (!pregunta) return;

    const { width, height } = this.scale;

    this.preguntaText.setText(pregunta.pregunta);

    // Limpiar botones anteriores
    this.botones.forEach(boton => boton.destroy());

    this.botones = [];
    this.bloqueado = false;
    const spacing = 220;

    const respuestasRandomizadas = Phaser.Utils.Array.Shuffle([...pregunta.respuesta]);
    const total = respuestasRandomizadas.length;

    // Creando respuestas correspondientes a la pregunta
    respuestasRandomizadas.forEach((opcion, i) => {
      const x = width / 2 + (i - (total - 1) / 2) * spacing;
      const y = height - 150;
      const btn = this.crearBoton(x, y, opcion.text_respuesta, opcion.correcta);

      this.botones.push(btn);
    });
  }

  crearBoton(x: number, y:number, texto: string, esCorrecta: boolean): Phaser.GameObjects.Container {
    const container = this.add.container(x, y);
    const width = this.buttonWidth;
    const height = this.buttonHeight;

    const bg = this.add.graphics();
    bg.fillStyle(0x2d2d2d, 1);
    bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);

    
    const label = this.add.text(0, 0, texto, {
      ...this.fontOptionsBotones,
      align: 'center',
      wordWrap: { width: width - 20 }
    }).setOrigin(0.5);

    container.add([bg, label]);
    container.setSize(width, height);
    container.setInteractive();

    // hover
    // Cuando el mouse sale del botón
    container.on('pointerout', () => {
      bg.clear();
      bg.fillStyle(0x2d2d2d);
      bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);
    })

    // Mouse sobre el botón
    container.on('pointerover', () => {
      if (this.bloqueado) return;

      bg.clear();
      bg.fillStyle(0x555555);
      bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);
    })

    // click en el botón
    container.on('pointerdown', () => {
      this.responder(esCorrecta, container, bg);
    });
    
    return container
  }

  responder(esCorrecta: boolean, container: Phaser.GameObjects.Container, bg: Phaser.GameObjects.Graphics) {
    const width = this.buttonWidth;
    const height = this.buttonHeight;

    if (this.bloqueado) return;
    this.bloqueado = true;

    // pintar resultado

    bg.clear();
    bg.fillStyle(esCorrecta ? 0x4caf50 : 0xf44336);
    bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);

    // icono de check o cruz
    const icono = this.add.text(0, -40, esCorrecta ? '✓' : '✗', {
      fontSize: '40px', 
      color: esCorrecta ? '#00f00' : '#ff0000'
    }).setOrigin(0.5)

    if (esCorrecta) {
      this.incrementarPuntuacion();
      this.aciertos++;
      this.logicaCombo();
      this.comboEnergia += 400;

    } else {
      if (this.esCombo) {
        this.crearPerderCombo();
      }
      this.esCombo = false;
      this.comboEnergia -= 40;

      this.combo = 0;
      this.multiplicador = 1;
    }

    this.comboEnergia = Phaser.Math.Clamp(
      this.comboEnergia,
      0,
      this.COMBO_MAX
    );

    this.actualizarBarraCombo();


    this.tweens.add({
      targets: icono,
      scale: { from: 0, to: 1 },
      duration: 200
    })

    container.add(icono);

    // pasar a la siguiente pregunta después de un delay
    this.time.delayedCall(500, () => {
      this.siguientePregunta();
    });
  }

  siguientePregunta() {
    this.indice++;
    if (this.indice >= this.preguntas.length) {
      this.indice = 0; // Reiniciar al inicio
    }

    this.crearPregunta();
  }

  crearPuntuacion () {
    this.puntuacion = 0;
    this.PuntuacionText = this.add.text(16, 16, `Puntuación: ${this.puntuacion}`, {fontSize: '32px', color: '#000'});
  }

  incrementarPuntuacion() {
    this.puntuacion += (100 * this.multiplicador)
    this.PuntuacionText.setText(`Puntuacion: ${this.puntuacion}`);
  }

  logicaCombo() {

  }

  
  crearCombo() {
    if(!this.esCombo) return;
    
    // Mostrar texto de combo
    const comboText = this.add.text(this.screenCenter[0], this.screenCenter[1], `Combo x${this.multiplicador}!`, {
      fontSize: '48px',
      color: '#ff0',
      stroke: '#000',
      strokeThickness: 4
    }).setOrigin(0.5);

    // Animación del combo
    this.tweens.add({
      targets: comboText,
      y: comboText.y - 50,
      alpha: { from: 1, to: 0 },
      duration: 1000,
      onComplete: () => {
        comboText.destroy();
      }
    });
  }

  crearBarraCombo() {
    const { width } = this.scale;
    const x = width - 16 - this.barraComboWidth / 2;
    const y = 50;

    // Fondo de la barra
    this.fondoBarraCombo = this.add.graphics();
    this.fondoBarraCombo.fillStyle(0x000000, 0.5);
    this.fondoBarraCombo.fillRect(x - this.barraComboWidth / 2, y - this.barraComboHeight / 2, this.barraComboWidth, this.barraComboHeight);

    // Barra de combo
    this.barraCombo = this.add.graphics();
    this.barraCombo.fillStyle(0xffff00, 1);
    this.barraCombo.fillRect(x - this.barraComboWidth / 2, y - this.barraComboHeight / 2, 0, this.barraComboHeight);

    // Texto de combo
    this.comboTexto = this.add.text(x, y - 30, '', {
      fontSize: '24px',
      color: '#ff0',
      stroke: '#000',
      strokeThickness: 4
    }).setOrigin(0.5);

    this.actualizarBarraCombo();
  }

  actualizarBarraCombo() {

    const x = 20;
    const y = 100;

    const width = 300;
    const height = 30;

    // porcentaje actual
    const porcentaje = this.comboEnergia / this.COMBO_MAX;

    // limpiar
    this.fondoBarraCombo.clear();
    this.barraCombo.clear();

    // fondo
    this.fondoBarraCombo.fillStyle(0x222222, 1);

    this.fondoBarraCombo.fillRoundedRect(x, y, width, height, 10);

    // color dinámico
    let color = 0x4caf50;

    if (porcentaje < 0.66) {
      color = 0xffc107;
    }

    if (porcentaje < 0.33) {
      color = 0xf44336;
    }

    // barra
    this.barraCombo.fillStyle(color, 1);

    this.barraCombo.fillRoundedRect(x, y, width * porcentaje, height, 10);

    // multiplicador visual
    const multiplicador =
      Math.floor(this.comboEnergia / 100) + 1;

    this.comboTexto.setText(
      `Combo x${multiplicador}`
    );
  }

  crearPerderCombo() {
    // Mostrar texto de perder combo
    const loseComboText = this.add.text(this.screenCenter[0], this.screenCenter[1], `Combo perdido`, {
      fontSize: '48px',
      color: '#f00',
      stroke: '#000',
      strokeThickness: 4
    }).setOrigin(0.5);

    // Animación del texto
    this.tweens.add({
      targets: loseComboText,
      y: loseComboText.y - 50,
      alpha: { from: 1, to: 0 },
      duration: 1000,
      onComplete: () => {
        loseComboText.destroy();
      }
    });
  }

  crearTimer(): void {
    this.timer = 30;
    this.timerText = this.add.text(16, 50, `Tiempo: ${this.timer}`, {fontSize: '32px', color: '#000'});
    this.timerEvent = this.time.addEvent({
      delay: 1000,
      callback: () => {
        this.timer--;
        this.actualizarTextoTimer();

        // Si el tiempo se acaba, nos manda a la página de puntuación
        if (this.timer <= 0) {
          this.timerEvent.remove();

          // Iniciamos ScoreScene
          this.scene.start(SCENE_KEYS.SCORE, { 
            puntuacion: this.puntuacion, 
            aciertos: this.aciertos });
        }
      },
      callbackScope: this,
      loop: true
    });
  }

  actualizarTextoTimer(): void {
    this.timerText.setText(`Tiempo: ${this.timer}`);

    if(this.timer <= 10) {
      this.timerText.setColor('#f00');
    }
  }

}

export default PlayScene;