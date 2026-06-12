import * as Phaser from 'phaser';
import { SCENE_KEYS } from '../utils/common';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super(SCENE_KEYS.PRELOAD);
  }

  
  public preload(): void {

    const BASE_ASSETS_URL = '/assets/categorias/1-coordinacion/actividad_2/';

    const BASE_SOUNDS_URL = '/sounds/categorias/1-coordinacion/actividad_2/';

    //this.load.image('sky', `${BASE_ASSETS_URL}sky.jpg`);
    this.load.image('sky', `${BASE_ASSETS_URL}FondoAzul.jpg`);
    this.load.image('FondoMenu', `${BASE_ASSETS_URL}FondoMenu.jpeg`);
    this.load.image('back', `${BASE_ASSETS_URL}back.png`);
    this.load.video('tutorial', `${BASE_ASSETS_URL}tutorial.mp4`);

    this.load.audio('sonidoResponder', `${BASE_SOUNDS_URL}responder.mp3`);
    this.load.audio('sonidoIncorrecto', `${BASE_SOUNDS_URL}incorrecto.mp3`);
  }

  public create(): void {
    this.scene.start(SCENE_KEYS.TITLE);
  } 
}

export default PreloadScene;
