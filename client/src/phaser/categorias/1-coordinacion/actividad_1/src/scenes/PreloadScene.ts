import * as Phaser from 'phaser';
import { SCENE_KEYS } from '../utils/common';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super(SCENE_KEYS.PRELOAD);
  }

  public preload(): void {
    this.load.image('sky', 'public/assets/categorias/1-coordinacion/actividad_1/sky.jpg');
    this.load.image('FondoMenu', 'public/assets/categorias/1-coordinacion/actividad_1/FondoMenu.jpeg');
    this.load.image('back', 'public/assets/categorias/1-coordinacion/actividad_1/back.png');
    this.load.video('tutorial', 'public/assets/categorias/1-coordinacion/actividad_1/tutorial.mp4');
  }

  public create(): void {
    this.scene.start(SCENE_KEYS.TITLE);
  } 
}

export default PreloadScene;
