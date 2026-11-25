import * as Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
  private buttonWidth = 180;
  private buttonHeight = 180;
  private bloqueado = false;
  private botones: Phaser.GameObjects.Container[] = [];
  private frutaObjetivoKey = '';
  private fontOptions = {
    fontFamily: 'Arial',
    fontSize: '32px',
    color: '#000000',
    align: 'center'
  };

  private frutas = ['silueta_manzana', 'silueta_platano', 'silueta_pera', 'silueta_uva'];

  constructor() {
    super('PlayScene');
  }

  preload() {
    const BASE_ASSETS_URL = '/assets/categorias/4-espacial/actividad_1/';

    this.load.image('fondo', `${BASE_ASSETS_URL}FondoMenu.jpeg`);

    this.load.image('silueta_manzana', `${BASE_ASSETS_URL}manzana.png`);
    this.load.image('silueta_platano', `${BASE_ASSETS_URL}pera.png`);
    this.load.image('silueta_pera', `${BASE_ASSETS_URL}uva.png`);
    this.load.image('silueta_uva', `${BASE_ASSETS_URL}limon.png`);
  }

  create() {
    this.crearFondo();
    this.crearPreguntaText();
    this.crearImagenObjetivo();
    this.crearOpciones();
  }

  crearFondo() {
    const { width, height } = this.scale;

    this.add.image(width / 2, height / 2, 'fondo')
      .setDisplaySize(width, height)
      .setDepth(-1);
  }

  crearPreguntaText() {
    const { width } = this.scale;

    this.add.text(width / 2, 80, 'Relaciona la siguiente silueta con su igual', {
      ...this.fontOptions,
      wordWrap: { width: width - 40 }
    }).setOrigin(0.5);
  }

  crearImagenObjetivo() {
    const { width } = this.scale;

    // Selecciona aleatoriamente la fruta objetivo
    this.frutaObjetivoKey = Phaser.Utils.Array.GetRandom(this.frutas);

    this.add.image(width / 2, 250, this.frutaObjetivoKey)
      .setDisplaySize(150, 150);
  }

  crearOpciones() {
    const { width, height } = this.scale;

    const opciones = this.frutas.map(key => ({
      key,
      correcta: key === this.frutaObjetivoKey
    }));

    const opcionesRandomizadas = Phaser.Utils.Array.Shuffle([...opciones]);
    const spacing = 220;
    const total = opcionesRandomizadas.length;

    this.botones = [];
    this.bloqueado = false;

    opcionesRandomizadas.forEach((opcion, i) => {
      const x = width / 2 + (i - (total - 1) / 2) * spacing;
      const y = height - 150;
      const btn = this.crearBotonImagen(x, y, opcion.key, opcion.correcta);
      this.botones.push(btn);
    });
  }

  crearBotonImagen(x: number, y: number, imageKey: string, esCorrecta: boolean): Phaser.GameObjects.Container {
    const container = this.add.container(x, y);
    const width = this.buttonWidth;
    const height = this.buttonHeight;

    const bg = this.add.graphics();
    bg.fillStyle(0x2d2d2d, 1);
    bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);

    const img = this.add.image(0, 0, imageKey).setDisplaySize(width - 30, height - 30);

    container.add([bg, img]);
    container.setSize(width, height);
    container.setInteractive();

    container.on('pointerout', () => {
      bg.clear();
      bg.fillStyle(0x2d2d2d);
      bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);
    });

    container.on('pointerover', () => {
      if (this.bloqueado) return;
      bg.clear();
      bg.fillStyle(0x555555);
      bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);
    });

    container.on('pointerdown', () => {
      this.responder(esCorrecta, container, bg);
    });

    return container;
  }

  responder(esCorrecta: boolean, container: Phaser.GameObjects.Container, bg: Phaser.GameObjects.Graphics) {
    const width = this.buttonWidth;
    const height = this.buttonHeight;

    if (this.bloqueado) return;
    this.bloqueado = true;

    this.botones.forEach(boton => boton.disableInteractive());

    bg.clear();
    bg.fillStyle(esCorrecta ? 0x4caf50 : 0xf44336);
    bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);

    const icono = this.add.text(0, -height / 2 - 10, esCorrecta ? '✓' : '✗', {
      fontSize: '40px',
      color: esCorrecta ? '#00ff00' : '#ff0000'
    }).setOrigin(0.5);

    this.tweens.add({
      targets: icono,
      scale: { from: 0, to: 1 },
      duration: 200
    });

    container.add(icono);

    this.time.delayedCall(800, () => {
      this.scene.restart();
    });
  }
}